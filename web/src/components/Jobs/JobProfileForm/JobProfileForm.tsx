import { useState } from 'react'
import * as filestack from 'filestack-js'
import { Switch } from '@headlessui/react'

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

import FormTaggable from 'src/components/Jobs/Shared/FormTaggable'
import JobProfileDisplay from 'src/components/Jobs/JobProfileDisplay'
import Status from 'src/components/Jobs/Shared/Status'
import { resizeFilestackImage } from 'src/components/Uploader/utility'

const JobProfileForm = ({ profile = {}, token, loading, error, saveFunc }) => {
  const [locations, setLocations] = useState(profile.locations || [])
  const [status, setStatus] = useState(profile.status || 'available')
  const [imageUrl, setImageUrl] = useState(profile.photo)
  const [previewProfile, setPreviewProfile] = useState({})
  const fsClient = filestack.init(process.env.FILESTACK_API_KEY)

  const formMethods = useForm()

  const taggables = (data) => {
    return {
      locations: locations.length ? locations : [data.locations],
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

  const onSubmit = (data) => {
    const variables = {
      input: {
        ...data,
        ...taggables(data),
        photo: imageUrl,
        status,
      },
    }

    if (profile) {
      variables.id = profile.id
      variables.token = token
    }

    saveFunc({ variables })
  }

  const onPreview = (data) => {
    console.info(imageUrl)

    setPreviewProfile({
      ...data,
      ...taggables(data),
      status,
      photo: imageUrl,
      updatedAt: new Date(),
    })
  }

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
              defaultValue={profile.email}
              errorClassName="error"
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
            This is where employers will be able to contact you. It's also so
            that we can verify you're a real person.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="name" errorClassName="error">
              Name
            </Label>
            <TextField
              name="name"
              defaultValue={profile.name}
              errorClassName="error"
              validation={{
                required: true,
              }}
            />
            <FieldError name="name" className="fieldError" />
          </div>
          <div className="column help">
            Could be your screen name or your real name.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="company" errorClassName="error">
              Profile Photo
            </Label>
            {imageUrl ? (
              <div className="flex flex-col items-center">
                <img
                  src={resizeFilestackImage(imageUrl, {
                    width: 384,
                    height: 384,
                    fit: 'crop',
                  })}
                  alt="Uploaded logo"
                  className="max-w-48 max-h-48 rounded-full"
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
            This doesn't have to be your face, but will be displayed along with
            your profile. You should crop this image square (you can crop in the
            uploader) but we'll force it square if you don't. PNG, JPG or GIF
            only, please.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="title" errorClassName="error">
              Title
            </Label>
            <TextField
              name="title"
              defaultValue={profile.title}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="title" className="fieldError" />
          </div>
          <div className="column help">
            The title you currently have, the title you want in your next role,
            or just something fun.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="portfolioUrl" errorClassName="error">
              Portfolio URL
            </Label>
            <TextField
              name="portfolioUrl"
              defaultValue={profile.portfolioUrl}
              errorClassName="error"
              validation={{
                required: true,
                pattern: {
                  value: /^https?:\/\/\S+$/i,
                  message:
                    "Doesn't look like a URL (be sure to include https://)",
                },
              }}
            />
            <FieldError name="portfolioUrl" className="fieldError" />
          </div>
          <div className="column help">
            This can be a link to a portfolio site, your GitHub profile, your
            Twitter page or anything else!
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="status" errorClassName="error">
              Status
            </Label>
            <div className="my-8 flex items-center justify-center">
              <div
                className={`transition duration-150 ${
                  status === 'booked' && 'opacity-40'
                }`}
              >
                <Status status="available" />
              </div>

              <Switch
                checked={status === 'booked'}
                onChange={() =>
                  setStatus(status === 'booked' ? 'available' : 'booked')
                }
                className={`${
                  status === 'booked' ? 'bg-rw-500' : 'bg-forest-500'
                }
          relative inline-flex flex-shrink-0 mt-1 h-8 w-14 mx-2 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Set status</span>
                <span
                  aria-hidden="true"
                  className={`${
                    status === 'booked' ? 'translate-x-6' : 'translate-x-1'
                  }
            pointer-events-none inline-block mt-[2px] h-6 w-6 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
              </Switch>
              <div
                className={`transition duration-150 ${
                  status === 'available' && 'opacity-50'
                }`}
              >
                <Status status="booked" />
              </div>
            </div>
            <FieldError name="status" className="fieldError" />
          </div>
          <div className="column help">
            If you're available for work select <strong>Available</strong>,
            otherwise flip it to <strong>Booked</strong>.
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
            Enter at least one location that you're willing to work from. If you
            only want to work from home then set this to <strong>Remote</strong>
            . Otherwise, the city/state/region where you're willing to go. Ex:{' '}
            <strong>San Diego, California</strong> or{' '}
            <strong>Berlin, Germany</strong>.
          </div>
        </div>

        <div className="input">
          <div className="column">
            <Label name="about" errorClassName="error">
              About You
            </Label>
            <TextAreaField
              name="about"
              defaultValue={profile.about}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="about" className="fieldError" />
          </div>
          <div className="column help">
            Here's your chance to tell everyone how awesome you are. Include a
            list of skills or a whirlwind tour of your previous experience.
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

        <div className="mt-24 text-left max-w-screen-md mx-auto bg-gradient-to-b from-forest-600 to-forest-700 text-white border-16 border-forest-500 px-16 py-8">
          <h2 className="text-2xl text-center text-forest-200 font-semibold">
            Important Text You Should Read
          </h2>
          <p className="mt-6 font-light">
            We (Redwood team members) reserve the right to remove this profile
            from public display if we determine it is spam or otherwise
            malicious.
          </p>

          <p className="mt-6 font-light">
            We will email you a link that you can use to edit your profile
            listing. This link will be the only way to edit your profile so
            don't lose it! Check your spam box if you don't get it within a
            minute or two.
          </p>

          <p className="mt-6 font-light text-center">
            Questions?{' '}
            <a
              href="mailto:jobs@redwoodjs.com?subject=Question%20about%20job%20posting"
              className="text-white hover:text-forest-200"
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
            className="button-invert border border-forest-500"
            onClick={formMethods.handleSubmit(onPreview)}
          >
            Preview
          </button>
        </div>
      </Form>

      {Object.keys(previewProfile).length > 0 && (
        <>
          <div className="fixed inset-0 z-10">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-rw-50 m-8 p-8 rounded-xl overflow-y-scroll">
              <button
                type="button"
                className="fixed top-0 right-0 mt-12 mr-12 text-rw-400 hover:text-rw-700 transition duration-150"
                onClick={() => setPreviewProfile({})}
              >
                <span className="icon md-48">close</span>
              </button>
              <div className="-mt-24">
                <JobProfileDisplay profile={previewProfile} back={false} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default JobProfileForm
