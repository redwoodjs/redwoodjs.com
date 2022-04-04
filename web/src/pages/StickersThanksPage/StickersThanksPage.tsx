import { MetaTags } from '@redwoodjs/web'

const StickersThanksPage = () => {
  return (
    <>
      <MetaTags title="StickersThanks" description="StickersThanks page" />

      <section className="mx-auto my-8 max-w-xl text-center">
        <div className="mx-auto max-w-lg">
          <img
            src="/images/stickers.png"
            alt="Redwood stickers"
            className="w-full"
          />
        </div>
        <h1 className="my-8 font-serif font-bold">We got your address!</h1>
        <div className="text-gray-700">
          <p className="mt-6 text-xl">
            The day may come when we ask <em>you</em> for a favor...
          </p>
          <p className="mt-2">And that day is today: star us on GitHub!</p>
          <a
            href="https://github.com/redwoodjs/redwood"
            className="mt-8 inline-block rounded bg-red-700 px-5 py-2 font-semibold text-white no-underline hover:text-white hover:underline"
          >
            Star on GitHub
          </a>
        </div>
      </section>
    </>
  )
}

export default StickersThanksPage

/* <style type="text/css">
  :root {
    --rotateStart: -90deg;
    --rotateEnd: 90deg
  }

  @keyframes falling {
    0% {
           top: -100px;
           transform: rotate(var(--rotateStart));
         }
    80% {
      opacity: 1
    }
    100%   {
           top: 800px;
           transform: rotate(var(--rotateEnd));
           opacity: 0
          }
  }
</style> */
