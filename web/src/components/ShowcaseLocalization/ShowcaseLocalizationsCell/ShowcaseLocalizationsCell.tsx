import type { FindShowcaseLocalizations } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ShowcaseLocalizations from 'src/components/ShowcaseLocalization/ShowcaseLocalizations'

export const QUERY = gql`
  query FindShowcaseLocalizations {
    showcaseLocalizations {
      id
      isValid
      language
      title
      subtitle
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No showcaseLocalizations yet. '}
      <Link
        to={routes.newShowcaseLocalization()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ showcaseLocalizations }: CellSuccessProps<FindShowcaseLocalizations>) => {
  return <ShowcaseLocalizations showcaseLocalizations={showcaseLocalizations} />
}
