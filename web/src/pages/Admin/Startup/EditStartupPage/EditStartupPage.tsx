import { MetaTags } from '@redwoodjs/web'

import EditStartupCell from 'src/components/Startup/EditStartupCell'

interface EditStartupPageProps {
  slug: string
}

const EditStartupPage = ({ slug }: EditStartupPageProps) => {
  return (
    <>
      <MetaTags title="Edit Startup" />
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Edit Startup</h2>
        </header>
        <div className="rw-segment-main">
          <EditStartupCell slug={slug} />
        </div>
      </div>
    </>
  )
}

export default EditStartupPage
