import { MetaTags } from '@redwoodjs/web'

const ShowcasePage = () => {
  return (
    <main>
      <MetaTags title="Showcase" description="Showcase page" />
      <section>
        <h1>Build with RedwoodJS</h1>
        <div className={'content'}></div>
      </section>
    </main>
  )
}

export default ShowcasePage
