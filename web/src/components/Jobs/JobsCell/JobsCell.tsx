import ReactMarkdown from 'react-markdown'

import type { JobsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, navigate, routes } from '@redwoodjs/router'

import { resizeFilestackImage } from 'src/components/Uploader/utility'

export const QUERY = gql`
  query JobsQuery($limit: Int) {
    jobs(limit: $limit) {
      id
      company
      logo
      title
      aboutJob
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
  <div className="flex justify-center bg-white py-24 rounded-lg text-gray-400">
    No job postings yet!
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ jobs, showAll }: CellSuccessProps<JobsQuery>) => {
  return (
    <table className="w-full rounded-lg bg-white">
      <tbody>
        {jobs.map((job, i) => (
          <tr
            key={`job-${job.id}`}
            onClick={() => navigate(routes.job({ id: job.id }))}
            className={`duration-250 flex cursor-pointer flex-col flex-nowrap border-gray-200 transition hover:bg-teal-50 sm:table-row`}
          >
            <td
              className={`flex w-full items-center pt-16 pb-4 sm:w-48 sm:py-8`}
            >
              <img
                src={resizeFilestackImage(job.logo, {
                  width: 288,
                  height: 128,
                })}
                alt={`${job.company} logo`}
                className="mx-auto h-16 w-36 object-contain"
              />
            </td>
            <td className="px-4 text-center sm:py-8 sm:px-0 sm:text-left">
              <strong className="text-lg font-semibold text-rw-500 underline">
                {job.title}
              </strong>
              <p className="mt-2">
                {job.aboutJob.split(' ').slice(0, 25).join(' ')}...
              </p>
            </td>
            <td
              className={`py-4 text-center text-gray-500 sm:py-8 sm:px-4 sm:text-left`}
            >
              <ReactMarkdown className="whitespace-nowrap">
                {job.locations.join('\n\n')}
              </ReactMarkdown>
            </td>
          </tr>
        ))}
        {showAll && (
          <tr>
            <td
              colSpan={3}
              className="mt-8 sm:mt-0 duration-250 cursor-pointer rounded-b-lg text-center font-serif font-semibold text-2xl transition"
            >
              <Link
                to={routes.allJobs()}
                className="block w-full p-8 text-rw-500 no-underline"
              >
                See All Jobs &rarr;
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
