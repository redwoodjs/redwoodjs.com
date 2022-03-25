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
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 mb-8">
        <nav className="max-w-screen-xl mx-auto pt-[5.75rem] lg:pt-[5.125rem] pb-5 px-8">
          <Link
            className="group flex flex-row items-center no-underline space-x-2 text-sm"
            to={routes.showcase()}
          >
            <span aria-hidden="true" className="icon md-14 text-teal-100">
              arrow_back_ios
            </span>
            <span className="group-hover:underline text-teal-100">
              Back to the Showcase
            </span>
          </Link>
        </nav>
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto px-8 pb-8 space-y-8">
        <StartupShowcaseCell slug={slug} />
      </div>
    </>
  )
}

export default ShowcasePage
