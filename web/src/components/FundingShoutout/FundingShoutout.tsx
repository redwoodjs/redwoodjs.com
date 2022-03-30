import SnapletLogoWhite from 'web/public/images/snaplet_logo_white.svg'
import EverfundLogo from 'web/public/images/everfund_logo.svg'
import NousLogo from 'web/public/images/nous_logo.svg'

const FundingShoutout = () => {
  return (
    <>
      <p className="text-center font-serif text-xl md:text-4xl">
        If you join us, you’ll be in good company.
      </p>
      <section className="bg-neutral-900 py-12 px-4 text-white">
        <div className="space-y-4 text-center md:flex md:items-center md:justify-center md:space-y-0">
          <div className="mr-4 text-xl font-bold md:text-right md:text-3xl lg:text-5xl">
            Startups using Redwood <br />
            have raised over
          </div>
          <div className="text-6xl font-bold md:text-8xl">$19m</div>
        </div>
        <div
          className="mx-auto mt-6 grid grid-cols-1 gap-0.5  overflow-hidden rounded-xl md:grid-cols-3 lg:mt-8 lg:max-w-6xl
        "
        >
          <div className="col-span-1 flex justify-center bg-neutral-800 py-4 px-8">
            <EverfundLogo className="w-48 fill-white" />
          </div>
          <div className="col-span-1 flex justify-center bg-neutral-800 py-4 px-8">
            <SnapletLogoWhite className="w-48 fill-white" />
          </div>
          <div className="col-span-1 flex justify-center bg-neutral-800 py-4 px-8">
            <NousLogo className="w-48 fill-white" />
          </div>
        </div>
      </section>
    </>
  )
}

export default FundingShoutout
