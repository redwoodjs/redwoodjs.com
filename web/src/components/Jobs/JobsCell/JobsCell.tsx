import type { JobsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { navigate, routes } from '@redwoodjs/router'
import ReactMarkdown from 'react-markdown'

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

export const Success = ({ jobs }: CellSuccessProps<JobsQuery>) => {
  return (
    <table className="w-full bg-white rounded-lg">
      <tbody>
        {jobs.map((job, i) => (
          <tr
            key={job.id}
            onClick={() => navigate(routes.job({ id: job.id }))}
            className={`${
              i !== 0 && 'border-t'
            } border-orange-200 hover:bg-orange-50 cursor-pointer transition duration-250`}
          >
            <td className={`py-4 px-8 ${i === 0 && 'rounded-tl-lg'}`}>
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-full max-w-64 max-h-16"
              />
            </td>
            <td className="py-4 text-sm">
              <strong className="font-semibold text-teal-600">
                {job.title}
              </strong>
              <p>{job.aboutJob.split(' ').slice(0, 25).join(' ')}...</p>
            </td>
            <td
              className={`py-4 px-8 text-sm text-stone-500 ${
                i === 0 && 'rounded-tr-lg'
              }`}
            >
              <ReactMarkdown className="whitespace-nowrap">
                {job.locations}
              </ReactMarkdown>
            </td>
          </tr>
        ))}
        <tr className="">
          <td
            colSpan={3}
            className="text-center text-sm text-stone-500 hover:text-orange-700 p-4 border-t border-t-orange-200 hover:bg-orange-50 cursor-pointer rounded-b-lg transition duration-250"
          >
            See more...
          </td>
        </tr>
      </tbody>
    </table>
  )
}
