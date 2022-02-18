import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import AuthorForm from 'src/components/Author/AuthorForm'

const CREATE_AUTHOR_MUTATION = gql`
  mutation CreateAuthorMutation($input: CreateAuthorInput!) {
    createAuthor(input: $input) {
      id
    }
  }
`

const NewAuthor = () => {
  const [createAuthor, { loading, error }] = useMutation(
    CREATE_AUTHOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Author created')
        navigate(routes.authors())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      avatarId: parseInt(input.avatarId),
    })
    createAuthor({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Author</h2>
      </header>
      <div className="rw-segment-main">
        <AuthorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAuthor
