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
      className="cursor-pointer group relative h-fit w-full"
      to={to}
    >
      <span className="absolute inset-0 flex items-center justify-center bg-teal-900 bg-opacity-95 opacity-0  group-focus:opacity-100 group-hover:opacity-100 backdrop-blur-none group-focus:backdrop-blur-sm group-hover:backdrop-blur-sm rounded-md transition-all duration-[400ms]">
        <div className="space-y-3 w-4/6">
          <h3 className="font-semibold text-xl text-white tracking-wide underline underline-offset-2 decoration-orange-400">
            {title}
          </h3>
          <p className="text-sm text-stone-200">{subtitle}</p>
        </div>
      </span>
      <img
        alt={`${title} branding`}
        className="aspect-auto rounded-md w-full"
        src={src}
      />
    </Link>
  )
}

export default ShowcaseCard
