import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'
import { resizeFilestackImage } from 'src/components/Uploader/utility'

const applicationUrl = (job) => {
  if (job.applyUrl.match(/@/)) {
    return `mailto:${job.applyUrl}?subject=${job.title}`
  } else {
    return job.applyUrl
  }
}

const JobDisplay = ({ job, back }) => {
  return (
    <JobDetailLayout
      title={
        <>
          <span className="font-bold">{job.company}</span> is hiring a{' '}
          <span className="font-bold">{job.title}</span>
        </>
      }
      postedDateTime={job.createdAt}
      postedLabel="Posted"
      buttonLink={applicationUrl(job)}
      buttonLabel="Apply for this job"
      back={back}
    >
      <section className="items-stretch md:flex">
        <div className="py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">
            Location(s)
          </h3>
          <ul className="mt-2 text-center text-sm leading-6 text-gray-500">
            {job.locations.map((location, i) => (
              <li key={`locations-${i}`}>{location}</li>
            ))}
          </ul>
        </div>
        <div className="py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">
            Compensation
          </h3>
          <ul className="mt-2 text-center text-sm leading-6 text-gray-500">
            {job.compensation.map((comp, i) => (
              <li key={`compensation-${i}`}>{comp}</li>
            ))}
          </ul>
        </div>
        <div className="py-8 px-12 md:w-1/3">
          <h3 className="text-center font-serif text-2xl font-normal">Perks</h3>
          <ul className="mt-2 text-center text-sm leading-6 text-gray-500">
            {job.perks.map((perk, i) => (
              <li key={`perks-${i}`}>{perk}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="p-12">
        <h2 className="title">About the Job</h2>
        <ReactMarkdown className="markdown">{job.aboutJob}</ReactMarkdown>
      </section>
      <section className="p-12">
        <h2 className="title">About You</h2>
        <ReactMarkdown className="markdown">{job.aboutApplicant}</ReactMarkdown>
      </section>
      <section className="p-12">
        <h2 className="title">About {job.company}</h2>
        <ReactMarkdown className="markdown">{job.aboutCompany}</ReactMarkdown>
        <div className="mt-8 flex justify-center">
          <img
            src={resizeFilestackImage(job.logo, { width: 512, height: 256 })}
            alt={`${job.company} logo`}
            className="h-32 w-64 object-contain"
          />
        </div>
      </section>
    </JobDetailLayout>
  )
}

export default JobDisplay
