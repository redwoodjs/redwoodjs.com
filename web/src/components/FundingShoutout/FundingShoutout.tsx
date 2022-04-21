import SnapletLogoWhite from 'web/public/images/startup-logos/snaplet_logo_white.svg'
import EverfundLogo from 'web/public/images/startup-logos/everfund_logo.svg'
import NousLogo from 'web/public/images/startup-logos/nous_logo.svg'
import BuildPassLogo from 'web/public/images/startup-logos/buildpass_white.svg'
import LeftLaneLogo from 'web/public/images/startup-logos/left-lane.svg'
import PullflowLogo from 'web/public/images/startup-logos/pullflow.svg'
import TeamstreamLogo from 'web/public/images/startup-logos/teamstream.svg'
import UserVitalsLogo from 'web/public/images/startup-logos/uservitals.svg'
import CourseliftLogo from 'web/public/images/startup-logos/courselift-white.svg'
import TapeLogo from 'web/public/images/startup-logos/tape.svg'

const FundingShoutout = () => {
  const companies = [
    { name: 'Snaplet', logo: SnapletLogoWhite, link: 'https://snaplet.dev' },
    { name: 'Everfund', logo: EverfundLogo, link: 'https://everfund.io?utm_source=redwoodjs&utm_medium=logo+area' },
    { name: 'Nous', logo: NousLogo, link: 'https://nous.co' },
    {
      name: 'BuildPass',
      logo: BuildPassLogo,
      link: 'https://buildpass.com.au',
    },
    {
      name: 'LeftLane',
      logo: LeftLaneLogo,
      link: 'https://www.leftlanesoftware.com',
    },
    { name: 'Pullflow', logo: PullflowLogo, link: 'https://pullflow.com' },
    { name: 'Teamstream', logo: TeamstreamLogo, link: 'https://teamstream.gg' },
    {
      name: 'UserVitals',
      logo: UserVitalsLogo,
      link: 'https://uservitalshq.com',
    },
    {
      name: 'Courselift',
      logo: CourseliftLogo,
      link: 'https://courselift.com',
    },
    { name: 'Tape', logo: TapeLogo, link: 'https://tape.sh' },
    // { name: 'SportOffice', logo: CourseliftLogo, link: 'http://courselift.com' },
    // Checkout the special layout hook below that centers the last logo if it
    // would display all by itself! If we add 2 more logos it will need to change
  ]
  return (
    <>
      <p className="text-center font-serif text-xl md:text-4xl">
        If you join us, you’ll be in good company.
      </p>
      <section className="bg-neutral-900 py-12 px-4 text-white">
        <div className="space-y-4 text-center md:flex md:items-center md:justify-center md:space-y-0">
          <div className="mr-4 text-xl font-bold md:text-right md:text-3xl lg:text-5xl lg:leading-tight">
            Startups using Redwood <br />
            have raised over
          </div>
          <div className="text-6xl font-bold md:text-8xl">$19M</div>
        </div>
        <div className="mx-auto mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl md:grid-cols-3 lg:mt-8 lg:max-w-6xl">
          {companies.map((company, i) => (
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              key={company.name}
              className={
                i === companies.length - 1 && i % 2 !== 0
                  ? 'md:col-start-2'
                  : ''
              }
            >
              <div className="col-span-1 flex justify-center bg-neutral-800 py-4 px-8">
                <company.logo className="h-12 w-48 fill-white" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default FundingShoutout
// Snaplet https://snaplet.dev
// Tape.sh http://tape.sh
// Teamstream http://teamstream.gg
// Everfund https://everfund.co.uk
// SportOffice https://sportoffice.fr
// Pullflow http://pullflow.com
// Courselift http://courselift.com
// Buildpass http://buildpass.com.au
// Nous http://nous.co
// Leftlane https://www.leftlanesoftware.com
// UserVitals http://uservitalshq.com
