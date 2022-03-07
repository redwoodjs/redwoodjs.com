import {db} from 'api/src/lib/db'
import SeedMedia from './seed/media'
import SeedTag from './seed/tag'
import SeedExamples from './seed/examples'

const JOBS = [
  {
    id: 1,
    email: 'hiring@snaplet.dev',
    applyUrl: 'https://indeed.com',
    company: 'Snaplet',
    logo: '/images/snaplet_logo.svg',
    title: 'Sr. Developer',
    locations: '* Remote\n* Cape Town, South Africa',
    compensation: '* $150,000 - $200,000 USD\n* Cats',
    perks: '* 401k\n* Heatlhcare',
    aboutJob:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
    aboutApplicant:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them,quinoa 3 wolf moon disrupt cold - pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan,edison bulb pinterest snackwave.Four dollar toast post - ironic cardigan,intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix.Ethical farm - to - table hammock,actually leggings prism + 1. Pour - over hell of pok pok post - ironic,scenester marfa farm - to - table poutine freegan mumblecore fixie live - edge jianbing.Art party church - key DIY adaptogen live - edge gochujang.",
    aboutCompany:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    id: 2,
    email: 'hiring@everfund.co.uk',
    applyUrl: 'https://indeed.com',
    company: 'Everfund',
    logo: '/images/everfund_logo.svg',
    title: 'Junior Dev',
    locations: 'Remote',
    compensation: '$150,000 - $200,000 USD',
    perks: '* 401k\n* Heatlhcare\n* Fish and Chips',
    aboutJob:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
    aboutApplicant:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them,quinoa 3 wolf moon disrupt cold - pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan,edison bulb pinterest snackwave.Four dollar toast post - ironic cardigan,intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix.Ethical farm - to - table hammock,actually leggings prism + 1. Pour - over hell of pok pok post - ironic,scenester marfa farm - to - table poutine freegan mumblecore fixie live - edge jianbing.Art party church - key DIY adaptogen live - edge gochujang.",
    aboutCompany:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brun\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    id: 3,
    email: 'hiring@redwoodjs.com',
    applyUrl: 'https://indeed.com',
    company: 'RedwoodJS Foundation',
    logo: '/images/logo.svg',
    title: 'Developer Relations Specialist',
    locations: 'Remote',
    compensation: '$150,000 - $200,000 USD',
    perks: '* 401k\n* Cones',
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
    id: 1,
    email: 'rob@redwoodjs.com',
    portfolioUrl: 'https://ridingtheclutch.com',
    name: 'Rob Cameron',
    photo: '/images/rob.jpg',
    status: 'available',
    title: 'Senior Developer',
    locations: 'Remote Only',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    id: 2,
    email: 'peter@redwoodjs.com',
    portfolioUrl: 'https://snaplet.dev',
    name: 'Peter Pistorius',
    photo: '/images/peter.gif',
    status: 'booked',
    title: 'Long Distance Cyclist',
    locations: 'Berlin, Germany',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
  {
    id: 3,
    email: 'tom@redwoodjs.com',
    portfolioUrl: 'https://mojombo.com',
    name: 'Tom Preston-Werner',
    photo: '/images/tom.jpg',
    status: 'booked',
    title: 'Scotch Enthusiast',
    locations: '* Mendocino, CA\n* San Francisco, CA',
    about:
      "Seitan wolf small batch tote bag actually mustache 8-bit skateboard hot chicken artisan. Flannel gastropub tbh, organic sartorial knausgaard XOXO fingerstache normcore af craft beer kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps subway tile cold-pressed gastropub. Kinfolk hexagon lomo thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry you probably haven't heard of them, quinoa 3 wolf moon disrupt cold-pressed tacos chillwave brunch.\n\nSemiotics mixtape artisan seitan, edison bulb pinterest snackwave. Four dollar toast post-ironic cardigan, intelligentsia ennui venmo everyday carry portland tofu microdosing shoreditch keytar crucifix. Ethical farm-to-table hammock, actually leggings prism +1. Pour-over hell of pok pok post-ironic, scenester marfa farm-to-table poutine freegan mumblecore fixie live-edge jianbing. Art party church-key DIY adaptogen live-edge gochujang.",
  },
]

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    const {rwLogo, jamstackGraph, randomImage} = await SeedMedia()

    const tags = await SeedTag()

    await SeedExamples()

    for (const job of JOBS) {
      await db.job.upsert({
        where: {id: job.id},
        update: job,
        create: job,
      })
    }

    for (const profile of JOB_PROFILES) {
      await db.jobProfile.upsert({
        where: {id: profile.id},
        update: profile,
        create: profile,
      })
    }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
