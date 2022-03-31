import * as filestack from 'filestack-js'
import type { PickerResponse } from 'filestack-js'
import { useCallback, useMemo, useState } from 'react'
import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import SocialLinkField from 'src/components/SocialLink/SocialLinkField'
import StringListField from 'src/components/StringListField'
import StartupQuestionaireField from 'src/components/Startup/StartupQuestionaireField'

import type { CreateStartupInput, EditStartupQuery } from 'types/graphql'

// --

type UploadedImageType = 'thumbnail' | 'images'
interface UploadedImageState {
  thumbnail?: string
  images?: string[]
}

export interface StartupFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  loading?: boolean
  onSave: (data: CreateStartupInput) => void
  startup?: EditStartupQuery['startup']
}

// --

const StartupForm = ({ onSave, ...p }: StartupFormProps) => {
  //
  const fsClient = useMemo(
    () => filestack.init(process.env.FILESTACK_API_KEY),
    []
  )

  // --

  const [images, setImages] = useState<UploadedImageState>({
    thumbnail: p.startup?.thumbnail,
    images: p.startup?.images || [],
  })

  // --

  const onUploadImage = useCallback(
    (type: UploadedImageType, files: PickerResponse) => {
      if (files.filesFailed.length)
        toast.error(
          'There was an error uploading one or more of your images.',
          { duration: 10000 }
        )

      if (!files.filesUploaded.length) return

      if (files.filesUploaded.length > 1)
        return setImages((prev) => ({
          ...prev,
          [type]: files.filesUploaded.map((f) => f.url),
        }))

      setImages((prev) => ({ ...prev, [type]: files.filesUploaded[0].url }))
    },
    [setImages]
  )

  // --

  const onPickImage = useCallback(
    (type: UploadedImageType, maxFiles = 1) =>
      fsClient
        .picker({
          accept: ['image/jpeg', 'image/png', 'image/gif'],
          maxFiles,
          onUploadDone: (files) => onUploadImage(type, files),
        })
        .open(),
    [fsClient, onUploadImage]
  )

  // --

  const onSubmit = useCallback(
    (d: CreateStartupInput) => {
      if (!images.thumbnail) return toast.error('A "thumbnail" is required.')

      onSave({ ...d, ...images })
    },
    [images, onSave]
  )

  // --

  return (
    <div className="rw-form-wrapper">
      <Form className="space-y-12" onSubmit={onSubmit} error={p.error}>
        <FormError
          error={p.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        {/* Meta */}
        <section className="mt-6 space-y-5">
          <header className="border-b border-gray-200 pb-4 space-y-2">
            <h2 className="text-2xl font-semibold text-stone-800">
              Information
            </h2>
            <p className="text-sm text-stone-500">
              General information about the startup.
            </p>
          </header>
          {/* Published */}
          <div className="space-y-3 mt-6">
            <div className="flex flex-row items-center space-x-4">
              <Label
                name="published"
                className="rw-label cursor-pointer select-none mt-0.5"
                errorClassName="rw-label rw-label-error"
              >
                Published
              </Label>
              <CheckboxField
                name="published"
                defaultChecked={p.startup?.published}
                className="rw-input cursor-pointer"
                errorClassName="rw-input rw-input-error"
              />
            </div>
            <span className="block font-normal text-sm text-stone-500">
              Publicly display this startup on the &quot;Startup Showcases&quot;
              page.
            </span>
            <FieldError name="published" className="rw-field-error" />
          </div>
          {/* Name */}
          <div className="space-y-3">
            <Label
              name="name"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Name
            </Label>
            <TextField
              className="rw-input"
              defaultValue={p.startup?.name}
              errorClassName="rw-input rw-input-error"
              name="name"
              validation={{ required: true }}
            />
            <FieldError name="name" className="rw-field-error" />
          </div>
          {/* Tagline */}
          <div className="space-y-3">
            <Label
              name="tagline"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Tagline</span>
              <span className="block font-normal text-sm text-stone-500">
                A short, two or three sentence long description of the startup.
              </span>
            </Label>
            <TextField
              className="rw-input"
              defaultValue={p.startup?.tagline}
              errorClassName="rw-input rw-input-error"
              name="tagline"
              validation={{ required: true }}
            />
            <FieldError name="tagline" className="rw-field-error" />
          </div>
        </section>

        {/* Branding */}
        <section className="space-y-5">
          <header className="border-b border-gray-200 pb-4 space-y-2">
            <h2 className="text-2xl font-semibold text-stone-800">Branding</h2>
            <p className="text-sm text-stone-500">
              Images used to convey the startup&apos;s identity.
            </p>
          </header>
          {/* Thumbnail */}
          <div className="space-y-3">
            <Label
              name="thumbnail"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span>Thumbnail</span>
              <span className="block font-normal text-sm text-stone-500">
                Displayed on the Startup Showcase landing page.{' '}
                <span className="font-semibold">Expected Size: 500x220</span>
              </span>
            </Label>
            <button
              className="button button-alt px-4 py-1.5 capitalize text-base"
              onClick={() => onPickImage('thumbnail')}
              type="button"
            >
              {images.thumbnail?.length
                ? 'Change Thumbnail'
                : 'Upload Thumbnail'}
            </button>
            {images.thumbnail && (
              <img alt="Startup thumbnail" src={images.thumbnail} />
            )}
            <FieldError name="thumbnail" className="rw-field-error" />
          </div>
        </section>

        {/* Demo */}
        <section className="space-y-5">
          <header className="border-b border-gray-200 pb-4 space-y-2">
            <h2 className="text-2xl font-semibold text-stone-800">
              Demonstration
            </h2>
            <p className="text-sm text-stone-500">
              Videos and images walking through the RedwoodJS application the
              startup has built.
            </p>
          </header>
          {/* Videos */}
          <div className="space-y-4">
            <Label
              name="videos"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Videos</span>
              <span className="block font-normal text-sm text-stone-500">
                A list of{' '}
                <a
                  className="hover:underline hover:text-teal-800"
                  href="https://gist.github.com/jakebellacera/d81bbf12b99448188f183141e6696817"
                >
                  YouTube video IDs
                </a>{' '}
                demonstrating your application.
              </span>
            </Label>
            <StringListField
              addTitle="Add Video"
              defaultValue={p.startup?.videos}
              name="videos"
              placeholder="-EtHF5ND3_s"
            />
            <FieldError name="videos" className="rw-field-error" />
          </div>
          {/* Images */}
          <div className="space-y-4">
            <Label
              name="images"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Images</span>
              <span className="block font-normal text-sm text-stone-500">
                Images to market the startup&apos;s application and its
                features. A maximum of 15 images are allowed.{' '}
                <span className="font-semibold">Expected Size: 635x380</span>
              </span>
            </Label>
            {images?.images?.length > 0 && (
              <p className="text-stone-500 text-sm italic">
                Images successfully uploaded.
              </p>
            )}
            <button
              className="button button-alt px-4 py-1.5 capitalize text-base"
              onClick={() => onPickImage('images', 10)}
              type="button"
            >
              {images?.images?.length > 0 ? 'Change Images' : 'Upload Images'}
            </button>
            <FieldError name="images" className="rw-field-error" />
          </div>
        </section>

        {/* About */}
        <section className="space-y-5">
          <header className="border-b border-gray-200 pb-4 space-y-2">
            <h2 className="text-2xl font-semibold text-stone-800">About</h2>
            <p className="text-sm text-stone-500">
              Text, links, and lists about the startup, its founders, and the
              application they have built.
            </p>
          </header>
          {/* Call-to-action */}
          <div className="space-y-3">
            <Label
              name="cta"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Call to Action</span>
              <span className="block font-normal text-sm text-stone-500">
                The text for a call-to-action button and a link the user will be
                directed to when clicked.
              </span>
            </Label>
            <div className="flex flex-row space-x-6">
              <div className="flex-grow space-y-2">
                <TextField
                  className="rw-input"
                  defaultValue={p.startup?.cta.title}
                  errorClassName="rw-input rw-input-error"
                  placeholder="Title"
                  name="cta.title"
                  validation={{ required: 'Title is required' }}
                />
                <FieldError name="cta.title" className="rw-field-error" />
              </div>
              <div className="flex-grow space-y-2">
                <TextField
                  className="rw-input"
                  defaultValue={p.startup?.cta.href}
                  errorClassName="rw-input rw-input-error"
                  placeholder="Link"
                  name="cta.href"
                  validation={{ required: 'Link is required' }}
                />
                <FieldError name="cta.href" className="rw-field-error" />
              </div>
            </div>
          </div>
          {/* About */}
          <div className="space-y-3">
            <Label
              name="about"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">About</span>
              <span className="block font-normal leading-relaxed text-sm text-stone-500">
                A long description, overview, or story about the startup.{' '}
                <a
                  href="https://www.markdownguide.org/cheat-sheet/"
                  className="text-stone-500 hover:text-stone-700 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Supports Markdown
                </a>
                <br />
                <strong>Note:</strong> Any major headings <code># Hello</code>
                will be rendered as an <code>h2</code> element to preserve page
                semantics.
              </span>
            </Label>
            <TextAreaField
              className="rw-input"
              defaultValue={p.startup?.about}
              errorClassName="rw-input rw-input-error"
              name="about"
            />
            <FieldError name="about" className="rw-field-error" />
          </div>
          {/* Achievements */}
          <div className="space-y-3">
            <Label
              name="achievements"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Achievements</span>
              <span className="block font-normal text-sm text-stone-500">
                Accomplishments and feats this startup is proud of. (max: 5)
              </span>
            </Label>
            <StringListField
              addTitle="Add an Achievement"
              defaultValue={p.startup?.achievements}
              name="achievements"
              placeholder="First Deployment, 30 Fortune 500 Customers, 15M Raised, ..."
              max={5}
            />
            <FieldError name="achievements" className="rw-field-error" />
          </div>
          {/* Questionaire */}
          <div className="space-y-3">
            <Label
              name="questionResponses"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Questionaire</span>
              <span className="block font-normal text-sm text-stone-500">
                Add the founder of this startup&apos;s responses to the
                questionaire.
              </span>
            </Label>
            <StartupQuestionaireField
              defaultValue={p.startup?.questionResponses}
              name="questionResponses"
            />
            <FieldError name="questionResponses" className="rw-field-error" />
          </div>
          {/* Technologies */}
          <div className="space-y-3">
            <Label
              name="technologies"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Technologies</span>
              <span className="block font-normal text-sm text-stone-500">
                The technologies this startup has been built, deployed, and is
                maintained with. (max: 10)
              </span>
            </Label>
            <StringListField
              addTitle="Add a Technology"
              defaultValue={p.startup?.technologies}
              name="technologies"
              placeholder="Algolia, Docker, Netlify, Stripe, ..."
              max={10}
            />
            <FieldError name="technologies" className="rw-field-error" />
          </div>
          {/* Social Links */}
          <div className="space-y-4">
            <Label
              name="socialLinks"
              className="rw-label space-y-1"
              errorClassName="rw-label rw-label-error"
            >
              <span className="block">Social Links</span>
              <span className="block font-normal text-sm text-stone-500">
                Add links to this startup&apos;s social media platforms.
              </span>
            </Label>
            <SocialLinkField
              defaultValue={p.startup?.socialLinks}
              name="socialLinks"
            />
            <FieldError name="socialLinks" className="rw-field-error" />
          </div>
        </section>

        <div className="rw-button-group">
          <Submit disabled={p.loading} className="button button-sm px-4 py-1.5">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StartupForm
