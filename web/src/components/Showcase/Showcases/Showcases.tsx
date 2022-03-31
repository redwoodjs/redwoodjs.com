import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import humanize from 'humanize-string'

import { QUERY } from 'src/components/Showcase/ShowcasesCell'

const DELETE_SHOWCASE_MUTATION = gql`
  mutation DeleteShowcaseMutation($id: Int!) {
    deleteShowcase(id: $id) {
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

const ShowcasesList = ({ showcases }) => {
  const [deleteShowcase] = useMutation(DELETE_SHOWCASE_MUTATION, {
    onCompleted: () => {
      toast.success('Showcase deleted')
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
    if (confirm('Are you sure you want to delete showcase ' + id + '?')) {
      deleteShowcase({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <div className="actions">
        <button
          className="rw-button rw-button-green"
          onClick={() => navigate(routes.newShowcase())}
        >
          New
        </button>
      </div>
      <table className="rw-table mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Link</th>
            <th>Label</th>
            <th>Loc.</th>
            <th>Title</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {showcases.map((showcase) => (
            <tr key={showcase.id}>
              <td>
                <span
                  className={`p-2 font-bold text-white ${
                    showcase.isPublished ? 'bg-teal-600' : 'bg-orange-400'
                  }`}
                >
                  {truncate(showcase.id)}
                </span>
              </td>
              <td>
                <Link
                  to={showcase.link}
                  onClick={() => window.open(showcase.link, '_blank')}
                >
                  link
                </Link>
              </td>
              <td>{truncate(showcase.label)}</td>
              <td>
                {truncate(
                  showcase.localizations?.map((localization) => (
                    <Link
                      key={`Showcase - ${showcase.id} - ${localization.language}`}
                      onClick={() =>
                        window.open(
                          routes.editShowcaseLocalization({
                            id: localization.id,
                          }),
                          '_blank'
                        )
                      }
                      to={'#'}
                      className={'mr-2'}
                    >
                      {localization.language}
                    </Link>
                  ))
                )}
              </td>
              <td>{truncate(showcase.title)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminShowcase({ id: showcase.id })}
                    title={'Show showcase ' + showcase.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editShowcase({ id: showcase.id })}
                    title={'Edit showcase ' + showcase.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete showcase ' + showcase.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(showcase.id)}
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

export default ShowcasesList
