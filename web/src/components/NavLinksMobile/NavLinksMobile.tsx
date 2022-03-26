import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Anchor } from '../MainLayoutNavbar'

const Item = ({ item }) => {
  if (item?.navigation) {
    return (
      <>
        <div className="text-white hover:text-white flex items-center px-3 py-2 rounded-md text-base font-medium">
          {item.name}
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </div>
        <ul className="ml-4">
          {item.navigation.map((subItem) => (
            <li key={subItem.name}>
              <SubItem item={subItem} />
            </li>
          ))}
        </ul>
      </>
    )
  }
  return (
    <Disclosure.Button
      key={item.name}
      as={Anchor}
      link={item.link}
      route={item.route}
      className={
        'text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline'
      }
    >
      {item.name}
    </Disclosure.Button>
  )
}

const SubItem = ({ item }) => (
  <Disclosure.Button
    as={Anchor}
    link={item.link}
    route={item.route}
    className={
      'text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline'
    }
  >
    {item.name}
  </Disclosure.Button>
)

const NavLinksMobile = ({ navigation }) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    </Disclosure.Panel>
  )
}

export default NavLinksMobile
