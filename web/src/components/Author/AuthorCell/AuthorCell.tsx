import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Author from 'src/components/Author/Author'
import type { FindAuthorById } from 'types/graphql'

export const QUERY = gql`
  query FindAuthorById($id: Int!) {
    author: author(id: $id) {
      id
      createdAt
      updatedAt
      firstname
      lastname
      email
      isEmailPublic
      pronoun
      linkedin
      github
      productHunt
      company
      discord
      avatarId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Author not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ author }: CellSuccessProps<FindAuthorById>) => {
  return <Author author={author} />
}
