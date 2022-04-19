import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'
import Status from 'src/components/Jobs/Shared/Status'
import { resizeFilestackImage } from 'src/components/Uploader/utility'

const JobProfileDisplay = ({ profile }) => {
  if (!profile) {
    return null
  }

  return (
    <JobDetailLayout
      title={
        <>
          <span className="font-bold">{profile.name}</span> is looking for a{' '}
          <span className="block">
            <span className="font-bold">{profile.title}</span> role
          </span>
        </>
      }
      postedDateTime={profile.updatedAt}
      postedLabel="Last Updated"
      buttonLink={`mailto:${profile.email}`}
      buttonLabel="Send a Message"
      back="true"
    >
      <section className="items-stretch md:flex">
        <div className="flex flex-col items-center py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">
            Status
          </h3>
          <div className="mt-1">
            <Status
              status={profile.status}
              textClassName="text-base tracking-tight"
              iconClassName="md-24"
            />
          </div>
        </div>
        <div className="py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">
            Portfolio/Profile
          </h3>
          <div className="mt-2 text-center">
            <a href={profile.portfolioUrl} className="">
              {profile.portfolioUrl}
            </a>
          </div>
        </div>
        <div className="py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">
            Where I'll Work
          </h3>
          <ul className="mt-2 text-center leading-6 text-gray-500">
            {profile.locations.map((location, i) => (
              <li key={`locations-${i}`}>{location}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="p-12 pt-8">
        <ReactMarkdown className="markdown">{profile.about}</ReactMarkdown>
        <div className="mt-8 flex justify-center">
          <img
            src={resizeFilestackImage(profile.photo, {
              width: 512,
              height: 512,
              fit: 'crop',
            })}
            alt={`${profile.name}`}
            className="h-64 w-64 rounded-full object-contain"
          />
        </div>
      </section>
    </JobDetailLayout>
  )
}

export default JobProfileDisplay
