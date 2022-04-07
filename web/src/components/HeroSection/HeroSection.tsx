import { ChevronDownIcon } from '@heroicons/react/solid'
const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] bg-[url(/public/images/forest.svg)] bg-cover bg-bottom bg-no-repeat">
      <img
        src="/public/images/forest.svg"
        alt="Speed up hero image discovery by the browser"
        className="hidden w-0 h-0"
      />
      <div className="flex flex-1 bg-gradient-to-t from-black">
        <div className="flex items-center flex-1 p-4 mb-10 md:p-12 lg:p-32">
          <div className="flex flex-col flex-1 p-8 space-y-12 text-left text-white rounded-2xl lg:items-center lg:justify-center lg:px-12 lg:py-24 lg:text-center">
            <h1 className="flex flex-col font-serif text-4xl font-bold md:text-6xl  2xl:text-7xl 2xl:leading-[100px]">
              <span>Focus on building your startup,</span>
              <span>not fighting your framework.</span>
            </h1>
            <h2 className="text-xl md:text-3xl lg:max-w-3xl lg:text-2xl lg:leading-relaxed">
              Redwood is the full-stack web framework designed to help you grow
              from side project to startup.
            </h2>
            <a
              href="https://redwoodjs.com/docs/tutorial"
              className="button max-w-[200px]"
            >
              Start the Tutorial
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center w-full h-10 text-white">
          <ChevronDownIcon className="w-8 h-8" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
