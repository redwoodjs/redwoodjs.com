import Picture from 'src/components/Picture'

const GraphqlSection = () => {
  return (
    <section className="mx-auto lg:max-w-6xl">
      <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
        <div>
          When you <span className="font-bold">start</span> with a GraphQL
          backend server, you&apos;ll <span className="font-bold">end</span> up
          with the{' '}
          <span className="font-bold">only backend you ever need.</span>
        </div>
        <div>
          We call it:{' '}
          <span className="font-bold">One API to rule them all.</span>
        </div>
      </h3>
      <div className="mt-12 md:mt-32">
        <Picture
          src="/images/home-page/graphql-server.webp"
          fallback="/images/home-page/graphql-server.png"
          alt="GraphQL Server"
        />
      </div>
    </section>
  )
}

export default GraphqlSection
