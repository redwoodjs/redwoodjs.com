import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  SparklesIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  LogoutIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BeakerIcon,
  PhotographIcon,
  TranslateIcon,
} from '@heroicons/react/solid'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logOut, hasRole, currentUser } = useAuth()
  const navigation = [
    {
      name: 'Jobs',
      icon: BriefcaseIcon,
      href: routes.adminJobs(),
      current: true,
    },
    {
      name: 'Startups',
      icon: SparklesIcon,
      href: routes.adminStartups(),
    },
    {
      name: 'Showcases',
      icon: BeakerIcon,
      href: routes.showcases(),
    },
    {
      name: 'Authors',
      icon: BookOpenIcon,
      href: routes.authors(),
    },
    { name: 'Tags', icon: InboxIcon, href: routes.tags(), current: false },
    {
      name: 'Medias',
      icon: PhotographIcon,
      href: routes.medias(),
    },
    {
      name: 'Users',
      icon: UsersIcon,
      href: routes.users(),
      requiredRoles: 'admin',
    },
    {
      name: 'Localizations',
      icon: TranslateIcon,
      href: routes.showcaseLocalizations(),
      requiredRoles: ['editor', 'admin', 'translator'],
    },
  ]

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-neutral-900">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/images/logo-diecut-mark.svg"
                        alt="RedwoodJS Admin"
                      />
                    </div>
                    {hasRole(['editor', 'admin']) && (
                      <nav
                        className="mt-5 flex-1 space-y-1 bg-neutral-900 px-2"
                        aria-label="Sidebar"
                      >
                        {navigation.map((item) => {
                          if (
                            item?.requiredRoles &&
                            !hasRole(item.requiredRoles)
                          ) {
                            return null
                          }
                          return (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              activeClassName="bg-neutral-700 text-white"
                              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-neutral-300 no-underline hover:bg-neutral-700 hover:text-white"
                            >
                              <item.icon
                                className={
                                  'mr-3 h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-300'
                                }
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                            </NavLink>
                          )
                        })}
                      </nav>
                    )}
                  </div>

                  <div className="flex flex-shrink-0 justify-between bg-neutral-700 p-4 text-white">
                    <div className="flex items-center">
                      <p className="text-sm font-medium">{currentUser.email}</p>
                    </div>

                    <button onClick={() => logOut()} className="group block">
                      <LogoutIcon className="fill- h-4 w-4" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-neutral-900">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/images/logo-diecut-mark.svg"
                  alt="RedwoodJS Admin"
                />
              </div>
              {hasRole(['editor', 'admin']) && (
                <nav
                  className="mt-5 flex-1 space-y-1 bg-neutral-900 px-2"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) => {
                    if (item?.requiredRoles && !hasRole(item.requiredRoles)) {
                      return null
                    }
                    return (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        activeClassName="bg-neutral-700 text-white"
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-neutral-300 no-underline hover:bg-neutral-700 hover:text-white"
                      >
                        <item.icon
                          className="mr-3 h-6
                            w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-300"
                          aria-hidden="true"
                        />
                        <span className="flex-1">{item.name}</span>
                      </NavLink>
                    )
                  })}
                </nav>
              )}
            </div>
            <div className="flex flex-shrink-0 justify-between bg-neutral-700 p-4 text-white">
              <div className="flex items-center">
                <p className="font-mediu text-sm">{currentUser.email}</p>
              </div>

              <button onClick={() => logOut()} className="group block">
                <LogoutIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className={'flex flex-row'}>
      <Toaster />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 bg-neutral-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="mx-auto min-h-screen max-w-7xl flex-1 px-4 sm:px-6 md:px-8">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
