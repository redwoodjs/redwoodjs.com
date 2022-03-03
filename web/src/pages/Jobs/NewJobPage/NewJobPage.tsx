import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewJobPage = () => {
  return (
    <>
      <MetaTags title="NewJob" description="NewJob page" />

      <h1>NewJobPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewJobPage/NewJobPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newJob</code>, link to me with `
        <Link to={routes.newJob()}>NewJob</Link>`
      </p>
    </>
  )
}

export default NewJobPage
