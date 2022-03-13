import { useState } from 'react'
import * as filestack from 'filestack-js'

import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
  TextAreaField,
  useForm,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import JobDisplay from 'src/components/Jobs/JobDisplay'
import FormTaggable from 'src/components/Jobs/Shared/FormTaggable'
import { resizeFilestackImage } from 'src/lib/utility'

const JobForm = ({ job = {}, token, loading, error, saveFunc }) => {
  const [locations, setLocations] = useState(job.locations || [])
  const [compensation, setCompensation] = useState(job.compensation || [])
  const [perks, setPerks] = useState(job.perks || [])
  const [imageUrl, setImageUrl] = useState(job.logo)
  const [previewJob, setPreviewJob] = useState({})
  const fsClient = filestack.init(process.env.FILESTACK_API_KEY)

  const formMethods = useForm()

  const taggables = (data) => {
    return {
      locations: locations.length ? locations : [data.locations],
      compensation: compensation.length ? compensation : [data.compensation],
      perks: perks.length ? perks : [data.perks],
    }
  }

  const onOpenPicker = () => {
    fsClient
      .picker({
        accept: ['image/jpeg', 'image/png', 'image/gif'],
        maxFiles: 1,
        onUploadDone: onUpload,
      })
      .open()
  }

  const onChangeImage = () => {
    setImageUrl(null)
    onOpenPicker()
  }

  const onUpload = ({ filesUploaded, filesFailed }) => {
    if (filesFailed.length) {
      toast.error(
        'There was a problem uploading your selected image. Try again, or pick a different image.',
        { duration: 10000 }
      )
    } else {
      setImageUrl(filesUploaded[0].url)
    }
  }

  const onPreview = (data) => {
    setPreviewJob({
      ...data,
      ...taggables(data),
      logo: imageUrl,
      createdAt: new Date(),
    })
  }

  const onSubmit = (data) => {
    const variables = {
      input: {
        ...data,
        ...taggables(data),
        logo: imageUrl,
      },
    }

    if (job) {
      variables.id = job.id
      variables.token = token
    }

    console.info(variables)

    saveFunc({ variables })
  }

  console.info(job)

  return (
    <>
      <Form
        className="max-w-screen-lg mt-19 mb-12 jobForm"
        formMethods={formMethods}
        onSubmit={onSubmit}
      >
        <div className="input">
          <div className="column">
            <Label name="email" errorClassName="error">
              Email
            </Label>
            <TextField
              name="email"
              errorClassName="error"
              defaultValue={job.email}
              validation={{
                required: true,
                pattern: {
                  value: /^\S+@\S+\.\S+$/i,
                  message: "Doesn't look like an email address",
                },
              }}
            />
            <FieldError name="email" className="fieldError" />
          </div>
          <div className="column help">
            So that we can verify a real person is creating this and inform you
            of any updates to your job post.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="company" errorClassName="error">
              Company Name
            </Label>
            <TextField
              name="company"
              defaultValue={job.company}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="company" className="fieldError" />
          </div>
          <div className="column help">
            The name of the company that any hires will be working for. If you
            work for an agency, this should be your client's name.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="logo" errorClassName="error">
              Logo
            </Label>
            {imageUrl ? (
              <div className="flex flex-col items-center">
                <img
                  src={resizeFilestackImage(imageUrl, {
                    width: 768,
                    height: 384,
                  })}
                  alt="Uploaded logo"
                  className="w-96 h-48 mx-auto object-contain"
                />
                <button
                  type="button"
                  className="mt-4 button-sm"
                  onClick={onChangeImage}
                >
                  Change Image
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="mt-2 button-alt"
                onClick={onOpenPicker}
              >
                Choose Image...
              </button>
            )}
          </div>
          <div className="column help">
            Include your company's logo to help make your job post stand out.
            PNG, JPG or GIF only, please.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="title" errorClassName="error">
              Job Title
            </Label>
            <TextField
              name="title"
              defaultValue={job.title}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="title" className="fieldError" />
          </div>
          <div className="column help">
            The title of the job you're hiring for. This could be as simple as{' '}
            <strong>Dev</strong> or something like{' '}
            <strong>Executive Director of Developer Relations</strong>.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="applyUrl" errorClassName="error">
              Job Application URL
            </Label>
            <TextField
              name="applyUrl"
              defaultValue={job.applyUrl}
              errorClassName="error"
              validation={{
                required: true,
                pattern: {
                  value: /^(\S+@\S+\.\S+|https?:\/\/\S+)$/i,
                  message:
                    "Doesn't look like an email address or URL (be sure to include https://)",
                },
              }}
            />
            <FieldError name="applyUrl" className="fieldError" />
          </div>
          <div className="column help">
            If you are using an applicant tracking system, include a link to the
            application page. If you want to accept submissions via email, enter
            an email address here.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="locations" errorClassName="error">
              Location(s)
            </Label>
            <FormTaggable
              name="locations"
              singular="location"
              get={locations}
              set={setLocations}
            />
            <FieldError name="locations" className="fieldError" />
          </div>
          <div className="column help">
            Enter at least one location. If the job is fully remote then just
            enter <strong>Remote</strong>. Otherwise, the city/state/region
            where your office is.
            <br />
            Ex: <strong>San Diego, California</strong> or{' '}
            <strong>Berlin, Germany</strong>.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="compensation" errorClassName="error">
              Compensation
            </Label>
            <FormTaggable
              name="compensation"
              get={compensation}
              set={setCompensation}
            />
            <FieldError name="compensation" className="fieldError" />
          </div>
          <div className="column help">
            Enter at least one item, perferrably salary. You can enter a range
            like <strong>$100,000 - $150,000</strong> or something like{' '}
            <strong>~$100k</strong>. Some more compensation suggestions:{' '}
            <strong>401k</strong>, <strong>Stock Options</strong>,{' '}
            <strong>Company Performance Bonus</strong>,{' '}
            <strong>Generous Vacation Policy</strong>. Note that these are
            different than Perks, which come next.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="perks" errorClassName="error">
              Perks
            </Label>
            <FormTaggable
              name="perks"
              singular="perk"
              get={perks}
              set={setPerks}
            />
            <FieldError name="perks" className="fieldError" />
          </div>
          <div className="column help">
            Hopefully you have at least one perk for working for this company!
            These are the things that make this job fun and unique, not
            necessarily tied to compensation. Something like{' '}
            <strong>Book Stipend</strong>, <strong>Dog Friendly</strong> or{' '}
            <strong>Monthly Karaoke Competition</strong>. Be creative!
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="aboutJob" errorClassName="error">
              About the Job
            </Label>
            <TextAreaField
              name="aboutJob"
              defaultValue={job.aboutJob}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="aboutJob" className="fieldError" />
          </div>
          <div className="column help">
            Tell prospective employees what they can expect in this role. This
            isn't necessarily job <em>requirements</em> (you can add those in
            the <strong>Job Requirements</strong> section below) but what the
            job itself entails.{' '}
            <strong>
              <a
                href="https://www.markdownguide.org/cheat-sheet/"
                className="text-stone-500"
                target="_blank"
                rel="noreferrer"
              >
                Markdown
              </a>{' '}
              is supported
            </strong>{' '}
            so get creative with lists, pull quotes or even an image or two.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="aboutApplicant" errorClassName="error">
              Job Requirements
            </Label>
            <TextAreaField
              name="aboutApplicant"
              defaultValue={job.aboutApplicant}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="aboutApplicant" className="fieldError" />
          </div>
          <div className="column help">
            Let employees know what experience they should have to be considered
            for this role.{' '}
            <strong>
              <a
                href="https://www.markdownguide.org/cheat-sheet/"
                className="text-stone-500"
                target="_blank"
                rel="noreferrer"
              >
                Markdown
              </a>{' '}
              is supported.
            </strong>
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="aboutCompany" errorClassName="error">
              About the Company
            </Label>
            <TextAreaField
              name="aboutCompany"
              defaultValue={job.aboutCompany}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="aboutCompany" className="fieldError" />
          </div>
          <div className="column help">
            Tell everyone what's so amazing about your company and why everyone
            would want to work there.{' '}
            <strong>
              <a
                href="https://www.markdownguide.org/cheat-sheet/"
                className="text-stone-500"
                target="_blank"
                rel="noreferrer"
              >
                Markdown
              </a>{' '}
              is supported.
            </strong>
          </div>
        </div>

        <div className="mt-24 text-left max-w-screen-md mx-auto bg-gradient-to-b from-teal-600 to-teal-700 text-white border-16 border-teal-500 px-16 py-8">
          <h2 className="text-2xl text-center text-teal-200 font-semibold">
            Important Text You Should Read
          </h2>
          <p className="mt-6 font-light">
            We (Redwood team members) reserve the right to remove this job post
            from public display if we determine it is spam or otherwise
            malicious.
          </p>

          <p className="mt-6 font-light">
            We will email you a link that you can use to edit your job post
            details. This link will be the only way to edit your post so don't
            lose it!
          </p>

          <p className="mt-6 font-light">
            Jobs will be live for 30 days. After that they will be disabled so
            that they no longer display as open positions. If the position is
            still available, you can follow the edit link in the email to
            re-enable the post and it will show again.
          </p>

          <p className="mt-6 font-light text-center">
            Questions?{' '}
            <a
              href="mailto:jobs@redwoodjs.com?subject=Question%20about%20job%20posting"
              className="text-white hover:text-teal-200"
            >
              jobs@redwoodjs.com
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center my-20 space-x-8">
          <Submit className="button" disabled={loading}>
            Save & Post
          </Submit>
          <button
            type="button"
            disabled={loading}
            className="button-invert border border-teal-500"
            onClick={formMethods.handleSubmit(onPreview)}
          >
            Preview
          </button>
        </div>
      </Form>

      {Object.keys(previewJob).length > 0 && (
        <>
          <div className="fixed inset-0 z-10">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-orange-50 m-8 p-8 rounded-xl overflow-y-scroll">
              <button
                type="button"
                className="fixed top-0 right-0 mt-12 mr-12 text-orange-400 hover:text-orange-700 transition duration-150"
                onClick={() => setPreviewJob({})}
              >
                <span className="icon md-48">close</span>
              </button>
              <div className="-mt-24">
                <JobDisplay job={previewJob} back={false} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default JobForm
