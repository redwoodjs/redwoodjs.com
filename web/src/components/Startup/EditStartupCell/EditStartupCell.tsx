import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupForm from 'src/components/Startup/StartupForm'
import { QUERY as query } from 'src/components/Startup/StartupTableCell'

import useToastMutation from 'src/hooks/useToastMutation'

import type { EditStartupQuery } from 'types/graphql'

export const QUERY = gql`
  query EditStartupQuery($slug: String!) {
    startup: GetStartup(slug: $slug) {
      about
      achievements
      cta {
        href
        title
      }
      images
      name
      published
      slug
      tagline
      technologies
      thumbnail
      token
      videos
      questionResponses {
        question
        response
      }
      socialLinks {
        id
        link
        platform
      }
    }
  }
`

const MUTATION = gql`
  mutation EditStartupMutation(
    $input: UpdateStartupInput!
    $slug: String!
    $socialLinks: [SyncSocialLinkInput!]!
    $token: String!
  ) {
    SyncStartupSocialLinks(input: $socialLinks, slug: $slug, token: $token) {
      id
    }
    UpdateStartup(input: $input, slug: $slug, token: $token) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ startup }: CellSuccessProps<EditStartupQuery>) => {
  //
  const [edit, { loading, error }] = useToastMutation(MUTATION, {
    refetchQueries: [{ query }, { query: QUERY }],
  })

  // --

  return (
    <StartupForm
      error={error}
      loading={loading}
      startup={startup}
      onSave={({ socialLinks, ...input }) =>
        edit(
          {
            input,
            socialLinks,
            slug: startup.slug,
            token: startup.token,
          },
          {
            error: 'Error updating startup showcase.',
            loading: 'Updating startup showcase.',
            success: () => {
              navigate(routes.adminStartups())
              return 'Updated startup showcase.'
            },
          }
        )
      }
    />
  )
}
