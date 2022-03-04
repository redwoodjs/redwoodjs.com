import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewJobProfilePage = () => {
  return (
    <>
      <MetaTags title="NewJobProfile" description="NewJobProfile page" />

      <h1>NewJobProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/NewJobProfilePage/NewJobProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>newJobProfile</code>, link to me with `
        <Link to={routes.newJobProfile()}>NewJobProfile</Link>`
      </p>
    </>
  )
}

export default NewJobProfilePage
