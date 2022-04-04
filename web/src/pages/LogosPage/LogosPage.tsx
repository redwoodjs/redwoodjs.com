import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LogosPage = () => {
  return (
    <>
      <MetaTags title="Logos" description="Logos page" />

      <div className="mt-24">
        <section className="max-w-4xl mx-auto text-center pb-16">
          <h1 className="font-serif font-semibold leading-10">
            Redwood Logos and Usage
          </h1>
          <p className="sm:text-lg text-gray-500 mt-4">
            Here are official assets for linking to the project.
          </p>

          <div className="sm:flex items-stretch mt-12">
            <div className="flex flex-col flex-1 sm:mr-2">
              <div className="flex-1 p-6 border border-gray-300 rounded-t-lg">
                <img
                  className="h-full w-48 sm:w-auto mx-auto"
                  src="/images/type.svg"
                  alt="RedwoodJS logo"
                />
              </div>
              <h4 className="border border-gray-300 border-t-0 rounded-b-lg py-3 font-semibold text-gray-700 text-sm">
                <a
                  className="text-red-700"
                  href="/downloads/redwoodjs-logo.zip"
                >
                  Download Logo
                </a>
              </h4>
            </div>
            <div className="flex flex-col flex-1 sm:mx-2 mt-4 sm:mt-0">
              <div className="h-full p-6 border border-gray-300 rounded-t-lg">
                <img
                  className="h-full w-24 sm:w-auto mx-auto"
                  src="/images/diecut.svg"
                  alt="RedwoodJS diecut mark"
                />
              </div>
              <h4 className="border border-gray-300 border-t-0 rounded-b-lg py-3 font-semibold text-gray-700 text-sm">
                <a
                  className="text-red-700"
                  href="/downloads/redwoodjs-diecut_mark.zip"
                >
                  Download Diecut Mark
                </a>
              </h4>
            </div>
            <div className="flex flex-col flex-1 sm:ml-2 mt-4 sm:mt-0">
              <div className="p-6 sm:p-12 border border-gray-300 rounded-t-lg">
                <img
                  className="h-full w-24 sm:w-auto mx-auto"
                  src="/images/logo.svg"
                  alt="RedwoodJS mark"
                />
              </div>
              <h4 className="border border-gray-300 border-t-0 rounded-b-lg py-3 font-semibold text-gray-700 text-sm">
                <a
                  className="text-red-700"
                  href="/downloads/redwoodjs-mark.zip"
                >
                  Download Mark
                </a>
              </h4>
            </div>
          </div>

          <div className="sm:flex mt-12">
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg font-semibold">Okay</h3>
              <ul className="text-sm list-disc mt-4 ml-5 mr-8">
                <li className="mt-2 leading-5">
                  Use the Cone or RedwoodJS logo to link to RedwoodJS
                </li>
                <li className="mt-2 leading-5">
                  Use the Cone or RedwoodJS logo in a blog post or news article
                  about Redwood
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 text-left mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold">Not Okay</h3>
              <ul className="text-sm list-disc mt-4 ml-5 mr-8">
                <li className="mt-2 leading-5">
                  Use the Cone or RedwoodJS logo for your application’s icon
                </li>
                <li className="mt-2 leading-5">
                  Create a modified version of the Cone or RedwoodJS logo
                </li>
                <li className="mt-2 leading-5">
                  Integrate the Cone or RedwoodJS logo into your logo
                </li>
                <li className="mt-2 leading-5">
                  Change the colors, dimensions or add your own text/images
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:flex mt-12">
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="text-sm list-disc mt-4 ml-5 mr-8">
                <li className="mt-2 leading-5">
                  If you want to use artwork not included here
                </li>
                <li className="mt-2 leading-5">
                  If you want to use these images in a video/mainstream media
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 text-left mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold">
                Naming Projects and Products
              </h3>
              <p className="text-sm mt-4">
                Please do not claim endorsement of your product or service by
                RedwoodJS without permission.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LogosPage
