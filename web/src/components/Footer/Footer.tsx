const navigation = {
  about: [
    {
      name: 'README',
      href: 'https://github.com/redwoodjs/redwood/blob/main/README.md',
    },
    {
      name: 'Core Team',
      href: 'https://github.com/redwoodjs/redwood#core-team',
    },
    {
      name: 'All Contributors',
      href: 'https://github.com/redwoodjs/redwood#all-contributors',
    },
    { name: 'Stickers', href: '/stickers' },
    { name: 'Shop', href: 'https://shop.redwoodjs.com' },
    { name: 'Brand and Logos', href: '/logos' },
    { name: 'Security', href: '/security' },
    {
      name: 'Roadmap',
      href: 'https://community.redwoodjs.com/t/post-v1-roadmap-feedback-wanted/3013',
    },
    // { name: 'Releases', href: 'https://github.com/redwoodjs/redwood' },
  ],
  community: [
    {
      name: 'Join the Community',
      href: '/community',
    },
    {
      name: 'Contributors Meetup',
      href: 'https://community.redwoodjs.com/t/contributors-meetups-a-next-step-for-redwoodjs-participation/2470',
    },
    {
      name: 'Makers Hours',
      href: 'https://community.redwoodjs.com/t/redwood-makers-hour-stand-up/1971',
    },
    {
      name: 'Redwood Startup Club',
      href: 'http://redwoodjs.com/startup-club',
    },
    {
      name: 'Code of Conduct',
      href: 'https://github.com/redwoodjs/redwood/blob/main/CODE_OF_CONDUCT.md',
    },
    // { name: 'Startup Club', href: 'https://github.com/redwoodjs/redwood' },
  ],
  announcements: [
    {
      name: 'Events',
      href: 'https://community.redwoodjs.com/c/announcements/events/19',
    },
    {
      name: 'Releases',
      href: 'https://community.redwoodjs.com/c/announcements/releases-and-upgrade-guides/18',
    },
    {
      name: 'General',
      href: 'https://community.redwoodjs.com/c/announcements/5',
    },
    {
      name: 'Redwood Startup Fund',
      href: 'http://redwoodstartupfund.com/',
    },
  ],
  icons: [
    {
      name: 'GitHub',
      href: 'https://github.com/redwoodjs/redwood',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/redwoodjs',
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 36 36"
          // className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d="M29.9699 7.7544C27.1043 5.44752 22.5705 5.05656 22.3761 5.04288C22.2284 5.03072 22.0806 5.0648 21.9531 5.1404C21.8257 5.216 21.7249 5.32937 21.6647 5.4648C21.5783 5.65936 21.5049 5.85949 21.4451 6.06384C23.3409 6.38424 25.6694 7.02864 27.7761 8.33616C27.8565 8.38604 27.9262 8.45126 27.9814 8.52809C28.0366 8.60493 28.0761 8.69187 28.0976 8.78397C28.1192 8.87607 28.1224 8.97151 28.1071 9.06485C28.0917 9.15819 28.0582 9.24759 28.0083 9.32796C27.9584 9.40833 27.8932 9.47809 27.8164 9.53325C27.7395 9.58842 27.6526 9.62791 27.5605 9.64947C27.4684 9.67103 27.373 9.67424 27.2796 9.65892C27.1863 9.6436 27.0969 9.61004 27.0165 9.56016C23.3949 7.3116 18.8719 7.2 17.9999 7.2C17.1287 7.2 12.6028 7.31232 8.98338 9.55944C8.90301 9.60932 8.81361 9.64288 8.72027 9.6582C8.62693 9.67352 8.53149 9.67031 8.43939 9.64875C8.25339 9.6052 8.09231 9.48955 7.99158 9.32724C7.89085 9.16493 7.85873 8.96925 7.90227 8.78325C7.94582 8.59725 8.06147 8.43617 8.22378 8.33544C10.3305 7.03152 12.659 6.38424 14.5547 6.06672C14.4453 5.7096 14.3459 5.48424 14.3387 5.4648C14.2788 5.32841 14.1776 5.2143 14.0493 5.13859C13.921 5.06288 13.7721 5.0294 13.6238 5.04288C13.4294 5.05728 8.89554 5.44752 5.99034 7.78536C4.47474 9.18792 1.43994 17.3894 1.43994 24.48C1.43994 24.6067 1.47378 24.7277 1.5357 24.8371C3.62802 28.5163 9.3405 29.4775 10.6423 29.52H10.6646C10.7782 29.5203 10.8903 29.4937 10.9916 29.4424C11.093 29.3911 11.1808 29.3165 11.2478 29.2248L12.5632 27.4133C9.01146 26.4967 7.19706 24.9386 7.09338 24.8458C6.95017 24.7194 6.86303 24.5412 6.85115 24.3506C6.83927 24.1599 6.90361 23.9723 7.03002 23.8291C7.15643 23.6859 7.33456 23.5988 7.52522 23.5869C7.71588 23.575 7.90345 23.6394 8.04666 23.7658C8.08842 23.8054 11.4299 26.64 17.9999 26.64C24.5807 26.64 27.9223 23.7938 27.9561 23.7658C28.0998 23.6403 28.2874 23.5769 28.4777 23.5896C28.668 23.6023 28.8456 23.69 28.9713 23.8334C29.0335 23.9042 29.0812 23.9864 29.1117 24.0756C29.1421 24.1647 29.1546 24.259 29.1486 24.353C29.1426 24.447 29.1181 24.5389 29.0766 24.6235C29.035 24.708 28.9772 24.7836 28.9065 24.8458C28.8028 24.9386 26.9884 26.4967 23.4367 27.4133L24.7528 29.2248C24.8198 29.3164 24.9074 29.3909 25.0087 29.4422C25.1099 29.4935 25.2218 29.5202 25.3353 29.52H25.3569C26.6601 29.4775 32.3719 28.5156 34.4649 24.8371C34.5261 24.7277 34.5599 24.6067 34.5599 24.48C34.5599 17.3894 31.5251 9.18864 29.9699 7.7544V7.7544ZM13.3199 21.6C11.9275 21.6 10.7999 20.3112 10.7999 18.72C10.7999 17.1288 11.9275 15.84 13.3199 15.84C14.7124 15.84 15.8399 17.1288 15.8399 18.72C15.8399 20.3112 14.7124 21.6 13.3199 21.6ZM22.6799 21.6C21.2875 21.6 20.1599 20.3112 20.1599 18.72C20.1599 17.1288 21.2875 15.84 22.6799 15.84C24.0724 15.84 25.1999 17.1288 25.1999 18.72C25.1999 20.3112 24.0724 21.6 22.6799 21.6Z"></path>
        </svg>
      ),
    },
    {
      name: 'Discourse',
      href: 'https://community.redwoodjs.com',
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          {...props}
          // className="h-5 w-5"
        >
          <path d="M16.1357143,0 C7.37857143,0 0,7.03571429 0,15.7214286 C0,16 0.00714285714,32 0.00714285714,32 L16.1357143,31.9857143 C24.9,31.9857143 32,24.6785714 32,15.9928571 C32,7.30714286 24.9,0 16.1357143,0 Z M16,25.1428571 C14.6142857,25.1428571 13.2928571,24.8357143 12.1142857,24.2785714 L6.32142857,25.7142857 L7.95714286,20.3571429 C7.25714286,19.0642857 6.85714286,17.5785714 6.85714286,16 C6.85714286,10.95 10.95,6.85714286 16,6.85714286 C21.05,6.85714286 25.1428571,10.95 25.1428571,16 C25.1428571,21.05 21.05,25.1428571 16,25.1428571 Z"></path>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/redwoodjs',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/redwoodjs',
      icon: (props) => (
        <svg
          viewBox="0 0 157 110"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.5 3.7C146.2 5.5 151.5 10.8 153.3 17.5C156.6 29.7 156.7 55 156.7 55C156.7 55 156.7 80.4 153.4 92.5C151.6 99.2 146.3 104.5 139.6 106.3C127.5 109.6 78.8 109.6 78.8 109.6C78.8 109.6 30.1 109.6 18 106.3C11.3 104.5 6.00002 99.2 4.20002 92.5C0.900024 80.3 0.900024 55 0.900024 55C0.900024 55 0.900024 29.7 4.10002 17.6C5.90002 10.9 11.2 5.6 17.9 3.8C30 0.500001 78.7 0.400002 78.7 0.400002C78.7 0.400002 127.4 0.400002 139.5 3.7ZM103.6 55L63.2001 78.4V31.6L103.6 55Z"
          />
        </svg>
      ),
    },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className=" pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0"> */}
        <div className="pb-12 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-neutral-400">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-neutral-300">
              Keep up on what&apos;s happening with RedwoodJS!
            </p>
          </div>

          <form
            className="mt-4 sm:flex sm:max-w-2xl sm:flex-1 lg:mt-0 lg:justify-end"
            action="https://redwoodjs.us19.list-manage.com/subscribe/post?u=0c27354a06a7fdf4d83ce07fc&amp;id=09f634eea4"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              autoComplete="email"
              placeholder="me@email.com"
              required
              className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-neutral-900 placeholder-neutral-500 focus:border-white focus:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 sm:max-w-xs sm:flex-1"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                value="Subscribe"
                name="subscribe"
                className="button flex w-full items-center justify-center rounded-md border border-transparent py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#93CA48] focus:ring-offset-2 focus:ring-offset-neutral-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto max-w-7xl border-t border-neutral-700 py-12">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-4">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    About
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Community
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.community.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Announcements
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.announcements.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <ul className="mt-4 space-y-4">
                    <div className="flex flex-col space-y-6 md:order-2">
                      {navigation.icons.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center text-neutral-400 hover:text-neutral-300"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon
                            className="mr-2 h-8 w-8"
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8 md:flex md:items-center md:justify-between">
          {/* <div className="flex items-center space-x-6 md:order-2">
            {navigation.icons.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-400 hover:text-neutral-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
          <p className="mt-8 text-base text-neutral-400 md:order-1 md:mt-0">
            Copyright &copy;{new Date().getFullYear()} Tom Preston-Werner
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
