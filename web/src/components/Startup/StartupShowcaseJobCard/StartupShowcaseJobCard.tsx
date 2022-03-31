import { format, formatDistance } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import { Link, routes } from '@redwoodjs/router'

import type { StartupShowcaseJobsQuery } from 'types/graphql'

export type StartupShowcaseJobCardProps =
  StartupShowcaseJobsQuery['jobs'][number]

const MAX_ABOUT_LEN = 400

const StartupShowcaseJobCard = ({
  aboutJob,
  createdAt,
  id,
  locations,
  title,
}: StartupShowcaseJobCardProps) => {
  return (
    <Link
      className="flex flex-col p-6 rounded-md space-y-4 no-underline bg-white border border-stone-200 focus:border-stone-300 hover:border-stone-300"
      to={routes.job({ id })}
    >
      <div className="flex flex-col space-y-3">
        <h3 className="title">{title}</h3>
        <p className="text-stone-600">
          {locations
            .map((loc, idx) =>
              idx === locations.length - 1 && locations.length !== 1
                ? `and ${loc}`
                : loc
            )
            .join('; ')}
        </p>
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

export default StartupShowcaseJobCard
