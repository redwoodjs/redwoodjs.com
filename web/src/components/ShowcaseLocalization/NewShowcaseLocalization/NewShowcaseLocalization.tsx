import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ShowcaseLocalizationForm from 'src/components/ShowcaseLocalization/ShowcaseLocalizationForm'

const CREATE_SHOWCASE_LOCALIZATION_MUTATION = gql`
  mutation CreateShowcaseLocalizationMutation($input: CreateShowcaseLocalizationInput!) {
    createShowcaseLocalization(input: $input) {
      id
    }
  }
`

const NewShowcaseLocalization = () => {
  const [createShowcaseLocalization, { loading, error }] = useMutation(CREATE_SHOWCASE_LOCALIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('ShowcaseLocalization created')
      navigate(routes.showcaseLocalizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createShowcaseLocalization({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ShowcaseLocalization</h2>
      </header>
      <div className="rw-segment-main">
        <ShowcaseLocalizationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShowcaseLocalization
