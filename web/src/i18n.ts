import fr from 'src/locales/fr.json'
import en from 'src/locales/en.json'
// import nl from 'src/locales/nl.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export enum Languages {
  en = 'en',
  fr = 'fr',
  nl = 'nl',
}

// This is a simple i18n configuration with English and French translations.
// You can find the translations in web/src/locales/{language}.json
// see: https://react.i18next.com
// Here's an example of how to use it in your components, pages or layouts:
/*
import { Link, routes } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <h1>{t('HomePage.title')}</h1>
      <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <p>
        {t('HomePage.info')} <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        {t('HomePage.route')} <code>home</code>, {t('HomePage.link')}`
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
*/

i18n
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en } /*nl:{translation:nl}*/,
    },
    load: 'all',
    cleanCode: true,
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: Languages.en,
    preload: [Languages.en],
    lng: Languages.en,
    lowerCaseLng: true,
    initImmediate: true,
    supportedLngs: [Languages.en, Languages.fr],
    keySeparator: '.',
    detection: {
      // order and from where user language should be detected
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    },
    react: {
      /**
       * @warning `wait` will throw a @deprecation warning: do not be intimidated by it and take your time to replace it.
       */
      // wait: false,
      transSupportBasicHtmlNodes: true,
    },
  })

export default i18n
