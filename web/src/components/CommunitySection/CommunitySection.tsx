const communities = [
  {
    name: 'Twitter',
    logo: '/images/3p-logos/community/twitter.svg',
    link: 'https://twitter.com/redwoodjs',
  },
  {
    name: 'Discord',
    logo: '/images/3p-logos/community/discord.svg',
    link: 'https://discord.gg/jjSYEQd',
  },
  {
    name: 'Discourse',
    logo: '/images/3p-logos/community/discourse.svg',
    link: 'https://community.redwoodjs.com',
  },
]

const CommunitySection = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-12 p-4">
      <p className="font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl">
        On top of the technology,{' '}
        <span className="font-bold">
          we warmly welcome you to join our community,{' '}
        </span>
        because going from side project to startup is hard, and{' '}
        <span className="font-bold">nobody should have to do it alone.</span>
      </p>
      <ul className="flex items-center justify-center space-x-8">
        {communities.map((item) => (
          <li key={item.name} className="">
            <a href={item.link}>
              <img
                className="h-10 w-10 md:h-16 md:w-16"
                src={item.logo}
                alt={item.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CommunitySection
