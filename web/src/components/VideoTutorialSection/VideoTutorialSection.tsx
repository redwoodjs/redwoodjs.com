import { useState } from 'react'
import videoThumbnail from './thumbnail.jpg'
import { PlayIcon } from '@heroicons/react/solid'
import { Trans, useTranslation } from 'react-i18next'

const VideoTutorialSection = () => {
  const { t } = useTranslation()

  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="bg-neutral-900 py-12 md:py-32">
      <div className="mx-auto lg:max-w-6xl">
        <h3 className="space-y-12 px-4 font-serif text-xl text-white sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
          <Trans
            i18nKey={'HomePage.VideoTutorialSection.question'}
            components={{
              bold: <span className="font-bold" />,
              div: <div />,
            }}
          >
            <div>
              Enough chit-chat.{' '}
              <span className="font-bold">You prefer videos?</span>
            </div>
          </Trans>
          <div>{t('HomePage.VideoTutorialSection.answer')}</div>
        </h3>
        <div className="relative mx-auto mt-12 px-4">
          {showVideo ? (
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/HJOzmp8oCIQ?autoplay=1"
              title="RedwoodJS Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="background-green-300 flex justify-center">
              <button className="group" onClick={() => setShowVideo(true)}>
                <PlayIcon className="absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 transform text-rw-500 text-opacity-95 transition-transform group-hover:scale-125" />
                <img
                  src={videoThumbnail}
                  alt="Play Tutorial Video"
                  className="h-full w-auto object-cover object-center md:h-[480px] lg:h-[620px]"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoTutorialSection
