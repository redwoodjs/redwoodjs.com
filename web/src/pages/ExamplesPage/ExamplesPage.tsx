import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExamplesPage = () => {
  return (
    <>
      <MetaTags title="Examples" description="Examples page" />

      <h1>ExamplesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ExamplesPage/ExamplesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>examples</code>, link to me with `
        <Link to={routes.examples()}>Examples</Link>`
      </p>
    </>
  )
}

export default ExamplesPage
