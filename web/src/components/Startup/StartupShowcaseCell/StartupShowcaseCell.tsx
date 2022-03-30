import { MetaTags } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupShowcaseAbout from 'src/components/Startup/StartupShowcaseAbout'
import StartupShowcaseDemo from 'src/components/Startup/StartupShowcaseDemo'
import StartupShowcaseIntro from 'src/components/Startup/StartupShowcaseIntro'
import StartupShowcaseQuestionaire from 'src/components/Startup/StartupShowcaseQuestionaire'
import StartupShowcaseJobCell from 'src/components/Startup/StartupShowcaseJobCell'

import type { StartupShowcaseQuery } from 'types/graphql'

export const QUERY = gql`
  query StartupShowcaseQuery($slug: String!) {
    startup: GetStartup(slug: $slug) {
      about
      achievements
      cta {
        href
        title
      }
      images
      name
      questionResponses {
        question
        response
      }
      slug
      socialLinks {
        link
        platform
      }
      tagline
      technologies
      videos
    }
  }
`

export const Loading = () => (
  <section className="max-w-screen-xl mx-auto px-8 pb-8">
    <div className="flex justify-center bg-white border border-stone-200 py-12 rounded-lg text-stone-400">
      <span className="icon animate-spin mr-2">refresh</span> Loading
      Showcase...
    </div>
  </section>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  startup,
}: CellSuccessProps<StartupShowcaseQuery>) => {
  return (
    <>
      <MetaTags title={`${startup.name} Showcase`} />
      <div className="flex flex-col max-w-screen-xl mx-auto px-8 pb-8 space-y-12">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-16 space-y-12 space-y-reverse lg:space-y-0">
          {(startup.images.length !== 0 || startup.videos.length !== 0) && (
            <StartupShowcaseDemo {...startup} />
          )}
          <StartupShowcaseIntro {...startup} />
        </div>
        <StartupShowcaseAbout {...startup} />
        <StartupShowcaseQuestionaire {...startup} />
        <StartupShowcaseJobCell company={startup.slug} />
      </div>
    </>
  )
}
