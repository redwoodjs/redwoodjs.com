import { ChevronDownIcon } from '@heroicons/react/solid'
import { Trans, useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] bg-[url(/public/images/forest.svg)] bg-cover bg-bottom bg-no-repeat">
      <div className="flex flex-1 bg-gradient-to-t from-black">
        <div className="mb-10 flex flex-1 items-center p-4 md:p-12 lg:p-32">
          <div className="flex flex-1 flex-col space-y-12 rounded-2xl p-8 text-left text-white lg:items-center lg:justify-center lg:px-12 lg:py-24 lg:text-center">
            <h1 className="flex flex-col font-serif text-4xl font-bold md:text-6xl  2xl:text-7xl 2xl:leading-[100px]">
              <Trans
                i18nKey={'HomePage.HeroSection.title'}
                components={{ span: <span />, br: <br /> }}
              >
                <span>Focus on building your startup,</span>
                <span>not fighting your framework.</span>
              </Trans>
            </h1>
            <h2 className="text-xl md:text-3xl lg:max-w-3xl lg:text-2xl lg:leading-relaxed">
              {t('HomePage.HeroSection.subtitle')}
            </h2>
            <a
              href="https://redwoodjs.com/docs/tutorial"
              className="button max-w-[200px]"
            >
              {t('HomePage.HeroSection.link')}
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-10 w-full items-center justify-center text-white">
          <ChevronDownIcon className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
