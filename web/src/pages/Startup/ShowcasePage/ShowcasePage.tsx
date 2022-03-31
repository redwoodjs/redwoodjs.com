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
      <div className="bg-gradient-to-r from-redwood-600 to-redwood-800 mb-8">
        <nav className="max-w-screen-xl mx-auto pt-[5.75rem] lg:pt-[5.125rem] pb-5 px-8">
          <Link
            className="group flex flex-row items-center no-underline space-x-2 text-sm w-fit"
            to={routes.showcase()}
          >
            <span aria-hidden="true" className="icon md-14 text-redwood-50">
              arrow_back_ios
            </span>
            <span className="group-hover:underline text-redwood-50">
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
