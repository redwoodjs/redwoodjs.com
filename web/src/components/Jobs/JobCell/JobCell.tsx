import { MetaTags } from '@redwoodjs/web'
import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'

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

      <JobDetailLayout
        title={
          <>
            <span className="text-teal-800">{job.company}</span> is hiring a{' '}
            <span className="text-teal-800">{job.title}</span>
          </>
        }
        postedDateTime={job.createdAt}
        postedLabel="Posted"
        buttonLink={job.applyUrl}
        buttonLabel="Apply for this job"
      >
        <section className="md:flex items-stretch">
          <div className="md:w-1/3 py-8 px-12">
            <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
              Location(s)
            </h3>
            <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6 text-center">
              {job.locations}
            </ReactMarkdown>
          </div>
          <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
            <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
              Compensation
            </h3>
            <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6 text-center">
              {job.compensation}
            </ReactMarkdown>
          </div>
          <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
            <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
              Perks
            </h3>
            <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6 text-center">
              {job.perks}
            </ReactMarkdown>
          </div>
        </section>
        <section className="border-t border-red-200 p-12">
          <h2 className="title">About the Job</h2>
          <ReactMarkdown className="markdown">{job.aboutJob}</ReactMarkdown>
        </section>
        <section className="border-t border-red-200 p-12">
          <h2 className="title">About You</h2>
          <ReactMarkdown className="markdown">
            {job.aboutApplicant}
          </ReactMarkdown>
        </section>
        <section className="border-t border-red-200 p-12">
          <h2 className="title">About Snaplet</h2>
          <ReactMarkdown className="markdown">{job.aboutCompany}</ReactMarkdown>
          <div className="mt-8 flex justify-center">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-full max-w-64 max-h-32"
            />
          </div>
        </section>
      </JobDetailLayout>
    </>
  )
}
