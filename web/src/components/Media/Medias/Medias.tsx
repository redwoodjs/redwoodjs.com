import { Link, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import humanize from 'humanize-string'

import { QUERY } from 'src/components/Media/MediasCell'

const DELETE_MEDIA_MUTATION = gql`
  mutation DeleteMediaMutation($id: Int!) {
    deleteMedia(id: $id) {
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

const MediasList = ({ medias }) => {
  const [deleteMedia] = useMutation(DELETE_MEDIA_MUTATION, {
    onCompleted: () => {
      toast.success('Media deleted')
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
    if (confirm('Are you sure you want to delete media ' + id + '?')) {
      deleteMedia({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {medias.map((media) => (
            <tr key={media.id}>
              <td>{truncate(media.id)}</td>
              <td>{truncate(media.src)}</td>
              <td>{formatEnum(media.type)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.media({ id: media.id })}
                    title={'Show media ' + media.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMedia({ id: media.id })}
                    title={'Edit media ' + media.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete media ' + media.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(media.id)}
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

export default MediasList
