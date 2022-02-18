import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Tag from 'src/components/Tag/Tag'
import type { FindTagById } from 'types/graphql'

export const QUERY = gql`
  query FindTagById($id: Int!) {
    tag: tag(id: $id) {
      id
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tag }: CellSuccessProps<FindTagById>) => {
  return <Tag tag={tag} />
}
