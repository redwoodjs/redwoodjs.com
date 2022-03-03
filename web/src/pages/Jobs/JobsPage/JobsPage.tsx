import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JobsPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS Jobs"
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
          <table className="w-full bg-white rounded-lg">
            <tbody>
              <tr
                onClick={() => navigate(routes.job({ id: 1 }))}
                className="hover:bg-orange-50 cursor-pointer transition duration-100"
              >
                <td className="py-4 px-8 rounded-tl-lg">
                  <img src="/images/snaplet_logo.svg" alt="Snaplet" />
                </td>
                <td className="py-4 text-sm">
                  <strong className="font-semibold text-teal-600">
                    Sr. Developer
                  </strong>
                  <p>
                    Keytar 8-bit chartreuse, chicharrones locavore organic green
                    juice twee kitsch bespoke slow-carb. Keytar 8-bit
                    chartreuse, chicharrones locavore organic green juice twee
                    kitsch bespoke slow-carb...
                  </p>
                </td>
                <td className="py-4 px-8 rounded-tr-lg text-sm">
                  <ul>
                    <li>Remote</li>
                    <li>Berlin, Germany</li>
                  </ul>
                </td>
              </tr>
              <tr
                onClick={() => navigate(routes.job({ id: 1 }))}
                className="border-t border-orange-100 hover:bg-orange-50 cursor-pointer transition duration-100"
              >
                <td className="py-4 px-8 w-48">
                  <svg
                    viewBox="0 0 2698.39 585.2"
                    className="text-teal-600 fill-current"
                  >
                    <path d="M342.87 585.2c-15.25 0-31.68-8.15-51.71-25.64-9.68-8.46-17.65-16.89-20.29-19.74C150.66 426.64 76.88 346.6 38.72 288 2.85 232.89 0 200.58 0 164.06c0-37 18.05-78.13 48.29-110.12C80.66 19.7 123.08 0 164.67 0h.14c124.29 0 200.77 144.46 204 150.61a324.3 324.3 0 0044.79 62.16c34.4 37.23 69.66 56.12 104.74 56.12h1A106 106 0 00593.5 238a103.07 103.07 0 0030.55-73.53A104.57 104.57 0 00519.61 60c-27.55 0-60.14 5.08-93 42.71a30 30 0 11-45.22-39.44C430.85 6.58 483.93 0 519.57 0 610.24 0 684 73.79 684 164.44a162.68 162.68 0 01-48.2 116 165.65 165.65 0 01-115.93 48.4h-1.59c-123.06 0-198.89-143.09-202.78-150.6a324.66 324.66 0 00-44.77-61.77C246.84 90.73 209 60 164.8 60h-.08C139.54 60 113 72.84 91.89 95.16 72.22 116 60 142.37 60 164.06c0 25 0 46.64 29 91.19 35.08 53.89 108.29 132.93 223.8 241.63.6.56 1.17 1.15 1.72 1.76a183.91 183.91 0 0025.4 23.18c10.12-8.28 29.55-25.8 61.73-57.93 29.93-29.88 63.73-65.3 82.2-86.13a30 30 0 0144.9 39.8c-18 20.28-55.35 59.78-92 96-19.27 19-35.44 34.35-48.06 45.47-23.03 20.3-33.31 26.17-45.82 26.17z"></path>
                    <path d="M2647.26 153h-10.77v-4h25.94v4h-10.77v23.72h-4.4zm20-4h4.4l11.07 22.17L2694 149h4.4v27.72h-4.4v-19.3l-9.26 19.25h-3.64l-9.4-19.25v19.25h-4.4zM1038.53 356.2H865c8.48 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.63 38.26-93.67 38.26-63.78 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.9.04 125.81 38.72 112.87 133.98zm-174.4-40.77h121.32c-3.57-30.78-31.22-46.17-59.32-46.17-27.66 0-54.42 14.98-62 46.17zM1037.06 226.42h61.11l64.23 150.16 63.78-150.16h61.56l-97.69 216.29h-55.75zM1514.1 356.2h-173.51c8.47 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.64 38.26-93.67 38.26-63.79 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.88.04 125.75 38.72 112.85 133.98zm-174.41-40.77H1461c-3.57-30.78-31.22-46.17-59.33-46.17-27.67 0-54.39 14.98-61.98 46.17zM1691.49 223.92v53.25a92.5 92.5 0 00-15.17-1.25c-45 0-73.15 29.11-73.15 72.37v94.42h-59.77V226.42h59.77v56.15c8-33.27 30.78-60.31 72.71-60.31a66.9 66.9 0 0115.61 1.66zM1794.56 218.52v7.9h59.77v44.51h-59.77v171.78h-59.77V270.93h-29.44v-44.51h29.44v-14.14c0-63.65 47.28-74 78.06-74 12 0 28.55 1.24 41.48 8.32v43.67c-11.15-5-21.85-4.58-25.87-4.58-22.75-.04-33.9 11.61-33.9 32.83zM2096 226.42v216.29h-59.77v-29.53c-12.93 19.14-36.57 33.69-71.37 33.69-47.28 0-87.42-27.45-87.42-93.17V226.42h59.77v118.13c0 31.61 18.29 52.41 49.51 52.41 30.33 0 49.51-20.8 49.51-52.41V226.42zM2356.25 315.43v127.28h-59.77V324.58c0-31.61-18.28-52.41-49.51-52.41-30.77 0-49.51 20.8-49.51 52.41v118.13h-59.77V226.42h59.77V256c12.94-19.13 36.13-33.69 70.92-33.69 47.73-.05 87.87 27.4 87.87 93.12zM2618.75 147.39v295.32H2559V413.6h-1.34c-5.8 12.06-32.56 33.27-74 33.27-54 0-111.52-37.43-111.52-112.3s57.54-112.31 111.52-112.31c41.48 0 68.24 21.21 74 33.27h.89V147.39zm-58.43 187.18c0-40.77-31.23-62.4-64.68-62.4s-64.64 22.05-64.64 62.4 31.19 62.43 64.64 62.43 64.68-21.67 64.68-62.43z"></path>
                  </svg>
                </td>
                <td className="py-4 text-sm">
                  <strong className="font-semibold text-teal-600">
                    Jr. Developer
                  </strong>
                  <p>
                    Microdosing crucifix you probably haven't heard of them food
                    truck mustache, chambray authentic schlitz retro hoodie
                    Keytar 8-bit chartreuse, chicharrones locavore organic green
                    juice twee kitsch bespoke slow-carb...
                  </p>
                </td>
                <td className="py-4 px-8 text-sm whitespace-nowrap">
                  <ul>
                    <li>Worcestershire, UK</li>
                  </ul>
                </td>
              </tr>
              <tr className="">
                <td
                  colSpan={3}
                  className="text-center text-sm text-stone-500 hover:text-orange-700 p-4 border-t border-t-orange-200 hover:bg-orange-50 cursor-pointer rounded-b-lg transition duration-100"
                >
                  See more...
                </td>
              </tr>
            </tbody>
          </table>
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
