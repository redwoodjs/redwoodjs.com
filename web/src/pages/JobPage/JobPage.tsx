import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JobPage = () => {
  return (
    <>
      <MetaTags title="Job" description="Job page" />

      <h1>JobPage</h1>
      <p>
        Find me in <code>./web/src/pages/JobPage/JobPage.tsx</code>
      </p>
      <p>
        My default route is named <code>job</code>, link to me with `
        <Link to={routes.job()}>Job</Link>`
      </p>
    </>
  )
}

export default JobPage
