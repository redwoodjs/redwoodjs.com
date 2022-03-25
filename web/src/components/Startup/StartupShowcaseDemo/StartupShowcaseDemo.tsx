import { useMemo, useRef, useState } from 'react'

import StartupDemoMedia from 'src/components/Startup/StartupDemoMedia'
import type { MediaState } from 'src/components/Startup/StartupDemoMedia'

import type { StartupShowcaseQuery } from 'types/graphql'

// --

export type StartupShowcaseDemoProps = Pick<
  StartupShowcaseQuery['startup'],
  'images' | 'videos'
>

// --

const YTVideo = (str: string) => `https://www.youtube.com/embed/${str}`
const YTThumbnail = (str: string) =>
  `https://img.youtube.com/vi/${str}/mqdefault.jpg`

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

  const [selected, setSelected] = useState(media[0])

  // --

  const thumbnailRef = useRef<HTMLUListElement>()

  // --

  return (
    <section className="p-4 space-y-4 lg:max-w-[600px] h-fit border border-stone-200 rounded-md">
      <StartupDemoMedia
        src={selected.type === 'image' ? selected.src : YTVideo(selected.src)}
        type={selected.type}
      />
      <div className="relative z-0">
        <div className="absolute flex items-center justify-between px-3 h-full w-full pointer-events-none">
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
                onClick={() => setSelected(media)}
              >
                <StartupDemoMedia
                  className="min-w-[176px]"
                  src={
                    media.type === 'image' ? media.src : YTThumbnail(media.src)
                  }
                  type="image"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StartupShowcaseDemo
