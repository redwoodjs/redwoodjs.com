import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes, useParams } from '@redwoodjs/router'
import ShowcaseLocalizationForm from 'src/components/ShowcaseLocalization/ShowcaseLocalizationForm'

const CREATE_SHOWCASE_LOCALIZATION_MUTATION = gql`
  mutation CreateShowcaseLocalizationMutation(
    $input: CreateShowcaseLocalizationInput!
  ) {
    createShowcaseLocalization(input: $input) {
      id
    }
  }
`

const NewShowcaseLocalization = () => {
  const { hasRole } = useAuth()

  const params = useParams()

  const showcaseId = parseInt(params.showcaseId)

  const [createShowcaseLocalization, { loading, error }] = useMutation(
    CREATE_SHOWCASE_LOCALIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShowcaseLocalization created')
        hasRole('translator')
          ? navigate(routes.showcaseLocalizations())
          : navigate(routes.showcases())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createShowcaseLocalization({
      variables: { input: { ...input, showcaseId } },
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ShowcaseLocalization
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShowcaseLocalizationForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewShowcaseLocalization
