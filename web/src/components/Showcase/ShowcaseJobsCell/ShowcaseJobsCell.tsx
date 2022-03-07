import { useTranslation } from 'react-i18next'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShowcaseJobCard from 'src/components/Showcase/ShowcaseJobCard'

import type { ShowcaseJobsQuery } from 'types/graphql'

export interface ShowcaseJobsCellProps {
  useEmpty?: boolean
}

export const QUERY = gql`
  query ShowcaseJobsQuery($company: String!) {
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
  const { t } = useTranslation()

  return (
    <div className="flex justify-center bg-white border border-orange-200 py-12 rounded-lg text-stone-400">
      <span aria-hidden="true" className="icon animate-spin mr-2">
        refresh
      </span>{' '}
      {t('ShowcaseJobsCell.Loading')}
    </div>
  )
}

export const Empty = ({ useEmpty = true }) => {
  const { t } = useTranslation()

  if (!useEmpty) return null

  return (
    <div className="flex flex-col items-center justify-center bg-white border border-orange-200 p-12 rounded-lg space-y-5 text-center">
      <span className="icon text-teal-600" style={{ fontSize: '32px' }}>
        work_off
      </span>
      <p>{t('ShowcaseJobsCell.Empty.notFound')}</p>
      <p className="max-w-xs text-sm text-stone-400">
        {t('ShowcaseJobsCell.Empty.checkSite')}
      </p>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ jobs }: CellSuccessProps<ShowcaseJobsQuery>) => {
  return (
    <>
      {jobs.map((job, idx) => (
        <ShowcaseJobCard key={idx} {...job} />
      ))}
    </>
  )
}
