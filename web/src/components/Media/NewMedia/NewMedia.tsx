import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import MediaForm from 'src/components/Media/MediaForm'

const CREATE_MEDIA_MUTATION = gql`
  mutation CreateMediaMutation($input: CreateMediaInput!) {
    createMedia(input: $input) {
      id
    }
  }
`

const NewMedia = () => {
  const [createMedia, { loading, error }] = useMutation(CREATE_MEDIA_MUTATION, {
    onCompleted: () => {
      toast.success('Media created')
      navigate(routes.medias())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createMedia({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Media</h2>
      </header>
      <div className="rw-segment-main">
        <MediaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMedia
