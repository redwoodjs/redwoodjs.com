import clsx from 'clsx'

import { resizeFilestackImage } from 'src/lib/utility'

// --

export type MediaType = 'video' | 'image'

export interface MediaState {
  src: string
  type: MediaType
}

export interface StartupDemoMediaProps extends MediaState {
  className?: string
  filestack?: boolean
}

// --

const StartupDemoMedia = ({
  className,
  filestack,
  src,
  type,
}: StartupDemoMediaProps) => {
  const classes = clsx('aspect-video h-full w-full', className)

  if (type === 'video')
    return (
      <iframe
        title="Startup demonstration video"
        className={classes}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )

  if (type === 'image' && filestack)
    return (
      <img
        alt="Startup demonstration"
        className={classes}
        src={resizeFilestackImage(src, {
          fit: false,
          height: 100,
          width: 100,
        })}
      />
    )

  if (type === 'image')
    return <img alt="Startup demonstration" className={classes} src={src} />
}

export default StartupDemoMedia
