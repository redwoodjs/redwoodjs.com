import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'
import Status from 'src/components/Jobs/Shared/Status'
import { resizeFilestackImage } from 'src/lib/utility'

const JobProfileDisplay = ({ profile }) => {
  if (!profile) {
    return null
  }

  return (
    <JobDetailLayout
      title={
        <>
          <span className="text-teal-800">{profile.name}</span> is looking for a{' '}
          <span className="block">
            <span className="text-teal-800">{profile.title}</span> role
          </span>
        </>
      }
      postedDateTime={profile.updatedAt}
      postedLabel="Last Updated"
      buttonLink={`mailto:${profile.email}`}
      buttonLabel="Send a Message"
      back="true"
    >
      <section className="md:flex items-stretch">
        <div className="md:w-1/3 flex flex-col items-center py-8 px-12">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
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
        <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
            Portfolio/Profile
          </h3>
          <div className="mt-2 text-sm text-center">
            <a href={profile.portfolioUrl} className="text-stone-600">
              {profile.portfolioUrl}
            </a>
          </div>
        </div>
        <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
            Where I'll Work
          </h3>
          <ul className="mt-2 text-stone-600 text-sm leading-6 text-center">
            {profile.locations.map((location, i) => (
              <li key={`locations-${i}`}>{location}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-red-200 p-12 pt-8">
        <ReactMarkdown className="markdown">{profile.about}</ReactMarkdown>
        <div className="mt-8 flex justify-center">
          <img
            src={resizeFilestackImage(profile.photo, {
              width: 512,
              height: 512,
              fit: 'crop',
            })}
            alt={`${profile.name}`}
            className="w-64 h-64 rounded-full object-contain"
          />
        </div>
      </section>
    </JobDetailLayout>
  )
}

export default JobProfileDisplay
