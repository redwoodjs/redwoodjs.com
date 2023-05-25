import { Fragment, useState } from 'react'
import { Toaster } from '@redwoodjs/web/toast'
import { XIcon, SpeakerphoneIcon } from '@heroicons/react/solid'

import Navbar from './Navigation/Navbar'
import Footer from 'src/components/Footer'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showcaseBannerVisible, setShowcaseBannerVisible] = useState(true)
  return (
    <>
      <Toaster toastOptions={{ className: 'mt-16' }} />
      <div
        className={`relative bg-gradient-to-l from-teal-700 to-teal-500 transition-all duration-500 ease-out ${
          showcaseBannerVisible ? 'max-h-32 md:max-h-16' : 'max-h-0'
        }`}
      >
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="sm:px-16 sm:text-center">
            <p className="font-medium text-white">
              <div className="mx-auto flex flex-col items-center justify-center sm:flex-row">
                <div className="flex items-center text-center">
                  <span className="mr-2 rounded bg-teal-800 p-2">
                    <SpeakerphoneIcon
                      className="h-3 w-3 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="md:hidden">
                    RedwoodJS Showcase 2023 Event
                  </span>
                  <span className="hidden md:inline">
                    RedwoodJS Showcase 2023 Event
                  </span>
                </div>
                <span className="ml-2 block">
                  <a
                    target={'_blank'}
                    href="https://showcase.redwoodjs.com"
                    className="font-bold text-white underline hover:text-teal-900 hover:underline"
                    rel="noreferrer"
                  >
                    Details and Free Registration{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
            <button
              type="button"
              className="flex rounded-md p-2 hover:bg-rw-500 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setShowcaseBannerVisible(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/*
      <div className="bg-rw-500">
        <div className="mx-auto max-w-7xl py-2 px-1 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-full flex-1 items-center text-xs">
              <span className="bg-rw-800 flex rounded p-1">
                <SpeakerphoneIcon
                  className="h-3 w-3 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">
                  RedwoodJS Showcase 2023 Product and Startup Demo Event
                </span>
                <span className="hidden md:inline">
                  RedwoodJS Showcase 2023 Event
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://showcase.redwoodjs.com"
                className="text-rw-500 hover:bg-rw-50 flex items-center justify-center rounded border border-transparent bg-white px-2 py-1 text-xs font-medium no-underline shadow-sm"
              >
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <Navbar />

      <main className="w-full flex-1">{children}</main>

      <Footer />
    </>
  )
}

export default MainLayout
