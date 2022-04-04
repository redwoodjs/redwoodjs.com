import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobProfilesCell from 'src/components/Jobs/JobProfilesCell'

export default function () {
  return (
    <>
      <MetaTags title="AllJobProfiles" description="AllJobProfiles page" />

      <section className="max-w-screen-lg mx-auto mt-36 mb-24">
        <header className="text-center">
          <h1 className="mt-12 font-serif">RedwoodJS Developers</h1>
          <p className="mt-2 text-lg text-stone-500">
            Experienced RedwoodJS devs looking for their next role
          </p>
        </header>

        <div className="flex justify-center mt-4">
          <Link to={routes.newJobProfile()} className="button-sm">
            Create Profile
          </Link>
        </div>
        <div className="mt-8">
          <JobProfilesCell />
        </div>
      </section>
    </>
  )
}
