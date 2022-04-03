import { Fragment } from 'react'
import { Toaster } from '@redwoodjs/web/toast'
import { XIcon, SpeakerphoneIcon } from '@heroicons/react/solid'

import Navbar from './Navigation/Navbar'
import Footer from 'src/components/Footer'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'mt-16' }} />

      <div className="bg-rw-500">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-full flex-1 items-center">
              <span className="bg-rw-800 flex rounded-lg p-2">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">
                  Redwood v1 Launch Week is here!!!.
                </span>
                <span className="hidden md:inline">
                  Redwood v1 Launch Week is here!!!.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://v1launchweek.redwoodjs.com"
                className="text-rw-500 hover:bg-rw-50 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium no-underline shadow-sm"
              >
                Attend Events
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      <main className="w-full flex-1">{children}</main>

      <Footer />
    </>
  )
}

export default MainLayout
