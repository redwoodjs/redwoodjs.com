import type { JobProfilesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, navigate, routes } from '@redwoodjs/router'
import ReactMarkdown from 'react-markdown'

import Status from 'src/components/Jobs/Shared/Status'
import { resizeFilestackImage } from 'src/components/Uploader/utility'

export const QUERY = gql`
  query JobProfilesQuery($limit: Int) {
    jobProfiles(limit: $limit) {
      id
      status
      name
      title
      photo
      title
      about
      locations
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="flex justify-center bg-white py-12 rounded-lg text-gray-400">
    <span className="icon animate-spin mr-2">refresh</span> Loading...
  </div>
)

export const Empty = () => (
  <div className="flex justify-center bg-white py-12 rounded-lg text-gray-400">
    No job postings yet!
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  jobProfiles,
  showAll,
}: CellSuccessProps<JobProfilesQuery>) => {
  return (
    <table className="w-full rounded-lg bg-white">
      <tbody>
        {jobProfiles.map((profile, i) => (
          <tr
            key={`job_profiles-${profile.id}`}
            onClick={() => navigate(routes.jobProfile({ id: profile.id }))}
            className={`duration-250 flex cursor-pointer flex-col flex-nowrap border-gray-200 transition hover:bg-teal-50 sm:table-row`}
          >
            <td
              className={`flex w-full items-center justify-center pt-16 pb-4 sm:w-48 sm:py-8`}
            >
              <img
                src={resizeFilestackImage(profile.photo, {
                  width: 256,
                  height: 256,
                  fit: 'crop',
                })}
                alt={`${profile.name}`}
                className="w-32 rounded-full sm:w-24"
              />
            </td>
            <td className="px-4 text-center sm:py-8 sm:px-0 sm:text-left">
              <strong className="text-lg font-semibold text-rw-500 underline">
                {profile.name}
              </strong>
              <div className="text-gray-400">{profile.title}</div>
              <p className="mt-1">
                {profile.about.split(' ').slice(0, 35).join(' ')}...
              </p>
            </td>
            <td
              className={`py-4 text-center text-gray-500 sm:py-8 sm:px-4 sm:text-left`}
            >
              <div className="justify flex flex-col items-start">
                <ReactMarkdown className="whitespace-nowrap w-full">
                  {profile.locations.join('\n\n')}
                </ReactMarkdown>
                <div className="-ml-1 mt-1 sm:text-center w-full sm:w-auto px-12 sm:px-0">
                  <Status
                    status={profile.status}
                    textClassName=""
                    iconClassName="md-16"
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
        {showAll && (
          <tr className="">
            <td
              colSpan={3}
              className="duration-250 cursor-pointer rounded-b-lg text-center font-serif font-semibold text-2xl transition"
            >
              <Link
                to={routes.allJobProfiles()}
                className="block w-full p-8 text-rw-500 no-underline"
              >
                See All Profiles &rarr;
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
