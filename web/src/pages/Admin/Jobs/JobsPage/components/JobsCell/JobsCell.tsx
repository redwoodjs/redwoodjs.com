import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_JOB_MUTATION = gql`
  mutation DeleteJobMutation($id: Int!) {
    deleteJob(id: $id) {
      id
    }
  }
`

export const QUERY = gql`
  query AdminJobsQuery($limit: Int) {
    jobs(limit: $limit) {
      id
      company
      title
      aboutJob
      createdAt
      token
    }
  }
`

export const Success = ({ jobs }) => {
  const [deleteJob] = useMutation(DELETE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete job ' + id + '?')) {
      deleteJob({ variables: { id } }).then()
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <div className="actions">
        {false && (
          <button
            disabled
            className="rw-button rw-button-green"
            onClick={() => navigate(routes.newJob())}
          >
            New
          </button>
        )}
      </div>
      <table className="rw-table mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Title</th>
            <th>About</th>
            <th>Created</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={`Job - ${job.id}`}>
              <td>
                <span className="bg-gray-400 p-2 font-bold text-white">
                  {job.id}
                </span>
              </td>
              <td>{job.company}</td>
              <td>{job.title}</td>
              <td>
                <p className="h-8 w-96 overflow-hidden truncate">
                  {job.aboutJob}
                </p>
              </td>
              <td>{new Date(job.createdAt).toLocaleDateString()}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    onClick={() => {
                      window.open(
                        routes.editJob({ id: job.id, token: job.token }),
                        '_blank'
                      )
                    }}
                    title={'Edit showcase ' + job.id}
                    to="#"
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete showcase ' + job.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(job.id)}
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
