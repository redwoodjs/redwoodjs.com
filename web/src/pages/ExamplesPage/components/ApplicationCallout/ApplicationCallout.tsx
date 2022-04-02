import { Trans, Translation } from 'react-i18next'

const ApplicationCallout = () => (
  <Translation>
    {(t) => (
      <section className="max-w-screen-xl my-10 mx-auto px-8">
        <div className=" bg-[url(/public/images/forest.svg)] bg-cover bg-top bg-no-repeat rounded-md">
          <div className="flex flex-col sm:flex-row items-center px-7 py-5 rounded-md space-x-0 sm:space-x-20 space-y-6 sm:space-y-0 bg-gradient-to-t from-black">
            <div className="flex-grow space-y-3">
              <h3 className="font-semibold text-xl text-white">
                {t('ExamplesPage.contact.title')}
              </h3>
              <p className="text-sm text-orange-50 leading-relaxed">
                <Trans
                  i18nKey="ExamplesPage.contact.subtitle"
                  components={{
                    b: <b className="font-semibold" />,
                    br: <span className="block mt-1.5" />,
                  }}
                  t={t}
                />
              </p>
              <p className={'text-sm text-white'}>
                <Trans
                  i18nKey={'ExamplesPage.contact.guidelines'}
                  components={{
                    rel: (
                      // eslint-disable-next-line jsx-a11y/anchor-has-content
                      <a
                        className="italic text-white capitalize"
                        href="https://community.redwoodjs.com/t/guidelines-to-contribute-example-apps/2939"
                        target="_blank"
                        rel="noreferrer"
                      />
                    ),
                  }}
                />
              </p>
            </div>
            <a
              className="button-invert text-black bg-forest-500 hover:bg-forest-200 hover:text-black px-3 py-2 flex items-center space-x-3 whitespace-nowrap"
              href="https://community.redwoodjs.com/c/show-tell/7"
              rel="noreferrer"
              target="_blank"
            >
              <span>{t('ExamplesPage.contact.action')}</span>
              <span aria-hidden="true" className="icon md-18">
                launch
              </span>
            </a>
          </div>
        </div>
      </section>
    )}
  </Translation>
)

export default ApplicationCallout
