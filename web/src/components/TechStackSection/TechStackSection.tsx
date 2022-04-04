const stack = [
  {
    name: 'React',
    description:
      'We’ve chosen the world’s most popular rendering engine to power Redwood’s web frontend. With React, you’ll have your pick of learning materials, design systems, and trained employees.',
    logo: '/images/3p-logos/react.svg',
  },
  {
    name: 'GraphQL',
    description:
      'As your project grows, so will the number of client apps that need to talk to your backend. With a GraphQL API as your foundation, you can live in a multi-client world with ease.',
    logo: '/images/3p-logos/graphql.svg',
  },
  {
    name: 'Prisma',
    description:
      'Interacting with your database has never been easier. Prisma’s extremely popular ORM allows you to focus more on your business logic and less on the intricacies of SQL.',
    logo: '/images/3p-logos/prisma.svg',
  },
  {
    name: 'TypeScript',
    description:
      'Optional TypeScript support gives you the best of JavaScript AND the best of a type system. Even if you build your app in JS, you’ll still get killer autocomplete because Redwood itself is written in TypeScript.',
    logo: '/images/3p-logos/typescript.svg',
  },
  {
    name: 'Jest',
    description:
      'Sleep well at night knowing that your critical code paths are well tested. Redwood augments Jest with “scenarios” making it easy to setup your database for a given scenario, plus GraphQL mocking to easily test data flow.',
    logo: '/images/3p-logos/jest.svg',
  },
  {
    name: 'Storybook',
    description:
      'If you design your components in isolation with Storybook, not only will you never have to fight with your framework to see it in a specific state, but you’ll also build up a comprehensive design reference for free!',
    logo: '/images/3p-logos/storybook.svg',
  },
]

const TechStackSection = () => {
  return (
    <>
      <p className="mx-auto max-w-3xl px-4 font-serif text-base sm:text-center md:text-2xl lg:max-w-4xl lg:text-4xl lg:leading-tight">
        We begin by crafting a more integrated framework,{' '}
        <br className="hidden sm:block" />
        beautifully weaving together the best parts of:
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
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default TechStackSection
