import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import ShowcaseForm from 'src/components/Showcase/ShowcaseForm'

const CREATE_SHOWCASE_MUTATION = gql`
  mutation CreateShowcaseMutation($input: CreateShowcaseInput!) {
    createShowcase(input: $input) {
      id
    }
  }
`

const NewShowcase = () => {
  const [createShowcase, { loading, error }] = useMutation(
    CREATE_SHOWCASE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Showcase created')
        navigate(routes.showcases())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { mediaId: parseInt(input.mediaId) })
    createShowcase({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Showcase</h2>
      </header>
      <div className="rw-segment-main">
        <ShowcaseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShowcase
