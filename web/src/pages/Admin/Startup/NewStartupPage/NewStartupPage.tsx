import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import StartupForm from 'src/components/Startup/StartupForm'
import { QUERY as query } from 'src/components/Startup/StartupTableCell'

import useToastMutation from 'src/hooks/useToastMutation'

// --

const MUTATION = gql`
  mutation CreateStartupMutation($input: CreateStartupInput!) {
    CreateStartup(input: $input) {
      id
    }
  }
`

// --

const NewStartupPage = () => {
  //
  const [create, { loading, error }] = useToastMutation(MUTATION, {
    refetchQueries: [{ query }],
  })

  // --

  return (
    <>
      <MetaTags title="New Startup" />
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">New Startup</h2>
        </header>
        <div className="rw-segment-main">
          <StartupForm
            error={error}
            loading={loading}
            onSave={(input) =>
              create(
                { input },
                {
                  error: 'Error creating startup showcase.',
                  loading: 'Creating startup showcase.',
                  success: () => {
                    navigate(routes.adminStartups())
                    return 'Created a new startup showcase.'
                  },
                }
              )
            }
          />
        </div>
      </div>
    </>
  )
}

export default NewStartupPage
