import { Fragment } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { Anchor } from './Navbar'

const Item = ({ item }) => {
  if (item?.navigation) {
    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`group inline-flex items-center rounded-md text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{item.name}</span>
              <span
                className={`${
                  open ? '' : 'text-opacity-70'
                } mt-1 h-5 w-5 transition duration-150 ease-in-out`}
              >
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-96 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-rows-2">
                    {item.navigation.map((item) => (
                      <SubItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    )
  }

  return (
    <Anchor
      route={item.route}
      link={item.link}
      className="text-white no-underline"
    >
      {item.name}
    </Anchor>
  )
}

const SubItem = ({ item }) => {
  return (
    <Anchor
      route={item.route}
      link={item.link}
      className="-m-3 flex items-center rounded-lg p-2 no-underline transition duration-150 ease-in-out hover:bg-stone-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 p-2 sm:h-12 sm:w-12">
        <item.icon />
      </div>
      <div className="ml-4">
        <p className="text-sm font-semibold text-stone-900">{item.name}</p>
        <p className="text-xs font-normal text-stone-500">{item.description}</p>
      </div>
    </Anchor>
  )
}

const NavLinksDesktop = ({ navigation }) => {
  return navigation.map((item) => <Item key={item.name} item={item} />)
}

export default NavLinksDesktop
