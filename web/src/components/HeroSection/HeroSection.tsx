import { ChevronDownIcon } from '@heroicons/react/solid'
const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] bg-[url(/public/images/forest.svg)] bg-cover bg-bottom bg-no-repeat"
      // style={{ backgroundImage: 'url(/images/forest.svg)' }}
    >
      <div className="flex-1 bg-gradient-to-t from-black">
        <div className="mb-10 flex flex-1 p-4 md:p-12 lg:p-32">
          <div className="flex flex-1 flex-col items-center justify-center space-y-12 rounded-2xl p-8 text-center text-white lg:px-12 lg:py-24">
            <h1 className="xs:text-2xl flex flex-col font-serif text-xl font-bold sm:text-4xl lg:text-5xl 2xl:text-7xl">
              <span>Focus on building your startup,</span>
              <span>not fighting your framework.</span>
            </h1>
            <h2 className="text-sm sm:text-lg md:max-w-xl md:text-xl lg:max-w-3xl lg:text-2xl">
              Redwood is the full-stack web framework designed to help you grow
              from side project to startup.
            </h2>
            <a
              href="/docs/tutorial"
              className="button bg-[#93CA48] text-stone-900 hover:bg-green-900"
            >
              Start the Tutorial
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-10 w-full items-center justify-center text-white">
          <ChevronDownIcon className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
