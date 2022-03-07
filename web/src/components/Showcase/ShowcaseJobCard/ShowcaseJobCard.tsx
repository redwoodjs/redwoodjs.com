import { format, formatDistance } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import { Link, routes } from '@redwoodjs/router'

import type { ShowcaseJobsQuery } from 'types/graphql'

export type ShowcaseJobCardProps = ShowcaseJobsQuery['jobs'][number]

const MAX_ABOUT_LEN = 400

const ShowcaseJobCard = ({
  aboutJob,
  createdAt,
  id,
  locations,
  title,
}: ShowcaseJobCardProps) => {
  return (
    <Link
      className="bg-white border border-orange-200 hover:border-orange-400 no-underline p-6 rounded-md space-y-4"
      to={routes.job({ id })}
    >
      <div className="flex flex-col space-y-1.5">
        <h3 className="title">{title}</h3>
        <ReactMarkdown className="showcase--jobs--locations">
          {locations}
        </ReactMarkdown>
      </div>
      <ReactMarkdown className="leading-relaxed text-stone-900">
        {aboutJob.substring(0, MAX_ABOUT_LEN) + '...'}
      </ReactMarkdown>
      <div className="flex justify-end">
        <time
          dateTime={format(new Date(createdAt), "yyyy-MM-dd'T'HH:mm:ss'Z'")}
          className="text-sm text-stone-500"
        >
          Posted {formatDistance(new Date(), new Date(createdAt))} ago
        </time>
      </div>
    </Link>
  )
}

export default ShowcaseJobCard
