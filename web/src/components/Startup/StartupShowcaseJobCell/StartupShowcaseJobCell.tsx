import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupShowcaseJobCard from 'src/components/Startup/StartupShowcaseJobCard'

import type { StartupShowcaseJobsQuery } from 'types/graphql'

export interface StartupShowcaseJobsCellProps {
  useEmpty?: boolean
}

export const QUERY = gql`
  query StartupShowcaseJobsQuery($company: String!) {
    jobs: showcaseJobs(company: $company) {
      id
      title
      locations
      aboutJob
      createdAt
    }
  }
`

export const Loading = () => {
  return (
    <section className="space-y-6">
      <header className="pb-2.5 mb-4 border-b border-stone-300">
        <h2 className="text-3xl font-bold">Open Positions</h2>
      </header>
      <div className="flex justify-center bg-white border border-stone-200 py-12 rounded-lg text-stone-400">
        <span aria-hidden="true" className="icon animate-spin mr-2">
          refresh
        </span>{' '}
        Checking for open positions.
      </div>
    </section>
  )
}

export const Empty = ({ useEmpty = true }) => {
  if (!useEmpty) return null

  return (
    <section className="space-y-6">
      <header className="pb-2.5 mb-4 border-b border-stone-300">
        <h2 className="text-3xl font-bold">Open Positions</h2>
      </header>
      <div className="flex flex-col items-center justify-center bg-white border border-stone-200 px-6 py-12 rounded-lg space-y-5 text-center">
        <span className="icon text-rw-600" style={{ fontSize: '32px' }}>
          work_off
        </span>
        <div className="space-y-2">
          <p className="font-semibold">This startup is not hiring.</p>
          <p className="max-w-xs text-sm text-stone-400 leading-relaxed">
            Be sure to check the startup&apos;s site for positions that may not
            be listed here.
          </p>
        </div>
      </div>
    </section>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <section className="space-y-6">
    <header className="pb-2.5 mb-4 border-b border-stone-300">
      <h2 className="text-3xl font-bold">Open Positions</h2>
    </header>
    <div style={{ color: 'red' }}>Error: {error.message}</div>
  </section>
)

export const Success = ({
  jobs,
}: CellSuccessProps<StartupShowcaseJobsQuery>) => {
  return (
    <section className="space-y-6">
      <header className="pb-2.5 mb-4 border-b border-stone-300">
        <h2 className="text-3xl font-bold">Open Positions</h2>
      </header>
      {jobs.map((job, idx) => (
        <StartupShowcaseJobCard key={idx} {...job} />
      ))}
    </section>
  )
}
