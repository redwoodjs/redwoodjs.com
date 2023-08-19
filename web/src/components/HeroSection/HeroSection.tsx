import { ChevronDownIcon } from '@heroicons/react/solid'
const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)]">
      <div className="flex flex-1">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-t from-black object-cover object-center" />
        <img
          src="/images/forest.svg"
          alt="forest"
          className="absolute top-0 left-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-rows-2">
          <div className="flex flex-1 flex-col space-y-12 rounded-2xl p-8 text-left text-white md:col-span-2 md:row-span-2 md:p-12 lg:col-span-1 lg:items-center lg:justify-center lg:p-32">
            <h1 className="font-serif text-4xl font-bold md:text-6xl 2xl:text-7xl 2xl:leading-[1.1]">
              <span className="inline">Focus on building your startup, </span>
              <span className="inline">not fighting your framework.</span>
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-2xl lg:leading-relaxed">
              Redwood is the full-stack web framework designed to help you grow
              from side project to startup.
            </h2>
          </div>
          <div className="lg:self-end 2xl:self-stretch 2xl:bg-black">
            <a
              href="https://redwoodjsconf.com"
              target="_blank"
              rel="noreferrer"
              className="mt-auto xl:mt-0"
            >
              <img
                src="/images/ad-conference.png"
                alt="RedwoodJS Conference: The Conference for Builders"
              />
            </a>
          </div>
          <div className="2xl:bg-black">
            <a
              href="https://build.redwoodjs.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/ad-build-competition.png"
                alt="Build Competition: 4 Weeks to Build, 3 Finalists, $10k in Prizes"
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 z-20 flex h-10 w-full items-center justify-center text-white">
          <ChevronDownIcon className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
