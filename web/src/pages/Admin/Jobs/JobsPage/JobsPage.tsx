import JobsCell from './components/JobsCell'

const JobsPage = () => {
  return (
    <>
      <div className="flex w-full flex-col space-y-8 pr-8 pt-8">
        <header className="flex flex-row items-center">
          <div className="flex flex-grow flex-col space-y-2">
            <h1 className="text-3xl font-bold">Jobs</h1>
            <p className="text-stone-600">Update existing jobs</p>
          </div>
        </header>
        <JobsCell />
      </div>
    </>
  )
}

export default JobsPage
