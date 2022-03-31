import type { FC } from 'react'
import { Link } from '@redwoodjs/router'

// --

export interface ShowcaseCardProps {
  src: string
  subtitle: string
  title: string
  to: string
}

// --

const MAX_STRING_LENGTH = 120

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + ' ...'
  }
  return output
}

// --

const ShowcaseCard: FC<ShowcaseCardProps> = ({ src, subtitle, title, to }) => {
  return (
    <Link
      aria-label={`${title} Showcase Link`}
      aria-details={subtitle}
      className="group flex flex-col border border-stone-200 focus:border-stone-300 hover:border-stone-300 cursor-pointer w-full no-underline rounded-md transition duration-300"
      to={to}
    >
      <img
        alt={`${title} branding`}
        className="aspect-auto rounded-t-md w-full"
        src={src}
      />
      <span className="bg-white flex flex-col flex-grow p-8 pt-6 rounded-b-md space-y-2">
        <p className="text-forest-600 text-xl font-semibold">{title}</p>
        <p className="leading-relaxed text-sm text-stone-900">
          {truncate(subtitle)}
        </p>
      </span>
    </Link>
  )
}

export default ShowcaseCard
