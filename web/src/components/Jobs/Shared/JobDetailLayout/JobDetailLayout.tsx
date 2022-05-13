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
      <div className="job mx-auto max-w-screen-lg">
        <header className="mt-36">
          <h1 className="relative px-16 text-center font-serif text-5xl font-normal tracking-normal">
            {back !== false && (
              <div className="left-0 top-1/2 -translate-y-1/2 sm:absolute">
                <button
                  type="button"
                  onClick={() => navigate(routes.jobs())}
                  className="h-16 w-16 rounded-full bg-gray-200 font-mono text-6xl font-normal transition duration-150 hover:bg-gray-300"
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
              className="text-gray-500"
            >
              {postedLabel}{' '}
              {formatDistance(new Date(), new Date(postedDateTime))} ago
            </time>
          </div>
        </header>

        <div className="mt-19 mb-12 max-w-screen-lg rounded-lg bg-white">
          {children}
        </div>
      </div>

      <div className="mb-12 flex justify-center">
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
