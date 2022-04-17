import { MetaTags } from '@redwoodjs/web'

import HeroSection from 'src/components/HeroSection'
import MissionSection from 'src/components/MissionSection'
import TechStackSection from 'src/components/TechStackSection'
import CommunitySection from 'src/components/CommunitySection'
import FundingShoutout from 'src/components/FundingShoutout'
import TestimonialSection from 'src/components/TestimonialSection'
import FeaturesSection from 'src/components/FeaturesSection'
import GraphqlSection from 'src/components/GraphqlSection'
import VideoTutorialSection from 'src/components/VideoTutorialSection'
import FinalCTASection from 'src/components/FinalCTASection'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS: The App Framework for Startups"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework."
        ogUrl="https://redwoodjs.com"
        ogContentUrl="https://redwoodjs.com/images/rw-og.png"
      />

      <div className="space-y-10 md:space-y-36">
        <HeroSection />
        <MissionSection />
        <TechStackSection />
        <CommunitySection />
        <FundingShoutout />
        <TestimonialSection />
        <FeaturesSection />
        <GraphqlSection />
        <VideoTutorialSection />
        <FinalCTASection />
      </div>
    </>
  )
}

export default HomePage
