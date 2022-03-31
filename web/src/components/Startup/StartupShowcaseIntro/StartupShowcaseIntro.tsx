import clsx from 'clsx'

import DiscordIcon from 'src/components/Icons/DiscordIcon'
import GitHubIcon from 'src/components/Icons/GitHubIcon'
import LinkedInIcon from 'src/components/Icons/LinkedInIcon'
import ProductHuntIcon from 'src/components/Icons/ProductHuntIcon'
import TwitterIcon from 'src/components/Icons/TwitterIcon'

import type { SocialLinkPlatform, StartupShowcaseQuery } from 'types/graphql'

// --

export type StartupShowcaseIntroProps = Pick<
  StartupShowcaseQuery['startup'],
  'achievements' | 'cta' | 'name' | 'socialLinks' | 'tagline' | 'technologies'
>

// --

const PlatformIcons: Record<SocialLinkPlatform, (p) => JSX.Element> = {
  discord: DiscordIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  productHunt: ProductHuntIcon,
  twitter: TwitterIcon,
}

// --

const StartupShowcaseIntro = ({
  achievements,
  cta,
  name,
  socialLinks,
  tagline,
  technologies,
}: StartupShowcaseIntroProps) => {
  return (
    <section className="flex flex-col lg:mt-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl">{name}</h1>
        <p className="text-lg text-stone-600">{tagline}</p>
      </header>
      {socialLinks.length !== 0 && (
        <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start space-x-0 sm:space-x-6">
          {socialLinks.map(({ link, platform }, idx) => {
            const Icon = PlatformIcons[platform]
            return (
              <a
                className={clsx('button-social mx-3 sm:mx-0', platform)}
                href={link}
                key={idx}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      )}
      {achievements.length > 0 && (
        <div className="space-y-3">
          <p className="font-semibold">Achievements so far:</p>
          <ul className="list-inside space-y-3">
            {achievements.map((a) => (
              <li
                className="before:content-['\2713'] before:text-forest-600 before:font-semibold"
                key={a}
              >
                <span className="relative left-3">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {technologies.length > 0 && (
        <p className="leading-relaxed max-w-full md:max-w-md">
          <span className="font-semibold">Built with:</span>&nbsp;&nbsp;
          {'RedwoodJS, ' +
            technologies
              .map((tech, idx) =>
                idx === technologies.length - 1 && technologies.length !== 1
                  ? `and ${tech}`
                  : tech
              )
              .join(', ')}
        </p>
      )}
      <a
        className="button bg-forest-500 hover:bg-forest-600 text-white !mt-8 w-fit"
        href={cta.href}
        rel="noreferrer"
        target="_blank"
      >
        {cta.title}
      </a>
    </section>
  )
}

export default StartupShowcaseIntro
