import ReactPlayer from 'react-player/youtube'

const VideoTutorialSection = () => {
  return (
    <section className="py-12 bg-neutral-900 md:py-32">
      <div className="mx-auto lg:max-w-6xl">
        <h3 className="px-4 space-y-12 font-serif text-xl text-white sm:text-center sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
          <div>
            Enough chit-chat.{' '}
            <span className="font-bold">You prefer videos?</span>
          </div>
          <div>
            Then start your Redwood journey with a guided tour of our
            comprehensive tutorial!
          </div>
        </h3>
        <div className="relative px-6 mx-auto mt-12 h-96 lg:h-[550px] md:mt-32">
          {/* <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/HJOzmp8oCIQ"
            title="RedwoodJS Video Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer url="https://www.youtube.com/embed/HJOzmp8oCIQ"           className='react-player' width="100%" height="100%"/>
        </div>
      </div>
    </section>
  )
}

export default VideoTutorialSection
