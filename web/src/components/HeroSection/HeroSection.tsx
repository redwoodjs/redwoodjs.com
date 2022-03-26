import { ChevronDownIcon } from '@heroicons/react/solid'
const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-cover relative flex" style={{ backgroundImage: "url(/images/forest.svg)"}}>
      <div className="p-4 mb-10 md:p-12 lg:p-32 flex flex-1">
        <div className="flex flex-1 flex-col items-center justify-center space-y-12 rounded-2xl bg-black bg-opacity-80 p-8 text-center text-white lg:px-12 lg:py-24">
          <h1 className="flex flex-col font-serif text-xl font-bold xs:text-2xl sm:text-4xl lg:text-5xl 2xl:text-7xl">
            <span>Focus on building your startup,</span>
            <span>not fighting your framework.</span>
          </h1>
          <h2 className="text-sm md:max-w-xl sm:text-lg md:text-xl lg:max-w-3xl lg:text-2xl">
            Redwood is the full-stack web framework designed to help you grow from
            side project to startup.
          </h2>
          <a href='/docs/tutorial' className="button bg-[#93CA48] hover:bg-green-900 text-stone-900">
            Start the Tutorial
          </a>
        </div>
      </div>
      <div className="h-10 w-full bg-black absolute bottom-0 text-white flex justify-center items-center">
        <ChevronDownIcon className="w-8 h-8"/>
      </div>
    </section>
  )
}

export default HeroSection
