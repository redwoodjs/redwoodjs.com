interface HeroLink {
  href: string
  pointer: string
  className: string
}

interface HeroProps {
  imgProps: { src: string; alt: string }
  title: string & JSX.Element
  text: string
  links?: HeroLink[]
}

export const Hero: React.FC<HeroProps> = ({ imgProps, links, text, title }) => {
  return (
    <div
      className="bg-red-800"
      style={{
        backgroundImage:
          "url('/images/logo-outline.svg'), linear-gradient(#682712, #84331b)",
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="lg:flex lg:items-center max-w-screen-xl mx-auto px-8 py-12 md:py-32">
        {imgProps?.src && (
          <div className="hidden lg:block lg:w-1/3 pl-4">
            <img alt={''} {...imgProps} className="w-4/5 mx-auto" />
          </div>
        )}
        <div className="w-full lg:w-2/3 lg:pr-4">
          <h2 className="text-3xl md:text-6xl text-center lg:text-left text-white font-semibold tracking-tight leading-10">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto lg:mx-0 text-center font-light lg:text-left md:text-lg xl:text-xl mt-6 xl:leading-8 text-white">
            {text}
          </p>
          {links && (
            <ul className="flex flex-wrap mt-8 justify-center lg:justify-start lg:-ml-2">
              {links.map((link) => (
                <li
                  key={`Hero - links - ${link.href}`}
                  className="px-2 whitespace-no-wrap"
                >
                  <a
                    href={link.href}
                    className={`${link.className} block mt-2  px-4 py-3 font-semibold rounded hover:bg-red-600 transition duration-200 text-lg`}
                  >
                    {link.pointer}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
