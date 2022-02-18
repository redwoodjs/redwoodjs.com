import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Showcase from 'src/components/Showcase/Showcase'
import type { FindShowcaseById } from 'types/graphql'

export const QUERY = gql`
  query FindShowcaseById($id: Int!) {
    showcase: showcase(id: $id) {
      id
      createdAt
      updatedAt
      isPublished
      type
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

export const Empty = () => <div>Showcase not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ showcase }: CellSuccessProps<FindShowcaseById>) => {
  return <Showcase showcase={showcase} />
}
