import { useTranslation } from 'react-i18next'

import type { SocialLinkPlatform } from 'types/graphql'

export interface SocialLinkExternalProps {
  link: string
  platform: SocialLinkPlatform
}

const SocialLinkExternal = ({ link, platform }: SocialLinkExternalProps) => {
  const { t } = useTranslation()

  return (
    <a
      className="inline-flex items-center space-x-1 no-underline rw-link"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <span>{t(`SocialLink.platforms.${platform}`)}</span>
      <span className="icon md-16">launch</span>
    </a>
  )
}

export default SocialLinkExternal
