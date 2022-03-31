import { MetaTags } from '@redwoodjs/web'

import StartupDetailCell from 'src/components/Startup/StartupDetailCell'

export interface StartupDetailCellProps {
  slug: string
}

const StartupPage = ({ slug }: StartupDetailCellProps) => {
  return (
    <>
      <MetaTags title="Startup Details" />
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Showcase Details</h2>
        </header>
        <div className="rw-segment-main">
          <StartupDetailCell slug={slug} />
        </div>
      </div>
    </>
  )
}

export default StartupPage
