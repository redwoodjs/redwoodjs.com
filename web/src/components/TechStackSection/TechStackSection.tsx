const stack = [
  {
    name: 'React',
    description:
      'We’ve chosen the world’s most popular rendering engine to power Redwood’s web frontend. With React, you’ll have your pick of learning materials, design systems, and trained employees.',
    logo: '/images/3p-logos/react.svg',
  },
  {
    name: 'Graphql',
    description:
      'As your project grows, so will the number of client apps that need to talk to your backend. With a GraphQL API as your foundation, you can live in a multi-client world with ease.',
    logo: '/images/3p-logos/graphql.svg',
  },
  {
    name: 'Prisma',
    description:
      'Interacting with your database has never been easier. Prisma’s ORM Interacting with your database has never been easier. Prisma’s ORM ',
    logo: '/images/3p-logos/prisma.svg',
  },
  {
    name: 'Typescript',
    description:
      "Selfies actually succulents pork belly shabby chic trust fund small batch, wolf ramps brooklyn post-ironic. Copper mug aestheticbanh mi cliche heirloom iceland 90's skateboard",
    logo: '/images/3p-logos/typescript.svg',
  },
  {
    name: 'Jest',
    description:
      "Selfies actually succulents pork belly shabby chic trust fund small batch, wolf ramps brooklyn post-ironic. Copper mug aestheticbanh mi cliche heirloom iceland 90's skateboard",
    logo: '/images/3p-logos/jest.svg',
  },
  {
    name: 'Storybook',
    description:
      "Selfies actually succulents pork belly shabby chic trust fund small batch, wolf ramps brooklyn post-ironic. Copper mug aestheticbanh mi cliche heirloom iceland 90's skateboard",
    logo: '/images/3p-logos/storybook.svg',
  },
]

const TechStackSection = () => {
  return (
    <>
      <p className="mx-auto max-w-3xl px-4 font-serif text-base sm:text-center md:text-2xl lg:max-w-4xl lg:text-4xl">
        We begin by crafting a more integrated framework, <br />
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
