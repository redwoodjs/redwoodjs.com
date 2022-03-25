import clsx from 'clsx'

// --

export type MediaType = 'video' | 'image'

export interface MediaState {
  src: string
  type: MediaType
}

export interface StartupDemoMediaProps extends MediaState {
  className?: string
}

// --

const StartupDemoMedia = ({ className, src, type }: StartupDemoMediaProps) => {
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

  if (type === 'image')
    return <img alt="Startup demonstration" className={classes} src={src} />
}

export default StartupDemoMedia
