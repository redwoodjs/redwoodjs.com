import { Trans, Translation } from 'react-i18next'
import ExamplesCell from 'src/pages/ExamplesPage/components/ExamplesCell'

const StandoutSection = ({ onTagClick }) => (
  <Translation>
    {(t) => (
      <section
        className={'canon mx-auto mt-24 max-w-screen-xl justify-center p-8'}
      >
        <header>
          <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl">
            {t('ExamplesPage.canon.title')}
          </h3>
          <p className="mx-auto mt-10 max-w-3xl px-4 font-serif text-base sm:text-center md:text-2xl lg:max-w-4xl lg:text-4xl">
            <Trans
              i18nKey={'ExamplesPage.canon.description'}
              components={{
                bold: <span className="font-bold" />,
                italic: <span className="text-6xl italic" />,
                br: <br />,
              }}
            />
          </p>
        </header>
        <div
          className={
            'mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }
        >
          <ExamplesCell type={'sample'} tag={'canon'} onTagClick={onTagClick} />
        </div>
      </section>
    )}
  </Translation>
)

export default StandoutSection
