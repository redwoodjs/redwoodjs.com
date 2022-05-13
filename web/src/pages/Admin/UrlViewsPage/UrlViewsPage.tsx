import { MetaTags } from '@redwoodjs/web'

import UrlViewsCell from 'src/components/UrlViewsCell'

const UrlViewsPage = () => {
  return (
    <>
      <MetaTags title="Url Views" />
      <div className="flex w-full flex-col space-y-8 pr-8 pt-8">
        <header className="flex flex-row items-center">
          <div className="flex flex-grow flex-col space-y-2">
            <h1 className="text-3xl font-bold">Url Views</h1>
            <p className="text-stone-600">
              How often urls have been viewed in past 24 hours.
            </p>
          </div>
        </header>
        <UrlViewsCell />
      </div>
    </>
  )
}

export default UrlViewsPage
