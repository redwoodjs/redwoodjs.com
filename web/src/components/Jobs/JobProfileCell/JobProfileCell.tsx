import { MetaTags } from '@redwoodjs/web'
import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'
import Status from 'src/components/Jobs/Shared/Status'

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

      <JobDetailLayout
        title={
          <>
            <span className="text-teal-800">{jobProfile.name}</span> is looking
            for a{' '}
            <span className="block">
              <span className="text-teal-800">{jobProfile.title}</span> role
            </span>
          </>
        }
        postedDateTime={jobProfile.updatedAt}
        postedLabel="Last Updated"
        buttonLink={`mailto:${jobProfile.email}`}
        buttonLabel="Send a Message"
      >
        <section className="md:flex items-stretch">
          <div className="md:w-1/3 flex flex-col items-center py-8 px-12">
            <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
              Status
            </h3>
            <div className="mt-1">
              <Status
                status={jobProfile.status}
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
              <a href={jobProfile.portfolioUrl} className="text-stone-600">
                {jobProfile.portfolioUrl}
              </a>
            </div>
          </div>
          <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
            <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
              Where I'll Work
            </h3>
            <ReactMarkdown className="mt-2 text-stone-600 text-sm leading-6 text-center">
              {jobProfile.locations}
            </ReactMarkdown>
          </div>
        </section>
        <section className="border-t border-red-200 p-12">
          <h2 className="title">About Me</h2>
          <ReactMarkdown className="markdown">{jobProfile.about}</ReactMarkdown>
        </section>
      </JobDetailLayout>
    </>
  )
}
