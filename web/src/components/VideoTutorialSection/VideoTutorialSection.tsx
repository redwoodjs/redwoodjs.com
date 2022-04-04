import { useLayoutEffect, useState } from 'react'

const VideoTutorialSection = () => {
  const [showPlayer, setShowPlayer] = useState(false)
  useLayoutEffect(() => {
    setShowPlayer(true)
  }, [])

  return (
    <section className="bg-neutral-900 py-12 md:py-32">
      <div className="mx-auto lg:max-w-6xl">
        <h3 className="space-y-12 px-4 font-serif text-xl text-white sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
          <div>
            Enough chit-chat.{' '}
            <span className="font-bold">You prefer videos?</span>
          </div>
          <div>
            Then start your Redwood journey with a guided tour of our
            comprehensive tutorial!
          </div>
        </h3>
        <div className="relative mx-auto mt-12 px-4 md:mt-32">
          {showPlayer && (
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/HJOzmp8oCIQ"
              title="RedwoodJS Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoTutorialSection
