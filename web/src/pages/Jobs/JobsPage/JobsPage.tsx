import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobsCell from 'src/components/Jobs/JobsCell'
import JobProfilesCell from 'src/components/Jobs/JobProfilesCell'

export default function () {
  return (
    <>
      <MetaTags
        title="Jobs"
        description="Want to get paid to write RedwoodJS?"
      />

      <section className="mx-auto mt-24 mb-24 max-w-screen-lg">
        <header className="text-center">
          <h1 className="mt-12 font-serif">RedwoodJS Developers</h1>
          <p className="mt-2 text-lg text-gray-500">
            Experienced RedwoodJS devs looking for their next role
          </p>
        </header>

        <div className="mt-4 flex justify-center">
          <Link to={routes.newJobProfile()} className="button-sm">
            Create Profile
          </Link>
        </div>
        <div className="mt-8">
          <JobProfilesCell limit={5} showAll={true} />
        </div>
      </section>

      <section className="mx-auto mt-36 max-w-screen-lg">
        <header className="text-center">
          <h1 className="font-serif font-bold">RedwoodJS Jobs</h1>
          <p className="mt-2 text-lg text-gray-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="mt-4 flex justify-center">
          <Link to={routes.newJob()} className="button-sm">
            Post a Job
          </Link>
        </div>
        <div className="mt-8">
          <JobsCell limit={5} showAll={true} />
        </div>
      </section>
    </>
  )
}
