import { MetaTags } from '@redwoodjs/web'
import JobProfileDisplay from 'src/components/Jobs/JobProfileDisplay'

export const QUERY = gql`
  query FindJobProfileQuery($id: Int!) {
    jobProfile(id: $id) {
      id
      email
      portfolioUrl
      status
      name
      photo
      title
      locations
      about
      updatedAt
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

export const Success = ({ jobProfile }: CellSuccessProps<FindJobQuery>) => {
  return (
    <>
      <MetaTags
        title={`${jobProfile.name} is looking for a ${jobProfile.title} role`}
        description="RedwoodJS Jobs"
      />

      <JobProfileDisplay profile={jobProfile} />
    </>
  )
}
