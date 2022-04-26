import { Trans, useTranslation } from 'react-i18next'

const MissionSection = () => {
  const { t } = useTranslation()

  return (
    <section className="px-4 sm:text-center">
      <p className="leading-1.25 font-serif text-xl sm:text-2xl md:text-4xl xl:text-6xl xl:leading-tight">
        <Trans
          t={t}
          i18nKey="HomePage.MissionSection.text"
          components={{ bold: <span className="font-bold" />, br: <br /> }}
        >
          Our mission is to help{' '}
          <span className="font-bold">more startups</span>
          <br /> explore{' '}
          <span className="font-bold">more territory, more quickly.</span>
        </Trans>
      </p>
    </section>
  )
}

export default MissionSection
