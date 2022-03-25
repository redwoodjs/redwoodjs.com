import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShowcaseCard from 'src/components/Card/Showcase'
import { resizeFilestackImage } from 'src/lib/utility'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ startups }: CellSuccessProps<StartupListQuery>) => {
  return (
    <>
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
    </>
  )
}
