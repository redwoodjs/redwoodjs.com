import { Fragment } from 'react'
import { Transition, Popover } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/outline'
import { useTranslation } from 'react-i18next'
import { Languages } from 'src/i18n'

const LanguagePicker = () => {
  const { i18n } = useTranslation()

  return (
    <Popover className={'relative ml-3'}>
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
            <Popover.Panel className="w-18 absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
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
