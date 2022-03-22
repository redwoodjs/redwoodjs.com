import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { FindEditJobQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobForm from 'src/components/Jobs/JobForm'

export const QUERY = gql`
  query FindEditJobQuery($id: Int!, $token: String!) {
    job(id: $id, token: $token) {
      id
      email
      applyUrl
      company
      logo
      title
      locations
      compensation
      perks
      aboutJob
      aboutApplicant
      aboutCompany
      createdAt
    }
  }
`

const UPDATE_JOB = gql`
  mutation UpdateJobMutation(
    $id: Int!
    $token: String!
    $input: UpdateJobInput!
  ) {
    updateJob(id: $id, token: $token, input: $input) {
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

export const Success = ({ token, job }: CellSuccessProps<FindEditJobQuery>) => {
  const [updateJob, { loading, error }] = useMutation(UPDATE_JOB, {
    onCompleted: ({ updateJob }) => {
      toast.success('Job saved!', { id: 'saving' })
      navigate(routes.job({ id: updateJob.id }))
    },
  })

  const updateJobWithMessage = (args) => {
    toast.loading('Saving job...', { id: 'saving' })
    updateJob(args)
  }

  return (
    <>
      <MetaTags
        title="Edit Job"
        description="Looking to hire RedwoodJS developers? Post on the Redwood job board!"
      />

      <div className="max-w-screen-lg mx-auto job">
        <header className="mt-36">
          <h1 className="relative text-5xl px-16 text-teal-800 tracking-normal text-center">
            Editing {job.title} Job
          </h1>
        </header>

        <JobForm
          job={job}
          token={token}
          loading={loading}
          error={error}
          saveFunc={updateJobWithMessage}
        />
      </div>
    </>
  )
}
