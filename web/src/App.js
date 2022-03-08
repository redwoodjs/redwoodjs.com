import { AuthProvider } from '@redwoodjs/auth'
import * as apolloClient from '@apollo/client'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import i18n from './i18n'

import './scaffold.css'
import './index.scss'

const { ApolloLink } = apolloClient

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth">
        <RedwoodApolloProvider
          graphQLClientConfig={{
            link: (rwLinks) => {
              const translationLink = new ApolloLink((operation, forward) => {
                operation.setContext(({ headers = {} }) => ({
                  headers: { ...headers, 'expected-language': i18n.language },
                }))

                return forward(operation)
              })

              return ApolloLink.from([translationLink, ...rwLinks])
            },
          }}
        >
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
