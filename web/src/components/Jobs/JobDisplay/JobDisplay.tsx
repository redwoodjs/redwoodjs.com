import ReactMarkdown from 'react-markdown'

import JobDetailLayout from 'src/components/Jobs/Shared/JobDetailLayout'
import { resizeFilestackImage } from 'src/lib/utility'

const JobDisplay = ({ job, back }) => {
  return (
    <JobDetailLayout
      title={
        <>
          <span className="text-teal-800">{job.company}</span> is hiring a{' '}
          <span className="text-teal-800">{job.title}</span>
        </>
      }
      postedDateTime={job.createdAt}
      postedLabel="Posted"
      buttonLink={job.applyUrl}
      buttonLabel="Apply for this job"
      back={back}
    >
      <section className="md:flex items-stretch">
        <div className="md:w-1/3 py-8 px-12">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
            Location(s)
          </h3>
          <ul className="mt-2 text-stone-600 text-sm leading-6 text-center">
            {job.locations.map((location, i) => (
              <li key={`locations-${i}`}>{location}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
            Compensation
          </h3>
          <ul className="mt-2 text-stone-600 text-sm leading-6 text-center">
            {job.compensation.map((comp, i) => (
              <li key={`compensation-${i}`}>{comp}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
          <h3 className="text-xl text-teal-600 font-semibold tracking-tight text-center">
            Perks
          </h3>
          <ul className="mt-2 text-stone-600 text-sm leading-6 text-center">
            {job.perks.map((perk, i) => (
              <li key={`perks-${i}`}>{perk}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-red-200 p-12">
        <h2 className="title">About the Job</h2>
        <ReactMarkdown className="markdown">{job.aboutJob}</ReactMarkdown>
      </section>
      <section className="border-t border-red-200 p-12">
        <h2 className="title">About You</h2>
        <ReactMarkdown className="markdown">{job.aboutApplicant}</ReactMarkdown>
      </section>
      <section className="border-t border-red-200 p-12">
        <h2 className="title">About Snaplet</h2>
        <ReactMarkdown className="markdown">{job.aboutCompany}</ReactMarkdown>
        <div className="mt-8 flex justify-center">
          <img
            src={resizeFilestackImage(job.logo, { width: 512, height: 256 })}
            alt={`${job.company} logo`}
            className="w-64 h-32 object-contain"
          />
        </div>
      </section>
    </JobDetailLayout>
  )
}

export default JobDisplay
