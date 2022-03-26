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
              className={`text-white group rounded-md inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{item.name}</span>
              <span
                className={`${
                  open ? '' : 'text-opacity-70'
                } mt-1 h-5 w-5 transition ease-in-out duration-150`}
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
              <Popover.Panel className="absolute z-10 w-96 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
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
      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-stone-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 no-underline"
    >
      <div className="flex items-center justify-center flex-shrink-0 p-2 w-10 h-10 bg-orange-100 rounded-lg sm:h-12 sm:w-12">
        <item.icon />
      </div>
      <div className="ml-4">
        <p className="text-sm font-semibold text-stone-900">{item.title}</p>
        <p className="text-xs text-stone-500 font-normal">{item.description}</p>
      </div>
    </Anchor>
  )
}

const NavLinksDesktop = ({ navigation }) => {
  return navigation.map((item) => <Item key={item.name} item={item} />)
}

export default NavLinksDesktop
