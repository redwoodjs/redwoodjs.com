import { MetaTags } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'

import HeroSection from 'src/components/HeroSection'
import MissionSection from 'src/components/MissionSection'
import TechStackSection from 'src/components/TechStackSection'
import CommunitySection from 'src/components/CommunitySection'
import FundingShoutout from 'src/components/FundingShoutout'
import TestimonialSection from 'src/components/TestimonialSection'
import FeaturesSection from 'src/components/FeaturesSection'

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
        <FeaturesSection />
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
