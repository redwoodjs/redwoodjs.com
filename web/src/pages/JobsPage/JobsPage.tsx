import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JobsPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS Jobs"
        description="Want to get paid to write RedwoodJS?"
      />

      <section className="max-w-screen-md mx-auto">
        <header className="text-center">
          <h1 className="mt-12 text-6xl font-black tracking-tight">
            <span className="text-red-800">RedwoodJS</span>{' '}
            <span className="text-stone-900">Jobs</span>
          </h1>
          <p className="mt-1 text-stone-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="border border-red-200 rounded-lg mt-12">
          <table className="w-full bg-white rounded-lg">
            <tbody>
              <tr className="hover:bg-red-100 cursor-pointer">
                <td className="py-4 px-8">Snaplet</td>
                <td className="py-4 px-8">
                  <strong className="font-semibold text-red-800">
                    Sr. Developer
                  </strong>
                  <p>
                    Keytar 8-bit chartreuse, chicharrones locavore organic green
                    juice twee kitsch bespoke slow-carb...
                  </p>
                </td>
                <td className="py-4 px-8">Remote</td>
              </tr>
              <tr className="border-t border-red-200 hover:bg-red-100 cursor-pointer">
                <td className="py-4 px-8">Everfund</td>
                <td className="py-4 px-8">
                  <strong className="font-semibold text-red-800">
                    Jr. Developer
                  </strong>
                  <p>
                    Microdosing crucifix you probably haven't heard of them food
                    truck mustache, chambray authentic schlitz retro hoodie...
                  </p>
                </td>
                <td className="py-4 px-8">Remote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-screen-md mx-auto mt-24">
        <header className="text-center">
          <h1 className="mt-12 text-6xl font-black tracking-tight">
            <span className="text-red-800">RedwoodJS</span>{' '}
            <span className="">Developers</span>
          </h1>
          <p className="mt-1 text-gray-800">
            Experienced RedwoodJS devs looking for their next role
          </p>
        </header>

        <div className="border border-red-200 rounded-lg mt-12">
          <table className="w-full bg-white rounded-lg">
            <tbody>
              <tr className="hover:bg-red-100 cursor-pointer">
                <td className="py-4 px-8 whitespace-nowrap">Rob Cameron</td>
                <td className="py-4 px-8">
                  <strong className="font-semibold text-red-800">
                    Sr. Developer
                  </strong>
                  <p>
                    Keytar 8-bit chartreuse, chicharrones locavore organic green
                    juice twee kitsch bespoke slow-carb...
                  </p>
                </td>
                <td className="py-4 px-8">Remote</td>
              </tr>
              <tr className="border-t border-red-200 hover:bg-red-100 cursor-pointer">
                <td className="py-4 px-8">John Doe</td>
                <td className="py-4 px-8">
                  <strong className="font-semibold text-red-800">
                    Jr. Developer
                  </strong>
                  <p>
                    Microdosing crucifix you probably haven't heard of them food
                    truck mustache, chambray authentic schlitz retro hoodie...
                  </p>
                </td>
                <td className="py-4 px-8">Remote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default JobsPage
