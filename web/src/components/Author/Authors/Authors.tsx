import { Link, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import humanize from 'humanize-string'

import { QUERY } from 'src/components/Author/AuthorsCell'

const DELETE_AUTHOR_MUTATION = gql`
  mutation DeleteAuthorMutation($id: Int!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const AuthorsList = ({ authors }) => {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR_MUTATION, {
    onCompleted: () => {
      toast.success('Author deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete author ' + id + '?')) {
      deleteAuthor({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Is email public</th>
            <th>Pronoun</th>
            <th>Company Name</th>
            <th>Company Site</th>
            <th>Avatar id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{truncate(author.id)}</td>
              <td>{timeTag(author.createdAt)}</td>
              <td>{timeTag(author.updatedAt)}</td>
              <td>{truncate(author.firstname)}</td>
              <td>{truncate(author.lastname)}</td>
              <td>{truncate(author.email)}</td>
              <td>{checkboxInputTag(author.isEmailPublic)}</td>
              <td>{formatEnum(author.pronoun)}</td>
              <td>{truncate(author.companyName)}</td>
              <td>{truncate(author.companyUrl)}</td>
              <td>{truncate(author.avatarId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.author({ id: author.id })}
                    title={'Show author ' + author.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAuthor({ id: author.id })}
                    title={'Edit author ' + author.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete author ' + author.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(author.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AuthorsList
