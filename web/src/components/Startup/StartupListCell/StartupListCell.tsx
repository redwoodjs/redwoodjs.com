import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShowcaseCard from 'src/components/Card/Showcase'
import { resizeFilestackImage } from 'src/components/Uploader/utility'

import type { StartupListQuery } from 'types/graphql'

export const QUERY = gql`
  query StartupListQuery {
    startups: ListStartups {
      name
      slug
      tagline
      thumbnail
    }
  }
`

export const Loading = () => (
  <section className="max-w-screen-xl mt-10 mx-auto px-8">
    <div className="flex justify-center bg-white border border-stone-200 py-12 rounded-lg text-stone-400">
      <span className="icon animate-spin mr-2">refresh</span> Loading Startup
      Showcases...
    </div>
  </section>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ startups }: CellSuccessProps<StartupListQuery>) => {
  return (
    <section className="max-w-screen-xl mt-10 mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {startups.map((s) => (
        <ShowcaseCard
          key={s.slug}
          title={s.name}
          subtitle={s.tagline}
          src={resizeFilestackImage(s.thumbnail, {
            fit: false,
            height: 220,
            width: 500,
          })}
          to={routes.startup({ slug: s.slug })}
        />
      ))}
    </section>
  )
}
