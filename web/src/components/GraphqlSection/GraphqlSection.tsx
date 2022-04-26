import { Trans } from 'react-i18next'

const GraphqlSection = () => {
  return (
    <section className="mx-auto lg:max-w-6xl">
      <h3 className="space-y-12 px-4 font-serif text-xl sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
        <Trans
          i18nKey={'HomePage.GraphqlSection.text'}
          components={{ div: <div />, bold: <span className="font-bold" /> }}
        >
          <div>
            When you <span className="font-bold">start</span> with a GraphQL
            backend server, you&apos;ll <span className="font-bold">end</span>{' '}
            up with the{' '}
            <span className="font-bold">only backend you ever need.</span>
          </div>
          <div>
            We call it:{' '}
            <span className="font-bold">One API to rule them all.</span>
          </div>
        </Trans>
      </h3>
      <div className="mt-12 md:mt-32">
        <img src="/images/graphql-server.png" alt="GraphQL Server" />
      </div>
    </section>
  )
}

export default GraphqlSection
