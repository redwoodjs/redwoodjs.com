import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const JobPage = () => {
  return (
    <>
      <MetaTags title="Job" description="Job page" />

      <div className="max-w-screen-lg mx-auto">
        <header className="mt-36">
          <h1 className="text-center">
            <span className="text-teal-800">Snaplet</span> is hiring a{' '}
            <span className="text-teal-800">Sr. Developer</span>!
          </h1>
        </header>

        <div className="max-w-screen-lg mt-16 bg-white rounded-lg border border-red-200 mb-12">
          <section className="md:flex items-stretch">
            <div className="md:w-1/3 py-8 px-12">
              <h3 className="title">Location(s)</h3>
              <ul className="list-disc mt-2 text-stone-500 font-semibold">
                <li>Remote</li>
                <li>Berlin, Germany</li>
              </ul>
            </div>
            <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
              <h3 className="title">Compensation</h3>
              <ul className="list-disc mt-2 text-stone-500 font-semibold">
                <li>$150,000 - $200,000 Salary</li>
                <li>Company Performance Bonus</li>
                <li>Stock Options</li>
              </ul>
            </div>
            <div className="md:w-1/3 py-8 px-12 border-t md:border-t-0 md:border-l border-red-200">
              <h3 className="title">Perks</h3>
              <ul className="list-disc mt-2 text-stone-500 font-semibold">
                <li>401k</li>
                <li>4 weeks vacation</li>
                <li>Healthcare</li>
                <li>All the cats you can pet</li>
              </ul>
            </div>
          </section>
          <section className="border-t border-red-200 p-12">
            <h2 className="title">About the Job</h2>
            <p className="mt-2">
              Seitan wolf small batch tote bag actually mustache 8-bit
              skateboard hot chicken artisan. Flannel gastropub tbh, organic
              sartorial knausgaard XOXO fingerstache normcore af craft beer
              kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps
              subway tile cold-pressed gastropub. Kinfolk hexagon lomo
              thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry
              you probably haven't heard of them, quinoa 3 wolf moon disrupt
              cold-pressed tacos chillwave brunch.
            </p>
            <p className="mt-2">
              Semiotics mixtape artisan seitan, edison bulb pinterest snackwave.
              Four dollar toast post-ironic cardigan, intelligentsia ennui venmo
              everyday carry portland tofu microdosing shoreditch keytar
              crucifix. Ethical farm-to-table hammock, actually leggings prism
              +1. Pour-over hell of pok pok post-ironic, scenester marfa
              farm-to-table poutine freegan mumblecore fixie live-edge jianbing.
              Art party church-key DIY adaptogen live-edge gochujang.
            </p>
          </section>
          <section className="border-t border-red-200 p-12">
            <h2 className="title">About You</h2>
            <p className="mt-2">
              Seitan wolf small batch tote bag actually mustache 8-bit
              skateboard hot chicken artisan. Flannel gastropub tbh, organic
              sartorial knausgaard XOXO fingerstache normcore af craft beer
              kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps
              subway tile cold-pressed gastropub. Kinfolk hexagon lomo
              thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry
              you probably haven't heard of them, quinoa 3 wolf moon disrupt
              cold-pressed tacos chillwave brunch.
            </p>
            <p className="mt-2">
              Semiotics mixtape artisan seitan, edison bulb pinterest snackwave.
              Four dollar toast post-ironic cardigan, intelligentsia ennui venmo
              everyday carry portland tofu microdosing shoreditch keytar
              crucifix. Ethical farm-to-table hammock, actually leggings prism
              +1. Pour-over hell of pok pok post-ironic, scenester marfa
              farm-to-table poutine freegan mumblecore fixie live-edge jianbing.
              Art party church-key DIY adaptogen live-edge gochujang.
            </p>
          </section>
          <section className="border-t border-red-200 p-12">
            <h2 className="title">About Snaplet</h2>

            <p className="mt-2">
              Seitan wolf small batch tote bag actually mustache 8-bit
              skateboard hot chicken artisan. Flannel gastropub tbh, organic
              sartorial knausgaard XOXO fingerstache normcore af craft beer
              kombucha. Hot chicken tacos locavore, raw denim occupy pabst ramps
              subway tile cold-pressed gastropub. Kinfolk hexagon lomo
              thundercats sustainable, 8-bit tumblr. Fanny pack everyday carry
              you probably haven't heard of them, quinoa 3 wolf moon disrupt
              cold-pressed tacos chillwave brunch.
            </p>
            <p className="mt-2">
              Semiotics mixtape artisan seitan, edison bulb pinterest snackwave.
              Four dollar toast post-ironic cardigan, intelligentsia ennui venmo
              everyday carry portland tofu microdosing shoreditch keytar
              crucifix. Ethical farm-to-table hammock, actually leggings prism
              +1. Pour-over hell of pok pok post-ironic, scenester marfa
              farm-to-table poutine freegan mumblecore fixie live-edge jianbing.
              Art party church-key DIY adaptogen live-edge gochujang.
            </p>
            <div className="mt-8 flex justify-center">
              <img src="/images/snaplet_logo.svg" alt="Snaplet" />
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <button type="button" className="button">
          Apply for this job
        </button>
      </div>
    </>
  )
}

export default JobPage
