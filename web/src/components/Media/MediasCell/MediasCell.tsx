import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Medias from 'src/components/Media/Medias'
import type { FindMedias } from 'types/graphql'

export const QUERY = gql`
  query FindMedias {
    medias {
      id
      src
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No medias yet. '}
      <Link to={routes.newMedia()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ medias }: CellSuccessProps<FindMedias>) => {
  return <Medias medias={medias} />
}
