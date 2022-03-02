import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Authors from 'src/components/Author/Authors'
import type { FindAuthors } from 'types/graphql'

export const QUERY = gql`
  query FindAuthors {
    authors {
      id
      createdAt
      updatedAt
      firstname
      lastname
      email
      isEmailPublic
      pronoun
      companyName
      companyUrl
      avatarId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No authors yet. '}
      <Link to={routes.newAuthor()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ authors }: CellSuccessProps<FindAuthors>) => {
  return <Authors authors={authors} />
}
