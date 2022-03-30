import clsx from 'clsx'

// --

export type MediaType = 'video' | 'image'

export interface MediaState {
  src: string
  type: MediaType
}

export interface StartupDemoMediaProps extends MediaState {
  aspect?: boolean
  className?: string
  videoRenderer: 'embed' | 'thumbnail'
}

// --

const RenderEmbed = (str: string) => `https://www.youtube.com/embed/${str}`
const RenderThumbnail = (str: string) =>
  `https://img.youtube.com/vi/${str}/mqdefault.jpg`

// --

const StartupDemoMedia = ({
  aspect = true,
  className,
  src,
  type,
  videoRenderer,
}: StartupDemoMediaProps) => {
  const classes = clsx(aspect && 'aspect-video h-full w-full', className)

  if (type === 'video' && videoRenderer === 'embed')
    return (
      <iframe
        title="Startup demonstration video"
        className={classes}
        src={RenderEmbed(src)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )

  if (type === 'video' && videoRenderer === 'thumbnail')
    return (
      <img
        alt="Startup demonstration"
        className={classes}
        src={RenderThumbnail(src)}
      />
    )

  if (type === 'image')
    return <img alt="Startup demonstration" className={classes} src={src} />
}

export default StartupDemoMedia
