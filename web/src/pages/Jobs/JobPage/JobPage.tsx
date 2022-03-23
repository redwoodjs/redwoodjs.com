import { MetaTags } from '@redwoodjs/web'
import JobCell from 'src/components/Jobs/JobCell'

export default function ({ id }) {
  return (
    <>
      <MetaTags
        title="Job"
        description="Job opening for RedwoodJS developers"
      />

      <JobCell id={id} />
    </>
  )
}
