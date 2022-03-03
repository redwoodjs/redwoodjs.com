import type { FC } from 'react'
import { Link } from '@redwoodjs/router'

export interface ShowcaseCardProps {
  src: string
  subtitle: string
  title: string
  to: string
}

const ShowcaseCard: FC<ShowcaseCardProps> = ({ src, subtitle, title, to }) => {
  return (
    <Link
      aria-label={`${title} Showcase Link`}
      aria-details={subtitle}
      className="group border border-orange-200 focus:border-orange-400 hover:border-orange-400 cursor-pointer h-fit w-full no-underline rounded-md"
      to={to}
    >
      <img
        alt={`${title} branding`}
        className="aspect-auto rounded-t-md w-full"
        src={src}
      />
      <span className="bg-white flex flex-col p-8 pt-6 rounded-b-md space-y-2">
        <h3 className="title">{title}</h3>
        <p className="leading-relaxed text-sm text-stone-900">{subtitle}</p>
      </span>
    </Link>
  )
}

export default ShowcaseCard
