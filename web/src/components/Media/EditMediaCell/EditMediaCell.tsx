import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MediaForm from 'src/components/Media/MediaForm'
import type { EditMediaById } from 'types/graphql'

export const QUERY = gql`
  query EditMediaById($id: Int!) {
    media: media(id: $id) {
      id
      src
      type
    }
  }
`
const UPDATE_MEDIA_MUTATION = gql`
  mutation UpdateMediaMutation($id: Int!, $input: UpdateMediaInput!) {
    updateMedia(id: $id, input: $input) {
      id
      src
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ media }: CellSuccessProps<EditMediaById>) => {
  const [updateMedia, { loading, error }] = useMutation(UPDATE_MEDIA_MUTATION, {
    onCompleted: () => {
      toast.success('Media updated')
      navigate(routes.medias())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMedia({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Media {media.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MediaForm
          media={media}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
