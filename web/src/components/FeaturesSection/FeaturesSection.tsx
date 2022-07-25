import Picture from 'src/components/Picture'

const Image = ({ name, alt, ...rest }) => (
  <img src={`/images/3p-logos/${name}`} alt={alt} {...rest} />
)

const features = {
  design: {
    tools: [{ src: 'storybook.svg', alt: 'Storybook' }],
    title: 'Design',
    body: () => (
      <p className="mt-4 text-lg text-gray-500">
        Mockup, build and verify components in{' '}
        <a href="https://redwoodjs.com/docs/storybook">Storybook</a>, even in
        complete isolation from the backend. Work on design without worrying
        about data.
      </p>
    ),
    img: {
      src: '/images/storybook.webp',
      fallback: '/images/storybook.png',
      alt: 'Storybook',
    },
    learnMore: 'https://redwoodjs.com/docs/storybook',
  },
  test: {
    tools: [
      { src: 'jest.svg', alt: 'Jest' },
      { src: 'testing-library.png', alt: 'Testing Library' },
      { src: 'msw.svg', alt: 'Mock Service Worker' },
    ],
    title: 'Test',
    body: () => (
      <p className="mt-4 text-lg text-gray-500">
        Whether it's{' '}
        <span
          className="cursor-help border-b border-dashed border-stone-400"
          title="Test Driven Development"
        >
          TDD
        </span>{' '}
        or{' '}
        <span
          className="cursor-help border-b border-dashed border-stone-400"
          title="Development Driven Testing"
        >
          DDT
        </span>
        , Redwood uses{' '}
        <a href="https://redwoodjs.com/docs/testing#redwood-and-testing">
          Jest
        </a>{' '}
        along with{' '}
        <a href="https://redwoodjs.com/docs/testing#testing-cells">mocks</a> and{' '}
        <a href="https://redwoodjs.com/docs/testing#scenarios">scenarios</a> to
        verify functionality on the frontend and the backend.
      </p>
    ),
    img: { src: '/images/testing.png', alt: 'Testing' },
    learnMore: 'https://redwoodjs.com/docs/testing',
  },
  auth: {
    tools: [
      { src: 'auth0.svg', alt: 'Auth0' },
      { src: 'firebase.svg', alt: 'Firebase' },
      { src: 'netlify.svg', alt: 'Netlify' },
      { src: 'clerk.svg', alt: 'Clerk' },
      { src: 'magic-link.svg', alt: 'Magic.Link' },
      { src: 'nhost.svg', alt: 'Nhost' },
      { src: 'supabase.svg', alt: 'Supabase' },
      { src: 'ethereum.svg', alt: 'Ethereum' },
      { src: 'supertokens.png', alt: 'SuperTokens' },
    ],
    title: 'Auth & Security',
    body: () => (
      <p className="mt-4 text-lg text-gray-500">
        Lock down your front and backends with your own{' '}
        <a href="https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup">
          self-hosted auth
        </a>{' '}
        or integrate with nearly a dozen{' '}
        <a href="https://redwoodjs.com/docs/authentication">
          third party auth providers
        </a>
        . Verify access with{' '}
        <a href="https://redwoodjs.com/docs/how-to/role-based-access-control-rbac">
          RBAC
        </a>{' '}
        and{' '}
        <a href="https://redwoodjs.com/docs/services#service-validations">
          Validations
        </a>
        .
      </p>
    ),
    img: {
      src: '/images/home-page/auth.webp',
      fallback: '/images/home-page/auth.png',
      alt: 'Auth and Security',
    },
    learnMore: 'https://redwoodjs.com/docs/authentication',
  },
  data: {
    tools: [{ src: 'graphql.svg', alt: 'Graphql' }],
    title: 'Data & Transport',
    body: () => (
      <p className="mt-4 text-lg text-gray-500">
        When your API is{' '}
        <a href="https://redwoodjs.com/docs/graphql">GraphQL</a> you're ready
        for any client, from the browser to native mobile apps and more.
        Transform your data with{' '}
        <a href="https://redwoodjs.com/docs/directives">Directives</a> and keep
        your business logic organized and reusable within{' '}
        <a href="https://redwoodjs.com/docs/services">Services</a>.
      </p>
    ),
    img: {
      src: '/images/home-page/datafetching.webp',
      fallback: '/images/home-page/datafetching.png',
      alt: 'Data & Transport',
    },
    learnMore: 'https://redwoodjs.com/docs/graphql',
  },
  deploy: {
    tools: [
      { src: 'netlify.svg', alt: 'Netlify' },
      { src: 'vercel.svg', alt: 'Vercel' },
      { src: 'render.svg', alt: 'Render' },
      { src: 'serverless.svg', alt: 'Serverless' },
      { src: 'layer0.svg', alt: 'Layer0' },
    ],
    title: 'Deploy',
    body: () => (
      <p className="mt-4 text-lg text-gray-500">
        Deploy your app to serverless hosts like{' '}
        <a href="https://redwoodjs.com/docs/deploy/netlify">Netlify</a> and{' '}
        <a href="https://redwoodjs.com/docs/deploy/vercel">Vercel</a>, build for{' '}
        <a href="https://github.com/redwoodjs/docker">containers</a>, or deploy
        to <a href="https://redwoodjs.com/docs/deploy/baremetal">bare metal</a>.
      </p>
    ),
    img: {
      src: '/images/deploy.webp',
      fallback: '/images/deploy.png',
      alt: 'Deploy',
    },
    learnMore: 'https://redwoodjs.com/docs/deploy/introduction',
  },
}

const Feature = ({ feature, imgSide = 'right' }) => {
  return (
    <div className="relative mt-16 p-4">
      <div
        className={`flex flex-col md:flex-row md:items-center ${
          imgSide === 'right' ? '' : 'md:flex-row-reverse'
        }`}
      >
        <div
          className={`flex-1 ${imgSide === 'right' ? 'md:mr-24' : 'md:ml-24'}`}
        >
          <div className="mb-8 grid max-w-[240px] grid-cols-5 gap-2 gap-y-2">
            {feature.tools.map((tool) => (
              <Image
                key={tool.alt}
                name={tool.src}
                alt={tool.alt}
                className="h-12 w-12 grid-rows-1"
              />
            ))}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {feature.title}
          </h2>
          {feature.body()}
          <div className="mt-6">
            <a
              href={feature.learnMore}
              className="inline-flex rounded-md text-lg text-rw-500"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-12  flex-1 md:mt-0 ">
          <Picture
            src={feature.img.src}
            fallback={feature.img.fallback}
            alt={feature.img.alt}
            className="w-50 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section className="mx-auto lg:max-w-6xl">
      <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
        <div>
          Oh, you want to know more about the{' '}
          <span className="font-bold">technology</span> and{' '}
          <span className="font-bold">features</span>? Strap in.
        </div>
        <div>
          Here’s how you do{' '}
          <span className="font-bold">end-to-end development,</span> the Redwood
          Way.
        </div>
      </h3>
      <div className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-16">
        <Feature feature={features.design} />
        <Feature feature={features.test} imgSide="left" />
        <Feature feature={features.auth} />
        <Feature feature={features.data} imgSide="left" />
        <Feature feature={features.deploy} />
      </div>
    </section>
  )
}

export default FeaturesSection
