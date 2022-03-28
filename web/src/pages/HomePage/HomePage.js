import { MetaTags } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'

import HeroSection from 'src/components/HeroSection'
import MissionSection from 'src/components/MissionSection'
import TechStackSection from 'src/components/TechStackSection'
import CommunitySection from 'src/components/CommunitySection'
import FundingShoutout from 'src/components/FundingShoutout'
import TestimonialSection from 'src/components/TestimonialSection'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags
        title="RedwoodJS: The Full-stack JS Framework"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL and Prisma for a full-stack app framework."
      />

      <div className="space-y-10 md:space-y-36">
        <HeroSection />
        <MissionSection />
        <TechStackSection />
        <CommunitySection />
        <FundingShoutout />
        <TestimonialSection />
      </div>
      <div className="bg-white">
        <section className="bg-orange-100">
          <div className="mx-auto max-w-screen-lg py-24">
            <h2 className="text-center text-6xl font-black text-orange-900">
              One API to Rule Them All
            </h2>
            <h3 className="mt-4 text-center text-xl text-stone-500">
              With GraphQL at the core, support any client you can dream of
            </h3>

            <div className="mt-24 flex justify-center">
              <div className="">
                <img src="/images/graphql_map.svg" alt="GraphQL clients" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-24">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="text-center text-6xl font-black text-teal-800">
              End-to-end Development the Redwood Way
            </h2>
            <h3 className="mt-4 text-center text-xl text-stone-500">
              From design to deployment, Redwood includes everything you need
              for modern app development
            </h3>

            <div className="mt-24 flex flex-col space-y-8">
              <div className="relative flex items-end">
                <div className="w-2/5 cursor-pointer rounded-lg border-4 border-orange-400 bg-white p-8 pl-12 transition duration-100 hover:border-orange-300">
                  <h3 className="title">Design</h3>
                  <p className="mt-2 text-sm">
                    Mockup, build and verify components in{' '}
                    <a href="#">Storybook</a>, even in complete isolation from
                    the backend. Work on design without worrying about data.
                  </p>
                  <div className="absolute top-1/2 left-0 flex h-20 w-20 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-orange-400 bg-white">
                    <span className="icon md-48 text-teal-500">touch_app</span>
                  </div>
                </div>

                <svg
                  viewBox="0 0 68 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 -mb-4 w-16 fill-current text-orange-400"
                >
                  <clipPath id="a">
                    <path d="m0 0h68v50h-68z" />
                  </clipPath>
                  <g clipPath="url(#a)">
                    <path
                      clipRule="evenodd"
                      d="m3 .00000308c-1.38071.00000009-2.5 1.11928692-2.5 2.49999692 0 1.38072 1.11929 2.5 2.5 2.5h43.5v35.9645l-11.6421-11.6422c-.9763-.9763-2.5592-.9763-3.5356 0-.9763.9763-.9763 2.5593 0 3.5356l15.9099 15.9099c.9763.9763 2.5593.9763 3.5356 0l15.9099-15.9099c.9763-.9763.9763-2.5593 0-3.5356s-2.5592-.9763-3.5356 0l-11.6421 11.6422v-37.9645c0-.08439-.0042-.16778-.0123-.25002.0081-.08222.0123-.16561.0123-.24998 0-1.38071-1.1193-2.5-2.5-2.5z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>

              <div className="flex items-end">
                <div className="w-1/6"></div>
                <div className="relative -ml-8 w-2/5 cursor-pointer rounded-lg border-4 border-orange-500 bg-white p-8 pl-12 transition duration-100 hover:border-orange-300">
                  <h3 className="title">Test</h3>
                  <p className="mt-2 text-sm">
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
                  <div className="absolute top-1/2 left-0 -ml-[2px] flex h-20 w-20 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-orange-500 bg-white">
                    <span className="icon md-48 text-teal-600">bug_report</span>
                  </div>
                </div>

                <svg
                  viewBox="0 0 68 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 -mb-4 w-16 fill-current text-orange-500"
                >
                  <clipPath id="a">
                    <path d="m0 0h68v50h-68z" />
                  </clipPath>
                  <g clipPath="url(#a)">
                    <path
                      clipRule="evenodd"
                      d="m3 .00000308c-1.38071.00000009-2.5 1.11928692-2.5 2.49999692 0 1.38072 1.11929 2.5 2.5 2.5h43.5v35.9645l-11.6421-11.6422c-.9763-.9763-2.5592-.9763-3.5356 0-.9763.9763-.9763 2.5593 0 3.5356l15.9099 15.9099c.9763.9763 2.5593.9763 3.5356 0l15.9099-15.9099c.9763-.9763.9763-2.5593 0-3.5356s-2.5592-.9763-3.5356 0l-11.6421 11.6422v-37.9645c0-.08439-.0042-.16778-.0123-.25002.0081-.08222.0123-.16561.0123-.24998 0-1.38071-1.1193-2.5-2.5-2.5z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>

              <div className="flex items-end">
                <div className="w-2/6"></div>
                <div className="relative -ml-8 w-2/5 cursor-pointer rounded-lg border-4 border-orange-600 bg-white p-8 pl-12 transition duration-100 hover:border-orange-300">
                  <h3 className="title">Auth & Security</h3>
                  <p className="mt-2 text-sm">
                    Lock down your front and backends with your own{' '}
                    <a href="#">hosted auth</a> or integrate with nearly a dozen{' '}
                    <a href="#">third party auth providers</a>. Verify access
                    with <a href="#">RBAC</a> and <a href="#">Validators</a>.
                  </p>
                  <div className="absolute top-1/2 left-0 -ml-[2px] flex h-20 w-20 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-orange-600 bg-white">
                    <span className="icon md-48 text-teal-700">lock</span>
                  </div>
                </div>
                <svg
                  viewBox="0 0 68 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 -mb-4 w-16 fill-current text-orange-600"
                >
                  <clipPath id="a">
                    <path d="m0 0h68v50h-68z" />
                  </clipPath>
                  <g clipPath="url(#a)">
                    <path
                      clipRule="evenodd"
                      d="m3 .00000308c-1.38071.00000009-2.5 1.11928692-2.5 2.49999692 0 1.38072 1.11929 2.5 2.5 2.5h43.5v35.9645l-11.6421-11.6422c-.9763-.9763-2.5592-.9763-3.5356 0-.9763.9763-.9763 2.5593 0 3.5356l15.9099 15.9099c.9763.9763 2.5593.9763 3.5356 0l15.9099-15.9099c.9763-.9763.9763-2.5593 0-3.5356s-2.5592-.9763-3.5356 0l-11.6421 11.6422v-37.9645c0-.08439-.0042-.16778-.0123-.25002.0081-.08222.0123-.16561.0123-.24998 0-1.38071-1.1193-2.5-2.5-2.5z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>

              <div className="flex items-end">
                <div className="w-3/6"></div>
                <div className="relative -ml-8 w-2/5 cursor-pointer rounded-lg border-4 border-orange-700 bg-white p-8 pl-12 transition duration-100 hover:border-orange-300">
                  <h3 className="title">Data & Transport</h3>
                  <p className="mt-2 text-sm">
                    When your API is <a href="#">GraphQL</a> you're ready for
                    any client, from the browser to native mobile apps and more.
                    Transform your data with <a href="#">Directives</a> and keep
                    your business logic organized and reusable within{' '}
                    <a href="#">Services</a>.
                  </p>
                  <div className="absolute top-1/2 left-0 -ml-[2px] flex h-20 w-20 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-orange-700 bg-white">
                    <span className="icon md-48 text-teal-800">
                      local_shipping
                    </span>
                  </div>
                </div>
                <svg
                  viewBox="0 0 68 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 -mb-4 w-16 fill-current text-orange-700"
                >
                  <clipPath id="a">
                    <path d="m0 0h68v50h-68z" />
                  </clipPath>
                  <g clipPath="url(#a)">
                    <path
                      clipRule="evenodd"
                      d="m3 .00000308c-1.38071.00000009-2.5 1.11928692-2.5 2.49999692 0 1.38072 1.11929 2.5 2.5 2.5h43.5v35.9645l-11.6421-11.6422c-.9763-.9763-2.5592-.9763-3.5356 0-.9763.9763-.9763 2.5593 0 3.5356l15.9099 15.9099c.9763.9763 2.5593.9763 3.5356 0l15.9099-15.9099c.9763-.9763.9763-2.5593 0-3.5356s-2.5592-.9763-3.5356 0l-11.6421 11.6422v-37.9645c0-.08439-.0042-.16778-.0123-.25002.0081-.08222.0123-.16561.0123-.24998 0-1.38071-1.1193-2.5-2.5-2.5z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </div>

              <div className="flex items-end">
                <div className="w-4/6"></div>
                <div className="relative w-2/5 cursor-pointer rounded-lg border-4 border-orange-800 bg-white p-8 pl-12 transition duration-100 hover:border-orange-300">
                  <h3 className="title">Deploy</h3>
                  <p className="mt-2 text-sm">
                    Deploy your app to serverless hosts divke{' '}
                    <a href="#">Netlify</a> and <a href="#">Vercel</a>, build
                    for <a href="#">containers</a>, or deploy to{' '}
                    <a href="#">bare metal</a>.
                  </p>
                  <div className="absolute top-1/2 left-0 -ml-[2px] flex h-20 w-20 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-orange-800 bg-white">
                    <span className="icon md-48 text-teal-900">
                      cloud_upload
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col items-center ">
            <h2 className="text-center text-5xl font-black text-teal-800">
              Watch it in action
            </h2>
            <h3 className="mt-4 text-center text-xl text-stone-500">
              Watch a feature being designed, built and deployed in Redwood
            </h3>
            <div className="mt-12">
              <iframe
                width="1024"
                height="576"
                src="https://www.youtube.com/embed/tiF9SdM1i7M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="border-16 border-teal-600 bg-gradient-to-r from-teal-700 to-teal-500 py-24 text-white">
          <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center">
            <h2 className="px-4 text-right text-6xl font-black">
              Ready to learn Redwood?
            </h2>
            <h3 className="mt-4 text-center text-xl text-teal-200">
              Start from{' '}
              <span
                className="
              rounded bg-teal-500 px-1 py-[2px] font-mono text-teal-100"
              >
                yarn install
              </span>{' '}
              and end up with a deployed app,
              <br />
              taking a tour of all major Redwood features
            </h3>
          </div>
          <div className="mx-auto mt-24 flex max-w-screen-lg justify-center pb-4">
            <button type="button" className="button-invert">
              Start the Tutorial
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
