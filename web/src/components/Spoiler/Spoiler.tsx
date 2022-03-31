import clsx from 'clsx'
import type { FC } from 'react'
import { Disclosure, Transition } from '@headlessui/react'

export interface SpoilerProps {
  title: string
}

const Spoiler: FC<SpoilerProps> = ({ children, title }) => {
  return (
    <Disclosure as="div" className="flex flex-col space-y-2">
      <Disclosure.Button className="flex flex-row items-center justify-between bg-redwood-100 bg-opacity-20 hover:bg-opacity-50 active:bg-opacity-70 border border-redwood-100 active:border-redwood-200 px-6 py-4 rounded-md font-semibold text-left text-sm transition duration-150 ease-out">
        {({ open }) => (
          <>
            <span className="text-stone-900">{title}</span>
            <span
              aria-hidden="true"
              className={clsx(
                'icon md-20 text-redwood-700 transition-transform duration-200 ease-out',
                open && 'rotate-90'
              )}
            >
              chevron_right
            </span>
          </>
        )}
      </Disclosure.Button>
      <Transition
        enter="transition-opacity duration-300 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Disclosure.Panel className="bg-white border border-stone-200 leading-relaxed p-6 rounded-md">
          {children}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  )
}

export default Spoiler
