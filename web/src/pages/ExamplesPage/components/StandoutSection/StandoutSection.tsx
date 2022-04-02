import { Trans, Translation } from 'react-i18next'
import ExamplesCell from 'src/pages/ExamplesPage/components/ExamplesCell'

const StandoutSection = ({ onTagClick }) => (
  <Translation>
    {(t) => (
      <section className={'canon p-4 mt-24'}>
        <header>
          <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl">
            {t('ExamplesPage.canon.title')}
          </h3>
          <p className="mx-auto mt-10 max-w-3xl px-4 font-serif text-base sm:text-center md:text-2xl lg:max-w-4xl lg:text-4xl">
            <Trans
              i18nKey={'ExamplesPage.canon.description'}
              components={{
                bold: <span className="font-bold" />,
                italic: <span className="italic text-6xl" />,
                br: <br />,
              }}
            />
          </p>
        </header>
        <div
          className={'flex flex-wrap mt-24 flex-col items-stretch md:flex-row'}
        >
          <ExamplesCell type={'sample'} tag={'canon'} onTagClick={onTagClick} />
        </div>
      </section>
    )}
  </Translation>
)

export default StandoutSection
