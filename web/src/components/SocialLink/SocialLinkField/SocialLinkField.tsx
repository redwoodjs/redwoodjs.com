import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { TextField, useFieldArray } from '@redwoodjs/forms'

import DiscordIcon from 'src/components/Icons/DiscordIcon'
import GitHubIcon from 'src/components/Icons/GitHubIcon'
import LinkedInIcon from 'src/components/Icons/LinkedInIcon'
import ProductHuntIcon from 'src/components/Icons/ProductHuntIcon'
import TwitterIcon from 'src/components/Icons/TwitterIcon'

import { SocialLinkPlatform } from 'types/graphql'

// --

const SocialTypes: SocialLinkPlatform[] = [
  'discord',
  'github',
  'linkedin',
  'productHunt',
  'twitter',
]

const SocialIcons: Record<SocialLinkPlatform, ReactNode> = {
  discord: <DiscordIcon width="18" />,
  github: <GitHubIcon width="18" />,
  linkedin: <LinkedInIcon width="18" />,
  productHunt: <ProductHuntIcon width="18" />,
  twitter: <TwitterIcon width="18" />,
}

interface SocialLinkFieldType {
  id: string
  link: string
  platform: SocialLinkPlatform
}

// --

export interface SocialLinkFieldProps {
  defaultValue?: SocialLinkFieldType[]
  name: string
}

// --

const cleanDefault = (d: SocialLinkFieldType[]) =>
  d.map(({ id, link, platform }) => ({ id, link, platform }))

// --

const SocialLinkField = ({ defaultValue, name }: SocialLinkFieldProps) => {
  const { t } = useTranslation()

  // --

  const [platform, setPlatform] = useState<SocialLinkPlatform>(SocialTypes[0])

  // --

  const { fields, append, remove } = useFieldArray({ name })

  // --

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => defaultValue && append(cleanDefault(defaultValue)), [])

  // --

  return (
    <div className="flex flex-col mt-2">
      <div className="flex flex-row items-center space-x-4">
        <button
          aria-label={t('SocialLink.Field.addLink', { platform })}
          className="button button-invert bg-transparent leading-[0] p-1 h-fit"
          onClick={() => append({ platform })}
          type="button"
        >
          <span className="icon md-20">add</span>
        </button>
        <select
          title={t('SocialLink.Field.select')}
          className="rw-input mt-0"
          defaultValue={platform}
          onChange={(e) => setPlatform(e.target.value as SocialLinkPlatform)}
        >
          {SocialTypes.map((platform) => (
            <option key={platform} value={platform}>
              {t(`SocialLink.platforms.${platform}`)}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {fields.map((field: SocialLinkFieldType, idx) => (
          <li
            className="flex flex-row items-center mt-4 space-x-3"
            key={field.id}
          >
            <button
              aria-label={t('SocialLink.Field.removeLink', { platform })}
              className="button button-invert bg-transparent text-red-600 hover:bg-red-100 hover:text-red-700 leading-[0] p-1 h-fit"
              onClick={() => remove(idx)}
              type="button"
            >
              <span className="icon md-16">delete</span>
            </button>
            <div className="flex flex-row items-center w-full">
              <span
                aria-hidden="true"
                //                                                    35px = the height of the TextField below
                className="bg-stone-700 inline-flex items-center h-[35px] px-2 rounded-l text-stone-100"
              >
                {SocialIcons[field.platform]}
              </span>
              <TextField
                className="rw-input mt-0 px-2 py-1.5 rounded-l-none"
                name={`${name}.${idx}.link`}
                defaultValue=""
                placeholder={t(
                  `SocialLink.Field.placeholder.${field.platform}`
                )}
                title={t('SocialLink.Field.field', {
                  platform: field.platform,
                })}
                validation={{ required: true }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinkField
