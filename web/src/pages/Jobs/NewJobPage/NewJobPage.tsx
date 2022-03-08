import { useState } from 'react'

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
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FormTaggable from 'src/components/Jobs/Shared/FormTaggable'
import JobDisplay from 'src/components/Jobs/JobDisplay'

const CREATE_JOB = gql`
  mutation CreateJobMutation($input: CreateJobInput!) {
    createJob(input: $input) {
      id
    }
  }
`

const NewJobPage = () => {
  const [locations, setLocations] = useState([])
  const [compensation, setCompensation] = useState([])
  const [perks, setPerks] = useState([])
  const [previewJob, setPreviewJob] = useState({})

  const formMethods = useForm()

  const [createJob, { loading, error }] = useMutation(CREATE_JOB, {
    onCompleted: ({ createJob }) => {
      toast.success('Job post created!')
      navigate(routes.job({ id: createJob.id }))
    },
  })

  const taggables = (data) => {
    return {
      locations: locations.length ? locations : [data.locations],
      compensation: compensation.length ? compensation : [data.compensation],
      perks: perks.length ? perks : [data.perks],
    }
  }

  const onSubmit = (data) => {
    createJob({
      variables: {
        input: {
          ...data,
          ...taggables(data),
          logo: '/images/snaplet_logo.svg',
        },
      },
    })
  }

  const onPreview = (data) => {
    setPreviewJob({
      ...data,
      ...taggables(data),
      logo: '/images/snaplet_logo.svg',
      createdAt: new Date(),
    })
  }

  return (
    <>
      <MetaTags
        title="Post a Job"
        description="Looking to hire RedwoodJS developers? Post on the Redwood job board!"
      />

      <div className="max-w-screen-lg mx-auto job">
        <header className="mt-36">
          <h1 className="relative text-6xl px-16 text-teal-800 tracking-normal text-center">
            Post a Job
          </h1>
          <div className="mt-2 text-center text-stone-500">
            Get your job in front of the best RedwoodJS devs
          </div>
        </header>

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
                validation={{ required: true }}
              />
              <FieldError name="email" className="fieldError" />
            </div>
            <div className="column help">
              So that we can verify a real person is creating this and inform
              you of any updates to your job post.
            </div>
          </div>

          <div className="input">
            <div className="column">
              <Label name="company" errorClassName="error">
                Company Name
              </Label>
              <TextField
                name="company"
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
              <Label name="title" errorClassName="error">
                Job Title
              </Label>
              <TextField
                name="title"
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
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="applyUrl" className="fieldError" />
            </div>
            <div className="column help">
              If you are using an applicant tracking system, include a link to
              the application page. If you want to accept submissions via email,
              enter an email address here.
            </div>
          </div>

          <div className="input">
            <div className="column">
              <Label name="locations" errorClassName="error">
                Location(s)
              </Label>
              <FormTaggable
                name="locations"
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
              <FormTaggable name="perks" get={perks} set={setPerks} />
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
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="aboutJob" className="fieldError" />
            </div>
            <div className="column help">
              Tell prospective employees what they can expect in this role. This
              isn't necessarily job <em>requirements</em> (you can add those in
              the <strong>About You</strong> section below) but what the job
              itself entails. <strong>Markdown is supported</strong> so get
              creative with lists, pull quotes or even an image or two.
            </div>
          </div>

          <div className="input">
            <div className="column">
              <Label name="aboutApplicant" errorClassName="error">
                Job Requirements
              </Label>
              <TextAreaField
                name="aboutApplicant"
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="aboutApplicant" className="fieldError" />
            </div>
            <div className="column help">
              Let employees know what experience they should have to be
              considered for this role. <strong>Markdown is supported.</strong>
            </div>
          </div>

          <div className="input">
            <div className="column">
              <Label name="aboutCompany" errorClassName="error">
                About the Company
              </Label>
              <TextAreaField
                name="aboutCompany"
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="aboutCompany" className="fieldError" />
            </div>
            <div className="column help">
              Tell everyone what's so amazing about your company and why
              everyone would want to work there.{' '}
              <strong>Markdown is supported.</strong>
            </div>
          </div>

          <div className="mt-24 text-left max-w-screen-md mx-auto bg-gradient-to-b from-teal-600 to-teal-700 text-white border-16 border-teal-500 px-16 py-8">
            <h2 className="text-2xl text-center text-teal-200 font-semibold">
              Important Text You Should Read
            </h2>
            <p className="mt-6 font-light">
              We (Redwood team members) reserve the right to remove this job
              post from public display if we determine it is spam or otherwise
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
      </div>

      {Object.keys(previewJob).length > 0 && (
        <>
          <div className="fixed inset-0 z-10">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-orange-50 m-8 p-8 rounded-xl overflow-y-scroll">
              <button
                type="button"
                className="absolute top-0 right-0 mt-4 mr-4 text-orange-400 hover:text-orange-700 transition duration-150"
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

export default NewJobPage
