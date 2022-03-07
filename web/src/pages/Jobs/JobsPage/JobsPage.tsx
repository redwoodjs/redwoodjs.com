import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobsCell from 'src/components/Jobs/JobsCell'
import JobProfilesCell from 'src/components/Jobs/JobProfilesCell'

const JobsPage = () => {
  return (
    <>
      <MetaTags
        title="Jobs"
        description="Want to get paid to write RedwoodJS?"
      />

      <section className="max-w-screen-lg mx-auto">
        <header className="text-center">
          <h1 className="mt-36">
            <span className="text-teal-800">RedwoodJS</span>{' '}
            <span className="">Jobs</span>
          </h1>
          <p className="mt-2 text-stone-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="flex justify-end mt-4">
          <Link to={routes.newJob()} className="button-sm">
            + Post a Job
          </Link>
        </div>
        <div className="border border-orange-200 rounded-lg mt-2">
          <JobsCell limit={5} />
        </div>
      </section>

      <section className="max-w-screen-lg mx-auto mt-24 mb-24">
        <header className="text-center">
          <h1 className="mt-12">
            <span className="text-teal-800">RedwoodJS</span>{' '}
            <span className="">Developers</span>
          </h1>
          <p className="mt-2 text-stone-500">
            Experienced RedwoodJS devs looking for their next role
          </p>
        </header>

        <div className="flex justify-end mt-4">
          <Link to={routes.newJobProfile()} className="button-sm">
            + Create Profile
          </Link>
        </div>
        <div className="border border-orange-200 rounded-lg mt-2">
          <JobProfilesCell limit={5} />
        </div>
      </section>
    </>
  )
}

export default JobsPage
