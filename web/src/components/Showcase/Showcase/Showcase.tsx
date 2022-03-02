import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import humanize from 'humanize-string'

const DELETE_SHOWCASE_MUTATION = gql`
  mutation DeleteShowcaseMutation($id: Int!) {
    deleteShowcase(id: $id) {
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

const Showcase = ({ showcase }) => {
  const [deleteShowcase] = useMutation(DELETE_SHOWCASE_MUTATION, {
    onCompleted: () => {
      toast.success('Showcase deleted')
      navigate(routes.showcases())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete showcase ' + id + '?')) {
      deleteShowcase({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Showcase {showcase.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{showcase.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(showcase.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(showcase.updatedAt)}</td>
            </tr>
            <tr>
              <th>Is published</th>
              <td>{checkboxInputTag(showcase.isPublished)}</td>
            </tr>
            <tr>
              <th>Link</th>
              <td>{showcase.link}</td>
            </tr>
            <tr>
              <th>Label</th>
              <td>{showcase.label}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{showcase.title}</td>
            </tr>
            <tr>
              <th>Subtitle</th>
              <td>{showcase.subtitle}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{showcase.description}</td>
            </tr>
            <tr>
              <th>Media id</th>
              <td>{showcase.mediaId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShowcase({ id: showcase.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(showcase.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Showcase
