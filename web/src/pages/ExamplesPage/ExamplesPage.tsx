import { useTranslation } from 'react-i18next'
import { CardVariant } from 'src/components/Card/Card'
import ExamplesCell from './components/ExamplesCell/ExamplesCell'

import './ExamplesPage.scss'

const ExamplesPage = () => {
  const { t } = useTranslation()

  return (
    <div className={'page_examples'}>
      <section>
        <h1>{t('ExamplesPage.title')}</h1>
        <div className={'content'}>
          <ExamplesCell tag={'highlight'} variant={CardVariant.highlight} />
        </div>
      </section>
      <section className={'canon'}>
        <header>
          <h2>{t('ExamplesPage.canon.title')}</h2>
          <p>{t('ExamplesPage.canon.description')}</p>
        </header>
        <div className={'content'}>
          <ExamplesCell type={'sample'} tag={'canon'} />
        </div>
      </section>
      <section className={'community'}>
        <h1>{t('ExamplesPage.community.title')}</h1>
        <div className="content">
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
