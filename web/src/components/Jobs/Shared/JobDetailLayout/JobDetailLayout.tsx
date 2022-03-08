import { format, formatDistance } from 'date-fns'
import { navigate, routes } from '@redwoodjs/router'

const JobDetailLayout = ({
  title,
  postedDateTime,
  postedLabel,
  buttonLink,
  buttonLabel,
  back,
  children,
}) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto job">
        <header className="mt-36">
          <h1 className="relative text-5xl px-16 font-black tracking-normal text-center">
            {back !== false && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => navigate(routes.jobs())}
                  className="bg-orange-100 hover:bg-orange-200 w-16 h-16 rounded-full text-teal-600 hover:text-teal-800 text-6xl font-mono font-normal transition duration-150"
                  title="Back to all jobs"
                >
                  &larr;
                </button>
              </div>
            )}
            {title}
          </h1>
          <div className="mt-2 text-center">
            {' '}
            <time
              dateTime={format(
                new Date(postedDateTime),
                "yyyy-MM-dd'T'HH:mm:ss'Z'"
              )}
              className="text-sm text-stone-500"
            >
              {postedLabel}{' '}
              {formatDistance(new Date(), new Date(postedDateTime))} ago
            </time>
          </div>
        </header>

        <div className="max-w-screen-lg mt-19 bg-white rounded-lg border border-red-200 mb-12">
          {children}
        </div>
      </div>

      <div className="flex justify-center mb-12">
        {' '}
        <a
          href={buttonLink}
          target="_blank"
          rel="nofollow noreferrer"
          className="button"
        >
          {buttonLabel}
        </a>
      </div>
    </>
  )
}

export default JobDetailLayout
