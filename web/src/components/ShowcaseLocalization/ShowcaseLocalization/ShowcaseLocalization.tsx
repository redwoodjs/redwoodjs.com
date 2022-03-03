import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SHOWCASE_LOCALIZATION_MUTATION = gql`
  mutation DeleteShowcaseLocalizationMutation($id: Int!) {
    deleteShowcaseLocalization(id: $id) {
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

const ShowcaseLocalization = ({ showcaseLocalization }) => {
  const [deleteShowcaseLocalization] = useMutation(DELETE_SHOWCASE_LOCALIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('ShowcaseLocalization deleted')
      navigate(routes.showcaseLocalizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete showcaseLocalization ' + id + '?')) {
      deleteShowcaseLocalization({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ShowcaseLocalization {showcaseLocalization.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{showcaseLocalization.id}</td>
            </tr><tr>
              <th>Is valid</th>
              <td>{checkboxInputTag(showcaseLocalization.isValid)}</td>
            </tr><tr>
              <th>Language</th>
              <td>{formatEnum(showcaseLocalization.language)}</td>
            </tr><tr>
              <th>Title</th>
              <td>{showcaseLocalization.title}</td>
            </tr><tr>
              <th>Subtitle</th>
              <td>{showcaseLocalization.subtitle}</td>
            </tr><tr>
              <th>Description</th>
              <td>{showcaseLocalization.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShowcaseLocalization({ id: showcaseLocalization.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(showcaseLocalization.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ShowcaseLocalization
