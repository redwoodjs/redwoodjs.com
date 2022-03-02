import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import humanize from 'humanize-string'

const DELETE_AUTHOR_MUTATION = gql`
  mutation DeleteAuthorMutation($id: Int!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Author = ({ author }) => {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR_MUTATION, {
    onCompleted: () => {
      toast.success('Author deleted')
      navigate(routes.authors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete author ' + id + '?')) {
      deleteAuthor({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Author {author.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{author.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(author.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(author.updatedAt)}</td>
            </tr>
            <tr>
              <th>Firstname</th>
              <td>{author.firstname}</td>
            </tr>
            <tr>
              <th>Lastname</th>
              <td>{author.lastname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{author.email}</td>
            </tr>
            <tr>
              <th>Is email public</th>
              <td>{checkboxInputTag(author.isEmailPublic)}</td>
            </tr>
            <tr>
              <th>Pronoun</th>
              <td>{formatEnum(author.pronoun)}</td>
            </tr>
            <tr>
              <th>Company Name</th>
              <td>{author.companyName}</td>
            </tr>
            <tr>
              <th>Company Site</th>
              <td>{author.companyUrl}</td>
            </tr>
            <tr>
              <th>Avatar id</th>
              <td>{author.avatarId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAuthor({ id: author.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(author.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Author
