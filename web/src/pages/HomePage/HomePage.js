import { MetaTags } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'

import HeroSection from 'src/components/HeroSection'
import MissionSection from 'src/components/MissionSection'
import TechStackSection from 'src/components/TechStackSection'
import CommunitySection from 'src/components/CommunitySection'
import FundingShoutout from 'src/components/FundingShoutout'
import TestimonialSection from 'src/components/TestimonialSection'
import FeaturesSection from 'src/components/FeaturesSection'
import GraphqlSection from 'src/components/GraphqlSection'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags
        title="RedwoodJS: The Full-stack JS Framework"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL and Prisma for a full-stack app framework."
      />

      <div className="mb-32 space-y-10 md:space-y-36">
        <HeroSection />
        <MissionSection />
        <TechStackSection />
        <CommunitySection />
        <FundingShoutout />
        <TestimonialSection />
        <FeaturesSection />
        <GraphqlSection />
      </div>
    </>
  )
}

export default HomePage
