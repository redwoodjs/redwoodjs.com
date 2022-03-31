import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import StartupDemoMedia from 'src/components/Startup/StartupDemoMedia'
import type { MediaState } from 'src/components/Startup/StartupDemoMedia'

// --

export interface StartupDemoMediaModalProps {
  initial?: number
  media: MediaState[]
  onClose: (state?: boolean) => void
  open: boolean
}

// --

const StartupDemoMediaModal = ({
  initial,
  media,
  onClose,
  open,
}: StartupDemoMediaModalProps) => {
  //
  const [selected, setSelected] = useState(initial)

  // --

  return (
    <Transition as={Fragment} appear show={open}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={onClose}
        open={open}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-10 bg-neutral-700 dark:bg-neutral-900 bg-opacity-70 dark:bg-opacity-70" />
        </Transition.Child>
        <div className="flex items-start justify-center relative z-20 h-full w-full p-6 pointer-events-none sm:mx-auto">
          <div className="flex flex-col pointer-events-auto w-full max-w-5xl">
            <div className="flex flex-row justify-between mb-2 p-1 rounded w-full bg-redwood-600">
              <div className="flex flex-row space-x-6">
                <button
                  aria-label="Previous Demo"
                  className="hover:bg-redwood-700 p-1 leading-[1] rounded text-redwood-200 hover:text-redwood-50 hover:text-opacity-90"
                  onClick={() => selected !== 0 && setSelected(selected - 1)}
                >
                  <span aria-hidden="true" className="icon md-22">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next Demo"
                  className="hover:bg-redwood-700 p-1 leading-[1] rounded text-redwood-200 hover:text-redwood-50 hover:text-opacity-90"
                  onClick={() =>
                    selected !== media.length - 1 && setSelected(selected + 1)
                  }
                >
                  <span aria-hidden="true" className="icon md-22">
                    chevron_right
                  </span>
                </button>
              </div>
              <button
                aria-label="Close Preview"
                className="hover:bg-redwood-700 p-1 leading-[1] rounded text-redwood-200 hover:text-redwood-50 hover:text-opacity-90"
                onClick={() => onClose()}
              >
                <span aria-hidden="true" className="icon md-22">
                  close
                </span>
              </button>
            </div>
            <StartupDemoMedia
              aspect={false}
              className={clsx(
                media[selected].type === 'video' && 'aspect-video'
              )}
              src={media[selected].src}
              type={media[selected].type}
              videoRenderer="embed"
            />
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default StartupDemoMediaModal
