import { MetaTags } from '@redwoodjs/web'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import JobDisplay from 'src/components/Jobs/JobDisplay'

import type { FindJobQuery } from 'types/graphql'

export const QUERY = gql`
  query FindJobQuery($id: Int!) {
    job(id: $id) {
      id
      applyUrl
      company
      logo
      title
      locations
      compensation
      perks
      aboutJob
      aboutApplicant
      aboutCompany
      createdAt
    }
  }
`

export const Loading = () => <div></div>

export const Empty = () => (
  <div className="max-w-screen-lg mx-auto job">
    <header className="mt-36">
      <h1 className="text-center">Job not found</h1>
    </header>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ job }: CellSuccessProps<FindJobQuery>) => {
  return (
    <>
      <MetaTags
        title={`${job.company} is hiring a ${job.title}`}
        description="RedwoodJS Jobs"
      />
      <JobDisplay job={job} />
    </>
  )
}
