import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Showcases from 'src/components/Showcase/Showcases'
import type { FindShowcases } from 'types/graphql'

export const QUERY = gql`
  query FindShowcases {
    showcases {
      id
      createdAt
      updatedAt
      isPublished
      link
      label
      title
      subtitle
      source
      description
      mediaId
      productHunt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No showcases yet. '}
      <Link to={routes.newShowcase()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ showcases }: CellSuccessProps<FindShowcases>) => {
  return <Showcases showcases={showcases} />
}
