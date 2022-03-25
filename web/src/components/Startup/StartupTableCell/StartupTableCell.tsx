import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import useToastMutation from 'src/hooks/useToastMutation'

import type { StartupTableQuery } from 'types/graphql'

export const QUERY = gql`
  query StartupTableQuery {
    startups: ListStartups(onlyPublished: false) {
      id
      updatedAt
      published
      name
      slug
      tagline
    }
  }
`

const MUTATION = gql`
  mutation DeleteStartupMutation($id: Int!) {
    DeleteStartup(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ startups }: CellSuccessProps<StartupTableQuery>) => {
  //
  const [mutate] = useToastMutation(MUTATION, {
    refetchQueries: [{ query: QUERY }],
  })

  // --

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last Updated</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((startup) => (
            <tr key={startup.id}>
              <td>
                <span
                  className={`p-2 font-bold text-white ${
                    startup.published ? 'bg-green-500' : 'bg-amber-500'
                  }`}
                >
                  {startup.id}
                </span>
              </td>
              <td className="space-y-1">
                <Link
                  to={routes.adminStartup({ slug: startup.slug })}
                  className="font-semibold no-underline hover:text-teal-800"
                >
                  {startup.name}
                </Link>
                <p className="text-sm text-stone-500">{startup.tagline}</p>
              </td>
              <td>{new Date(startup.updatedAt).toLocaleDateString()}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminEditStartup({ slug: startup.slug })}
                    title={'Edit ' + startup.name}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete ' + startup.name}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() =>
                      confirm(
                        'Are you sure you want to delete this startup?'
                      ) && mutate({ id: startup.id })
                    }
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
