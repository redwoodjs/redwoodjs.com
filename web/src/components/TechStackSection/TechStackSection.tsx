import { Trans, useTranslation } from 'react-i18next'

const stack = [
  {
    name: 'React',
    logo: '/images/3p-logos/react.svg',
  },
  {
    name: 'GraphQL',
    logo: '/images/3p-logos/graphql.svg',
  },
  {
    name: 'Prisma',
    logo: '/images/3p-logos/prisma.svg',
  },
  {
    name: 'TypeScript',
    logo: '/images/3p-logos/typescript.svg',
  },
  {
    name: 'Jest',
    logo: '/images/3p-logos/jest.svg',
  },
  {
    name: 'Storybook',
    logo: '/images/3p-logos/storybook.svg',
  },
]

const TechStackSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <p className="mx-auto max-w-3xl px-4 font-serif text-base sm:text-center md:text-2xl lg:max-w-4xl lg:text-4xl lg:leading-tight">
        <Trans
          i18nKey="HomePage.TechStackSection.text"
          components={{ br: <br className="hidden sm:block" /> }}
        >
          We begin by crafting a more integrated framework,{' '}
          <br className="hidden sm:block" />
          beautifully weaving together the best parts of:
        </Trans>
      </p>
      <section className="mx-auto max-w-4xl">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <li
              key={item.name}
              className="col-span-1 space-y-4 rounded-lg bg-white p-4"
            >
              <img className="h-8 w-8" src={item.logo} alt={item.name} />
              <div>
                <h3 className="title">{item.name}</h3>
                <p className="mt-2 text-sm">
                  {t(
                    `HomePage.TechStackSection.stack.${item.name}.description`
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default TechStackSection
