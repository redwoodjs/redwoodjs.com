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
  <section className="mx-auto mt-10 max-w-screen-xl px-8">
    <div className="flex justify-center rounded-lg border border-stone-200 bg-white py-12 text-stone-400">
      <span className="icon mr-2 animate-spin">refresh</span> Loading Startup
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
    <section className="mx-auto my-10 grid max-w-screen-xl grid-cols-1 gap-10 px-8 sm:grid-cols-2 lg:grid-cols-3">
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
