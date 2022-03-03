import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TagsCell from 'src/components/Showcase/TagsCell/TagsCell'
import ShowcaseForm from 'src/components/Showcase/ShowcaseForm'
import type { EditShowcaseById } from 'types/graphql'

export const QUERY = gql`
  query EditShowcaseById($id: Int!) {
    showcase: showcase(id: $id) {
      id
      createdAt
      updatedAt
      isPublished
      link
      label
      title
      subtitle
      description
      mediaId
      tags {
        id
        label
      }
      socialLinks {
        id
        link
        platform
      }
    }
  }
`

const UPDATE_SHOWCASE_MUTATION = gql`
  mutation UpdateShowcaseMutation(
    $id: Int!
    $input: UpdateShowcaseInput!
    $socialLinks: [SyncSocialLinkInput!]!
  ) {
    showcase: updateShowcase(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      isPublished
      link
      label
      title
      subtitle
      description
      mediaId
    }
    SyncShowcaseSocialLinks(id: $id, input: $socialLinks) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ showcase }: CellSuccessProps<EditShowcaseById>) => {
  const [updateShowcase, { loading, error }] = useMutation(
    UPDATE_SHOWCASE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Showcase updated')
        navigate(routes.showcases())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = ({ socialLinks, ...input }, id) => {
    const castInput = Object.assign(input, { mediaId: parseInt(input.mediaId) })
    updateShowcase({ variables: { id, input: castInput, socialLinks } })
  }

  return (
    <>
      <div className="rw-segment w-2/3">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit Showcase {showcase.id}
          </h2>
        </header>
        <div className="rw-segment-main">
          <ShowcaseForm
            showcase={showcase}
            onSave={onSave}
            error={error}
            loading={loading}
          />
        </div>
      </div>
      <TagsCell showcaseId={showcase.id} />
    </>
  )
}
