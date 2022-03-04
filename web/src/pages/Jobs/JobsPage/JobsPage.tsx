import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobsCell from 'src/components/Jobs/JobsCell'

const JobsPage = () => {
  return (
    <>
      <MetaTags
        title="Jobs"
        description="Want to get paid to write RedwoodJS?"
      />

      <section className="max-w-screen-lg mx-auto">
        <header className="text-center">
          <h1 className="mt-36">
            <span className="text-orange-900">RedwoodJS</span>{' '}
            <span className="">Jobs</span>
          </h1>
          <p className="mt-2 text-stone-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="flex justify-end mt-4">
          <Link to={routes.newJob()} className="button-sm">
            + Post a Job
          </Link>
        </div>
        <div className="border border-orange-200 rounded-lg mt-2">
          <JobsCell limit={10} />
        </div>
      </section>

      <section className="max-w-screen-lg mx-auto mt-24 mb-24">
        <header className="text-center">
          <h1 className="mt-12">
            <span className="text-orange-900">RedwoodJS</span>{' '}
            <span className="">Developers</span>
          </h1>
          <p className="mt-2 text-stone-500">
            Experienced RedwoodJS devs looking for their next role
          </p>
        </header>

        <div className="flex justify-end mt-4">
          <button type="button" className="button-sm">
            + Create Profile
          </button>
        </div>
        <div className="border border-orange-200 rounded-lg mt-2">
          <table className="w-full bg-white rounded-lg">
            <tbody>
              <tr className="hover:bg-orange-50 cursor-pointer">
                <td className="text-center py-2 px-8">
                  <img
                    src="/images/rob.jpg"
                    className="w-24 mx-auto rounded-full"
                  />
                  <div className="mt-1 text-sm flex items-center justify-center text-green-500 font-semibold">
                    <span className="icon md-16 mr-1">check_circle</span>
                    <span className="whitespace-nowrap">Available</span>
                  </div>
                </td>
                <td className="py-4 text-sm">
                  <strong className="font-semibold text-teal-600">
                    Sr. Developer
                  </strong>

                  <p>
                    Keytar 8-bit chartreuse, chicharrones locavore organic green
                    juice twee kitsch bespoke slow-carb Skateboard wolf meggings
                    thundercats put a bird on it raclette banh mi venmo before
                    they sold out. Helvetica cronut echo park crucifix trust
                    fund selvage...
                  </p>
                </td>
                <td className="py-4 px-8 text-sm">
                  <ul>
                    <li>Remote</li>
                    <li className="whitespace-nowrap">San Diego, CA</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-orange-200 hover:bg-orange-50 cursor-pointer">
                <td className="text-center py-2 px-8">
                  <img
                    src="/images/peter.gif"
                    className="w-24 mx-auto rounded-full"
                  />
                  <div className="mt-1 text-sm flex items-center justify-center text-green-500 font-semibold">
                    <span className="icon md-16 mr-1">check_circle</span>
                    <span className="whitespace-nowrap">Available</span>
                  </div>
                </td>
                <td className="py-4 text-sm">
                  <strong className="font-semibold text-teal-600">
                    Cat-Focused CEO & Developer
                  </strong>
                  <p>
                    Microdosing crucifix you probably haven't heard of them food
                    truck mustache, chambray authentic schlitz retro hoodie
                    Listicle pok pok etsy, sustainable hot chicken trust fund
                    franzen cloud bread crucifix meggings. Cray before they sold
                    out kinfolk live-edge...
                  </p>
                </td>
                <td className="py-4 px-8 text-sm">
                  <ul>
                    <li>Remote</li>
                    <li className="whitespace-nowrap">
                      Capetown, South Africa
                    </li>
                    <li className="whitespace-nowrap">Berlin, Germany</li>
                  </ul>
                </td>
              </tr>
              <tr className="">
                <td
                  colSpan={3}
                  className="text-center text-sm text-stone-500 hover:text-orange-700 p-4 border-t border-t-orange-200 hover:bg-orange-50 cursor-pointer border-l-transparent border-r-transparent hover:border-l-orange-300 hover:border-r-orange-300 transition duration-100"
                >
                  See more...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default JobsPage
