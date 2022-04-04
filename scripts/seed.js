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

const STARTUPS = [
  {
    about: '',
    achievements: ['10M Raised in Funding'],
    cta: {
      title: 'Watch the Demo',
      href: 'https://www.youtube.com/watch?v=uHKfrz65KSU',
    },
    images: [],
    name: 'Snaplet',
    published: true,
    questionResponses: [
      {
        question: "Who are you and what's your background?",
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Is redwood supporting the migration of an existing project/business or is it a brand new project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'Is this your first Redwood project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Are you using a vanilla setup or custom? Feel free to elaborate',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'How is your project hosted?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    slug: 'snaplet',
    tagline:
      'Snaplet copies your Postgres database, transforming personal information, so you can safely code against actual data',
    technologies: ['Netlify', 'AWS'],
    thumbnail: '',
    videos: ['ueUa1LengZk'],
  },
  {
    about: '',
    achievements: ['Trusted by 20 of the top non-profits'],
    cta: {
      title: 'Come Say Hi 👋',
      href: 'https://everfund.co.uk/',
    },
    images: [],
    name: 'Everfund',
    published: true,
    questionResponses: [
      {
        question: "Who are you and what's your background?",
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Is redwood supporting the migration of an existing project/business or is it a brand new project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'Is this your first Redwood project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Are you using a vanilla setup or custom? Feel free to elaborate',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'How is your project hosted?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    slug: 'everfund',
    tagline:
      'From non-profits to platforms, Everfund is evolving giving with the go-to infrastructure for the future of fundraising.',
    technologies: ['Docker', 'Digital Ocean'],
    thumbnail: '',
    videos: ['YvM-pnzRDYE'],
  },
  {
    about:
      '## Making Palletized\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum, enim id mollis rhoncus, massa quam faucibus orci, quis accumsan odio sem id nibh. Curabitur rutrum mi lacus, eget vulputate sem semper vel.\n\n## Marketing Palletized\n\nCras eu eros lacus. Sed quis purus a elit feugiat vehicula. Nunc vel libero nisi. Praesent faucibus pharetra turpis, a mattis ligula eleifend sed. Curabitur condimentum vel dui non porttitor. Nulla elementum magna ac rutrum varius. Maecenas mattis, dui vehicula tristique tristique, ipsum odio porta neque, sit amet tincidunt dui nibh at ex.\n\nNulla faucibus metus non posuere tincidunt. Cras convallis condimentum ante, eu efficitur nisl porta in. Nulla ac elit tempor, fringilla quam sit amet, condimentum lectus. Morbi luctus, augue vitae sodales ultrices, ante ipsum elementum ante, euismod ultrices massa enim quis justo.',
    achievements: [
      'Used by the Big Three automobile manufacturers',
      'Managing more than 200M in inventory',
    ],
    cta: {
      title: 'Come Say Hi 👋',
      href: 'https://github.com/locktech',
    },
    images: [],
    name: 'Palletized',
    published: true,
    questionResponses: [
      {
        question: "Who are you and what's your background?",
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Is redwood supporting the migration of an existing project/business or is it a brand new project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'Is this your first Redwood project?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question:
          'Are you using a vanilla setup or custom? Feel free to elaborate',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        question: 'How is your project hosted?',
        response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    slug: 'palletized',
    tagline:
      'Project management application for commercial and industrial material distributors.',
    technologies: ['Docker', 'Digital Ocean'],
    thumbnail: 'https://cdn.filestackcontent.com/kdMsPdPvSrmHZhqGbTZZ',
    videos: ['Qwd25JV-jnU', 'KMxo3T_MTvY'],
  },
]

export default async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
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
    }

    for (const s of STARTUPS) {
      const exists = await db.startup.findUnique({ where: { slug: s.slug } })
      if (!exists) await db.startup.create({ data: s })
    }

    const { rwLogo, jamstackGraph, randomImage } = await SeedMedia()

    const tags = await SeedTag()

    await SeedExamples()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
