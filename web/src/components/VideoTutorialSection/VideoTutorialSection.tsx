import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const VideoTutorialSection = () => {
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
        <div className="relative mx-auto mt-12 px-4">
          <LiteYouTubeEmbed
            id="HJOzmp8oCIQ"
            title="Play RedwoodJS Video Tutorial"
            poster="maxresdefault"
            noCookie
          ></LiteYouTubeEmbed>
        </div>
      </div>
    </section>
  )
}

export default VideoTutorialSection
