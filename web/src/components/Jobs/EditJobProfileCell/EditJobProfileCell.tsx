import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { FindEditJobProfileQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobProfileForm from 'src/components/Jobs/JobProfileForm'

export const QUERY = gql`
  query FindEditJobProfileQuery($id: Int!, $token: String!) {
    jobProfile(id: $id, token: $token) {
      id
      email
      portfolioUrl
      status
      name
      photo
      title
      locations
      about
      updatedAt
    }
  }
`

const UPDATE_JOB_PROFILE = gql`
  mutation UpdateJobProfileMutation(
    $id: Int!
    $token: String!
    $input: UpdateJobProfileInput!
  ) {
    updateJobProfile(id: $id, token: $token, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => {
  toast.error(error.message)

  return (
    <div className="mt-32 mb-12 text-center text-red-500 max-w-screen-sm mx-auto">
      <img src="/images/logo.svg" alt="Redwood cone" className="opacity-20" />
    </div>
  )
}

export const Success = ({
  token,
  jobProfile,
}: CellSuccessProps<FindEditJobProfileQuery>) => {
  const [updateJobProfile, { loading, error }] = useMutation(
    UPDATE_JOB_PROFILE,
    {
      onCompleted: ({ updateJobProfile }) => {
        toast.success('Profile saved!', { id: 'saving' })
        navigate(routes.jobProfile({ id: updateJobProfile.id }))
      },
    }
  )

  const updateJobProfileWithMessage = (args) => {
    toast.loading('Saving profile...', { id: 'saving' })
    updateJobProfile(args)
  }

  return (
    <>
      <MetaTags
        title="Edit Job Profile"
        description="Looking to hire RedwoodJS developers? Post on the Redwood job board!"
      />

      <div className="max-w-screen-lg mx-auto job">
        <header className="mt-36">
          <h1 className="relative text-5xl px-16 text-teal-800 tracking-normal text-center">
            Editing Your Profile
          </h1>
        </header>

        <JobProfileForm
          profile={jobProfile}
          token={token}
          loading={loading}
          error={error}
          saveFunc={updateJobProfileWithMessage}
        />
      </div>
    </>
  )
}
