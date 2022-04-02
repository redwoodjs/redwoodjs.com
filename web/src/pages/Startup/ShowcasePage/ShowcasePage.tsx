import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import StartupShowcaseCell from 'src/components/Startup/StartupShowcaseCell'

export interface ShowcasePageProps {
  slug: string
}

const ShowcasePage = ({ slug }: ShowcasePageProps) => {
  return (
    <>
      <MetaTags title="Showcase" description="Showcase page" />
      <div className="bg-gradient-to-r from-rw-600 to-rw-800 mb-8">
        <nav className="max-w-screen-xl mx-auto py-5 px-8">
          <Link
            className="group flex flex-row items-center no-underline space-x-2 text-sm w-fit"
            to={routes.showcase()}
          >
            <span aria-hidden="true" className="icon md-14 text-rw-50">
              arrow_back_ios
            </span>
            <span className="group-hover:underline text-rw-50">
              Back to the Showcase
            </span>
          </Link>
        </nav>
      </div>
      <StartupShowcaseCell slug={slug} />
    </>
  )
}

export default ShowcasePage
