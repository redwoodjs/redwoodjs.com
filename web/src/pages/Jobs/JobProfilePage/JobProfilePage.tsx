import { MetaTags } from '@redwoodjs/web'
import JobProfileCell from 'src/components/Jobs/JobProfileCell'

export default function ({ id }) {
  return (
    <>
      <MetaTags
        title="Job Profile"
        description="RedwoodJS devs available for work"
      />

      <JobProfileCell id={id} />
    </>
  )
}
