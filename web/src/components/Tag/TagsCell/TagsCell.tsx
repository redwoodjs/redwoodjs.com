import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Tags from 'src/components/Tag/Tags'
import type { FindTags } from 'types/graphql'

export const QUERY = gql`
  query FindTags {
    tags {
      id
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tags yet. '}
      <Link to={routes.newTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tags }: CellSuccessProps<FindTags>) => {
  return <Tags tags={tags} />
}
