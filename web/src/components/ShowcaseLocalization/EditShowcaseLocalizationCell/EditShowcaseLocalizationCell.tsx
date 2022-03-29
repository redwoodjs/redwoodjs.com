import type { EditShowcaseLocalizationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ShowcaseLocalizationForm from 'src/components/ShowcaseLocalization/ShowcaseLocalizationForm'

export const QUERY = gql`
  query EditShowcaseLocalizationById($id: Int!) {
    showcaseLocalization: showcaseLocalization(id: $id) {
      id
      showcaseId
      showcase {
        id
        title
      }
      isValid
      language
      title
      subtitle
      description
    }
  }
`
const UPDATE_SHOWCASE_LOCALIZATION_MUTATION = gql`
  mutation UpdateShowcaseLocalizationMutation(
    $id: Int!
    $input: UpdateShowcaseLocalizationInput!
  ) {
    updateShowcaseLocalization(id: $id, input: $input) {
      id
      isValid
      language
      title
      subtitle
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  showcaseLocalization,
}: CellSuccessProps<EditShowcaseLocalizationById>) => {
  const [updateShowcaseLocalization, { loading, error }] = useMutation(
    UPDATE_SHOWCASE_LOCALIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShowcaseLocalization updated')
        navigate(routes.showcaseLocalizations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateShowcaseLocalization({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit {showcaseLocalization.showcase.title} - {showcaseLocalization.language}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShowcaseLocalizationForm
          showcaseLocalization={showcaseLocalization}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
