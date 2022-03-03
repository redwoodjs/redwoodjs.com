import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ShowcaseLocalization/ShowcaseLocalizationsCell'

const DELETE_SHOWCASE_LOCALIZATION_MUTATION = gql`
  mutation DeleteShowcaseLocalizationMutation($id: Int!) {
    deleteShowcaseLocalization(id: $id) {
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

const ShowcaseLocalizationsList = ({ showcaseLocalizations }) => {
  const [deleteShowcaseLocalization] = useMutation(DELETE_SHOWCASE_LOCALIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('ShowcaseLocalization deleted')
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
    if (confirm('Are you sure you want to delete showcaseLocalization ' + id + '?')) {
      deleteShowcaseLocalization({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Is valid</th>
            <th>Language</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {showcaseLocalizations.map((showcaseLocalization) => (
            <tr key={showcaseLocalization.id}>
              <td>{truncate(showcaseLocalization.id)}</td>
              <td>{checkboxInputTag(showcaseLocalization.isValid)}</td>
              <td>{formatEnum(showcaseLocalization.language)}</td>
              <td>{truncate(showcaseLocalization.title)}</td>
              <td>{truncate(showcaseLocalization.subtitle)}</td>
              <td>{truncate(showcaseLocalization.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.showcaseLocalization({ id: showcaseLocalization.id })}
                    title={'Show showcaseLocalization ' + showcaseLocalization.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editShowcaseLocalization({ id: showcaseLocalization.id })}
                    title={'Edit showcaseLocalization ' + showcaseLocalization.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete showcaseLocalization ' + showcaseLocalization.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(showcaseLocalization.id)}
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

export default ShowcaseLocalizationsList
