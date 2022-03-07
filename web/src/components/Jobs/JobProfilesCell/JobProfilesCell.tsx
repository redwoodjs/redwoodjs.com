import type { JobProfilesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { navigate, routes } from '@redwoodjs/router'
import ReactMarkdown from 'react-markdown'

import Status from 'src/components/Jobs/Shared/Status'

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
  <div className="flex justify-center bg-white py-12 rounded-lg text-stone-400">
    <span className="icon animate-spin mr-2">refresh</span> Loading...
  </div>
)

export const Empty = () => (
  <div className="flex justify-center bg-white py-12 rounded-lg text-stone-400">
    No job postings yet!
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  jobProfiles,
}: CellSuccessProps<JobProfilesQuery>) => {
  return (
    <table className="w-full bg-white rounded-lg">
      <tbody>
        {jobProfiles.map((profile, i) => (
          <tr
            key={`job_profiles-${profile.id}`}
            onClick={() => navigate(routes.jobProfile({ id: profile.id }))}
            className={`${
              i !== 0 && 'border-t'
            } border-orange-200 hover:bg-orange-50 cursor-pointer transition duration-250`}
          >
            <td
              className={`flex flex-col items-center py-4 px-8 ${
                i === 0 && 'rounded-tl-lg'
              }`}
            >
              <img
                src={profile.photo}
                alt={`${profile.name}`}
                className="w-full max-w-36 rounded-full"
              />
            </td>
            <td className="py-4 text-sm">
              <strong className="font-semibold text-teal-600">
                {profile.name}
              </strong>
              <div className="text-xs font-semibold text-stone-400">
                {profile.title}
              </div>
              <p className="mt-1">
                {profile.about.split(' ').slice(0, 25).join(' ')}...
              </p>
            </td>
            <td
              className={`py-4 px-8 text-sm text-stone-500 ${
                i === 0 && 'rounded-tr-lg'
              }`}
            >
              <div className="flex flex-col items-start justify">
                <ReactMarkdown className="whitespace-nowrap">
                  {profile.locations}
                </ReactMarkdown>
                <div className="-ml-1 mt-1">
                  <Status
                    status={profile.status}
                    textClassName="text-xs"
                    iconClassName="md-16"
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
        <tr className="">
          <td
            colSpan={3}
            className="text-center text-sm text-stone-500 hover:text-orange-700 p-4 border-t border-t-orange-200 hover:bg-orange-50 cursor-pointer rounded-b-lg transition duration-250"
          >
            See all...
          </td>
        </tr>
      </tbody>
    </table>
  )
}
