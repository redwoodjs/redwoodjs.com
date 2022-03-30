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
        <div className="flex items-center justify-center relative z-20 h-full w-full p-6 pointer-events-none sm:mx-auto">
          <button
            aria-label="Close Preview"
            className="absolute right-8 top-8 button p-1 leading-[0] rounded-full bg-opacity-50 pointer-events-auto"
            onClick={() => onClose()}
          >
            <span className="icon md-28">close</span>
          </button>
          <div
            className={clsx(
              'absolute items-center justify-between px-10 h-full w-full max-w-7xl pointer-events-none',
              media.length === 1 ? 'hidden' : 'flex'
            )}
          >
            <button
              aria-label="Next preview"
              className="button p-1 leading-[0] rounded-full bg-opacity-75 pointer-events-auto"
              onClick={() => selected !== 0 && setSelected(selected - 1)}
            >
              <span className="icon md-28">chevron_left</span>
            </button>
            <button
              aria-label="Previous preview"
              className="button p-1 leading-[0] rounded-full bg-opacity-75 pointer-events-auto"
              onClick={() =>
                selected !== media.length - 1 && setSelected(selected + 1)
              }
            >
              <span className="icon md-28">chevron_right</span>
            </button>
          </div>
          <StartupDemoMedia
            aspect={false}
            className={clsx(
              media[selected].type === 'video' && 'aspect-video',
              'pointer-events-auto w-full max-w-5xl'
            )}
            src={media[selected].src}
            type={media[selected].type}
            videoRenderer="embed"
          />
        </div>
      </Dialog>
    </Transition>
  )
}

export default StartupDemoMediaModal
