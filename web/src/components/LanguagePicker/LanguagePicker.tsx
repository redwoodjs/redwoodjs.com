import { Fragment } from 'react'
import { Transition, Popover } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/outline'
import i18n, { Languages } from 'src/i18n'

const LanguagePicker = () => {
  return (
    <Popover className={'relative'}>
      {() => (
        <>
          <Popover.Button className={'flex'}>
            <GlobeAltIcon className="h-7 w-7 text-white transition duration-150" />
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
            <Popover.Panel className="absolute z-10 w-18 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-rows-2">
                  {Object.values(Languages).map((ln) => (
                    <button
                      key={`Language switch to ${ln}`}
                      type={'button'}
                      onClick={() => {
                        i18n.changeLanguage(ln)
                      }}
                    >
                      {ln}
                    </button>
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

export default LanguagePicker
