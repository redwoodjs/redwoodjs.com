import { useTranslation } from 'react-i18next'
import { CardVariant } from 'src/components/Card/Card'
import ExamplesCell from './components/ExamplesCell/ExamplesCell'

const ExamplesPage = () => {
  const { t } = useTranslation()

  return (
    <div className={'page_examples pt-48'}>
      <section className={'p-4'}>
        <h1 className={'w-full text-center text-4xl font-bold'}>
          {t('ExamplesPage.title')}
        </h1>
        <div
          className={
            'flex flex-wrap flex-col items-stretch md:flex-row md:items-start'
          }
        >
          <ExamplesCell tag={'highlight'} variant={CardVariant.highlight} />
        </div>
      </section>
      <section className={'canon p-4 mt-24'}>
        <header>
          <h2 className={'w-full text-2xl'}>{t('ExamplesPage.canon.title')}</h2>
          <p>{t('ExamplesPage.canon.description')}</p>
        </header>
        <div
          className={
            'flex flex-wrap flex-col items-stretch md:flex-row md:items-start'
          }
        >
          <ExamplesCell type={'sample'} tag={'canon'} />
        </div>
      </section>
      <section className={'community p-4 mt-4'}>
        <h2 className={'text-2xl'}>{t('ExamplesPage.community.title')}</h2>
        <div className="flex flex-wrap flex-col items-stretch md:flex-row md:items-start">
          <ExamplesCell
            type="sample"
            tag={'community'}
            variant={CardVariant.external}
          />
        </div>
      </section>
    </div>
  )
}

export default ExamplesPage
