import { db } from 'api/src/lib/db'
import SeedMedia from './seed/media'
import SeedTag from './seed/tag'
import SeedExamples from './seed/examples'

const JOBS = [
  {
    email: 'hiring@snaplet.dev',
    applyUrl: 'https://indeed.com',
    company: 'Snaplet',
    logo: 'https://cdn.filestackcontent.com/IWtMfOGR3Su2SzGQXulQ',
    title: 'Sr. Developer',
    locations: '["Remote","Cape Town, South Africa"]',
    compensation: '["$150,000 - $200,000 USD","Cats"]',
    perks: '["401k","Heatlhcare"]',
    aboutJob:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
    aboutApplicant:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them,quinoa 3 wolf moon disrupt cold - pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan,edison bulb pinterest snackwave.Four dollar toast post - ironic cardigan,intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix.Ethical farm - to - table hammock,actually leggings prism + 1. Pour - over hell of pok pok post - ironic,scenester marfa farm - to - table poutine freegan mumblecore fixie live - edge jianbing.Art party church - key DIY adaptogen live - edge gochujang.",
    aboutCompany:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    email: 'hiring@everfund.co.uk',
    applyUrl: 'https://indeed.com',
    company: 'Everfund',
    logo: 'https://cdn.filestackcontent.com/YNCtLuSYigTeRYH4eDQt',
    title: 'Junior Dev',
    locations: '["Remote"]',
    compensation: '["$150,000 - $200,000 USD"]',
    perks: '["401k","Heatlhcare","Fish and Chips"]',
    aboutJob:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
    aboutApplicant:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them,quinoa 3 wolf moon disrupt cold - pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan,edison bulb pinterest snackwave.Four dollar toast post - ironic cardigan,intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix.Ethical farm - to - table hammock,actually leggings prism + 1. Pour - over hell of pok pok post - ironic,scenester marfa farm - to - table poutine freegan mumblecore fixie live - edge jianbing.Art party church - key DIY adaptogen live - edge gochujang.",
    aboutCompany:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    email: 'hiring@redwoodjs.com',
    applyUrl: 'https://indeed.com',
    company: 'RedwoodJS Foundation',
    logo: 'https://cdn.filestackcontent.com/VCytbVjsRGWo8DDAeqww',
    title: 'Developer Relations Specialist',
    locations: '["Remote"]',
    compensation: '["$150,000 - $200,000 USD"]',
    perks: '["401k","Cones"]',
    aboutJob:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
    aboutApplicant:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them,quinoa 3 wolf moon disrupt cold - pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan,edison bulb pinterest snackwave.Four dollar toast post - ironic cardigan,intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix.Ethical farm - to - table hammock,actually leggings prism + 1. Pour - over hell of pok pok post - ironic,scenester marfa farm - to - table poutine freegan mumblecore fixie live - edge jianbing.Art party church - key DIY adaptogen live - edge gochujang.",
    aboutCompany:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
]

const JOB_PROFILES = [
  {
    email: 'rob@redwoodjs.com',
    portfolioUrl: 'https://ridingtheclutch.com',
    name: 'Rob Cameron',
    photo: 'https://cdn.filestackcontent.com/0weWjML3SOehbRiu4LlQ',
    status: 'available',
    title: 'Senior Developer',
    locations: '["Remote Only"]',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    email: 'peter@redwoodjs.com',
    portfolioUrl: 'https://snaplet.dev',
    name: 'Peter Pistorius',
    photo: 'https://cdn.filestackcontent.com/dn4xLjm3TyuuxzS2FHI5',
    status: 'booked',
    title: 'Long Distance Cyclist',
    locations: '["Berlin, Germany"]',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    email: 'tom@redwoodjs.com',
    portfolioUrl: 'https://mojombo.com',
    name: 'Tom Preston-Werner',
    photo: 'https://cdn.filestackcontent.com/tzLtNeKNRx2SfI8BIfEf',
    status: 'booked',
    title: 'Scotch Enthusiast',
    locations: '["Mendocino, CA","San Francisco,CA"]',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
]

export default async () => {
  try {
    for (const job of JOBS) {
      const existingJob = await db.job.findFirst({
        where: { email: job.email },
      })

      if (!existingJob) {
        await db.job.create({
          data: job,
        })
      }
    }

    for (const profile of JOB_PROFILES) {
      const existingProfile = await db.jobProfile.findFirst({
        where: { email: profile.email },
      })

      if (!existingProfile) {
        await db.jobProfile.create({
          data: profile,
        })
      }
    }

    const { rwLogo, jamstackGraph, randomImage } = await SeedMedia()

    const tags = await SeedTag()

    await SeedExamples()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
