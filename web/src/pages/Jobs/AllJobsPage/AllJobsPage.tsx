import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobsCell from 'src/components/Jobs/JobsCell'

export default function () {
  return (
    <>
      <MetaTags title="AllJobs" description="AllJobs page" />

      <section className="max-w-screen-lg mx-auto mt-36 mb-24">
        <header className="text-center">
          <h1 className="font-serif">RedwoodJS Jobs</h1>
          <p className="mt-2 text-lg text-gray-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="flex justify-center mt-4">
          <Link to={routes.newJob()} className="button-sm">
            Post a Job
          </Link>
        </div>
        <div className="mt-8">
          <JobsCell />
        </div>
      </section>
    </>
  )
}
