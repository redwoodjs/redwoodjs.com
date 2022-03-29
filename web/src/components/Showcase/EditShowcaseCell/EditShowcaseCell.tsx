import { Link, navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import ShowcaseForm from 'src/components/Showcase/ShowcaseForm'

import TagsCell from 'src/components/Showcase/TagsCell'
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
      media {
        id
        src
      }
      tags {
        id
        label
      }
      socialLinks {
        id
        link
        platform
      }
      localizations {
        id
        language
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
      media {
        id
        src
      }
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
    updateShowcase({ variables: { id, input, socialLinks } })
  }

  return (
    <>
      <div className="rw-segment w-2/3">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit {showcase?.title ?? showcase.id}
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
        <aside className="rw-segment-header mt-4">
          <h3 className="rw-heading rw-heading-secondary">Localizations</h3>
        </aside>
        <div className="rw-segment-main">
          {showcase.localizations?.map((localization) => (
            <Link
              key={`Showcase - ${showcase.id} - ${localization.language}`}
              to={'#'}
              onClick={() =>
                window.open(
                  routes.editShowcaseLocalization({ id: localization.id }),
                  '_blank'
                )
              }
              className={'mr-2'}
            >
              {localization.language}
            </Link>
          ))}
          <div className="actions">
            <Link
              to={'#'}
              className="rw-button rw-button-green"
              onClick={() =>
                window.open(
                  routes.newShowcaseLocalization({ showcaseId: showcase.id }),
                  '_blank'
                )
              }
            >
              New
            </Link>
          </div>
        </div>
      </div>
      <TagsCell showcaseId={showcase.id} />
    </>
  )
}
