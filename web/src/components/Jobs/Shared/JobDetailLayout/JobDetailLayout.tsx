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
          <h1 className="relative font-serif font-normal text-5xl px-16 tracking-normal text-center">
            {back !== false && (
              <div className="sm:absolute left-0 top-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => navigate(routes.jobs())}
                  className="bg-gray-200 hover:bg-gray-300 w-16 h-16 rounded-full text-6xl font-mono font-normal transition duration-150"
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

        <div className="max-w-screen-lg mt-19 bg-white rounded-lg mb-12">
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
