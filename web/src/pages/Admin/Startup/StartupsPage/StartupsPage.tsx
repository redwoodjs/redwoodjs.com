import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import StartupTableCell from 'src/components/Startup/StartupTableCell'

const StartupsPage = () => {
  return (
    <>
      <MetaTags title="Startup List" />
      <div className="flex flex-col space-y-8 pr-8 pt-8 w-full">
        <header className="flex flex-row items-center">
          <div className="flex flex-col flex-grow space-y-2">
            <h1 className="text-3xl font-bold">Startups</h1>
            <p className="text-stone-600">
              Add new startups, or update the site&apos;s existing showcases.
            </p>
          </div>
          <Link className="button button-sm" to={routes.adminNewStartup()}>
            Add Startup
          </Link>
        </header>
        <StartupTableCell />
      </div>
    </>
  )
}

export default StartupsPage
