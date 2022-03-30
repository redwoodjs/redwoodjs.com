import clsx from 'clsx'
import { useMemo, useRef, useState } from 'react'

import StartupDemoMedia from 'src/components/Startup/StartupDemoMedia'
import type { MediaState } from 'src/components/Startup/StartupDemoMedia'
import StartupDemoMediaModal from 'src/components/Startup/StartupDemoMediaModal'

import type { StartupShowcaseQuery } from 'types/graphql'

// --

export type StartupShowcaseDemoProps = Pick<
  StartupShowcaseQuery['startup'],
  'images' | 'videos'
>

// --

const StartupShowcaseDemo = ({ images, videos }: StartupShowcaseDemoProps) => {
  //
  const media = useMemo(
    () =>
      [
        ...videos.map((src) => ({ type: 'video', src })),
        ...images.map((src) => ({ type: 'image', src })),
      ] as MediaState[],
    [images, videos]
  )

  // --

  const [selected, setSelected] = useState(0)

  // --

  const [preview, setPreview] = useState<number>()

  // --

  const thumbnailRef = useRef<HTMLUListElement>()

  // --

  return (
    <>
      {typeof preview === 'number' && (
        <StartupDemoMediaModal
          initial={preview}
          media={media}
          onClose={() => setPreview(undefined)}
          open={typeof preview === 'number'}
        />
      )}
      <section className="p-4 space-y-4 lg:max-w-[600px] w-full h-fit border border-stone-200 rounded-md">
        <button
          className="w-full h-full"
          disabled={media[selected].type !== 'image'}
          onClick={() => setPreview(selected)}
        >
          <StartupDemoMedia
            src={media[selected].src}
            type={media[selected].type}
            videoRenderer="embed"
          />
        </button>
        <div className="relative z-0">
          <div
            className={clsx(
              'absolute items-center justify-between px-3 h-full w-full pointer-events-none',
              thumbnailRef.current?.scrollWidth >
                thumbnailRef.current?.clientWidth
                ? 'flex'
                : 'hidden'
            )}
          >
            <button
              className="button p-1 leading-[0] rounded-full bg-opacity-75 pointer-events-auto"
              onClick={() =>
                thumbnailRef.current.scroll({
                  behavior: 'smooth',
                  left: thumbnailRef.current.scrollLeft - 192,
                })
              }
            >
              <span className="icon md-28">chevron_left</span>
            </button>
            <button
              className="button p-1 leading-[0] rounded-full bg-opacity-75 pointer-events-auto"
              onClick={() =>
                thumbnailRef.current.scroll({
                  behavior: 'smooth',
                  left: thumbnailRef.current.scrollLeft + 192,
                })
              }
            >
              <span className="icon md-28">chevron_right</span>
            </button>
          </div>
          <ul
            className="flex flex-row space-x-4 flex-nowrap overflow-x-hidden"
            ref={thumbnailRef}
          >
            {media.map((media, idx) => (
              <li key={idx}>
                <button
                  className="cursor-pointer"
                  onClick={() => setSelected(idx)}
                >
                  <StartupDemoMedia
                    className="max-w-[176px] min-w-[176px]"
                    src={media.src}
                    type={media.type}
                    videoRenderer="thumbnail"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default StartupShowcaseDemo
