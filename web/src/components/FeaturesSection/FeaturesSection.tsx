import { SparklesIcon, InboxIcon } from '@heroicons/react/solid'
import StorybookIcon from 'public/images/3p-logos/storybook.svg'

const Image = ({ name, alt }) => (
  <img src={`/images/3p-logos/${name}`} alt={alt} className="h-12 w-12" />
)

const FeaturesSection = () => {
  return (
    <section className="mx-auto lg:max-w-6xl">
      <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl ">
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
        <div className="relative lg:mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <div className="magrid">
                    <StorybookIcon />
                    {/* <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                      <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span> */}
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Design
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Mockup, build and verify components in{' '}
                    <a href="#">Storybook</a>, even in complete isolation from
                    the backend. Work on design without worrying about data.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://redwoodjs.com/docs/storybook"
                      className="text-rw-orange inline-flex rounded-md text-base font-medium"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/storybook.png"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div className="max-w[150px] flex space-x-3">
                  <Image name="jest.svg" alt="Jest" />
                  <Image name="testing-library.png" alt="Testing Library" />
                  <Image name="msw.svg" alt="Mock Service Worker" />
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Test
                  </h2>
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
                    , Redwood uses <a href="#">Jest</a> along with{' '}
                    <a href="#">mocks</a> and <a href="#">scenarios</a> to
                    verify functionality on the frontend and the backend.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://redwoodjs.com/docs/testing#redwood-and-testing"
                      className="text-rw-orange inline-flex rounded-md text-base font-medium"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="space-y-3">
                  <div className="max-w[150px] flex space-x-3">
                    <Image name="auth0.svg" alt="Auth0" />
                    <Image name="firebase.svg" alt="Firebase" />
                    <Image name="netlify.svg" alt="Netlify" />
                    <Image name="clerk.svg" alt="Clerk" />
                  </div>
                  <div className="max-w[150px] flex space-x-3">
                    <Image name="magic-link.svg" alt="Magic.Link" />
                    <Image name="nhost.svg" alt="Nhost" />
                    <Image name="supabase.svg" alt="Supabase" />
                    <Image name="ethereum.svg" alt="Ethereum" />
                    <Image name="supertokens.png" alt="SuperTokens" />
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Auth &amp; Security
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Lock down your front and backends with your own{' '}
                    <a href="#">hosted auth</a> or integrate with nearly a dozen{' '}
                    <a href="#">third party auth providers</a>. Verify access
                    with <a href="#">RBAC</a> and <a href="#">Validators</a>.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://redwoodjs.com/docs/authentication"
                      className="text-rw-orange inline-flex rounded-md text-base font-medium"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/storybook.png"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div className="max-w[150px] flex space-x-3">
                  <Image name="graphql.svg" alt="GraphQL" />
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Data &amp; Transport
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    When your API is <a href="#">GraphQL</a> you're ready for
                    any client, from the browser to native mobile apps and more.
                    Transform your data with <a href="#">Directives</a> and keep
                    your business logic organized and reusable within{' '}
                    <a href="#">Services</a>.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://redwoodjs.com/docs/graphql"
                      className="text-rw-orange inline-flex rounded-md text-base font-medium"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="max-w[150px] flex space-x-3">
                  <Image name="netlify.svg" alt="Netlify" />
                  <Image name="vercel.svg" alt="Vercel" />
                  <Image name="render.svg" alt="Render" />
                  <Image name="serverless.svg" alt="Serverless" />
                  <Image name="layer0.svg" alt="Layer0" />
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Deploy
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Deploy your app to serverless hosts divke{' '}
                    <a href="#">Netlify</a> and <a href="#">Vercel</a>, build
                    for <a href="#">containers</a>, or deploy to{' '}
                    <a href="#">bare metal</a>.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://redwoodjs.com/docs/deploy/introduction"
                      className="text-rw-orange inline-flex rounded-md text-base font-medium"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/storybook.png"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
