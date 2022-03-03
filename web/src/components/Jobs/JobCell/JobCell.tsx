import { MetaTags } from '@redwoodjs/web'
import ReactMarkdown from 'react-markdown'

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

      <div className="max-w-screen-lg mx-auto job">
        <header className="mt-36">
          <h1 className="text-center">
            <span className="text-teal-800">{job.company}</span> is hiring a{' '}
            <span className="text-teal-800">{job.title}</span>!
          </h1>
        </header>

        <div className="max-w-screen-lg mt-16 bg-white rounded-lg border border-red-200 mb-12">
          <section className="md:flex items-stretch">
            <div className="md:w-1/3 py-8 px-12">
              <h3 className="title">Location(s)</h3>
              <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6">
                {job.locations}
              </ReactMarkdown>
            </div>
            <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
              <h3 className="title">Compensation</h3>
              <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6">
                {job.compensation}
              </ReactMarkdown>
            </div>
            <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
              <h3 className="title">Perks</h3>
              <ReactMarkdown className="mt-2 text-stone-500 text-sm leading-6">
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
            <ReactMarkdown className="markdown">
              {job.aboutCompany}
            </ReactMarkdown>
            <div className="mt-8 flex justify-center">
              <div className="max-w-64 max-h-64">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <a
          href={job.applyUrl}
          target="_blank"
          rel="nofollow noreferrer"
          className="button"
        >
          Apply for this job
        </a>
      </div>
    </>
  )
}
