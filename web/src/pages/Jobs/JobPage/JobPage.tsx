import { MetaTags } from '@redwoodjs/web'
import JobCell from 'src/components/Jobs/JobCell'

const JobPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Job" description="Job page" />

      <div className="mt-24">
        <JobCell id={id} />
      </div>
    </>
  )
}

export default JobPage
