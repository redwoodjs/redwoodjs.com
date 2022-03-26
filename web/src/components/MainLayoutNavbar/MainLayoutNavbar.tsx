import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { routes, Link } from '@redwoodjs/router'

import GithubStars from 'src/components/GithubStars'
import LanguagePicker from '../LanguagePicker/LanguagePicker'
import NavLinksMobile from '../NavLinksMobile/NavLinksMobile'
import NavLinksDesktop from '../NavLinksDesktop/NavLinksDesktop'

export const Anchor = ({ children, route, link, ...rest }) => {
  return route ? (
    <Link to={route} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={link} {...rest}>
      {children}
    </a>
  )
}

const MainLayoutNavbar = () => {
  const navigation = [
    { name: 'Docs', link: '/docs' },
    {
      name: 'Community',
      navigation: [
        {
          name: 'Discord',
          description:
            'Watercooler, relationship building, quick discussion and help',
          link: 'https://discord.gg/jjSYEQd',
          icon: () => (
            <svg
              viewBox="0 0 36 36"
              className="fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M29.9699 7.7544C27.1043 5.44752 22.5705 5.05656 22.3761 5.04288C22.2284 5.03072 22.0806 5.0648 21.9531 5.1404C21.8257 5.216 21.7249 5.32937 21.6647 5.4648C21.5783 5.65936 21.5049 5.85949 21.4451 6.06384C23.3409 6.38424 25.6694 7.02864 27.7761 8.33616C27.8565 8.38604 27.9262 8.45126 27.9814 8.52809C28.0366 8.60493 28.0761 8.69187 28.0976 8.78397C28.1192 8.87607 28.1224 8.97151 28.1071 9.06485C28.0917 9.15819 28.0582 9.24759 28.0083 9.32796C27.9584 9.40833 27.8932 9.47809 27.8164 9.53325C27.7395 9.58842 27.6526 9.62791 27.5605 9.64947C27.4684 9.67103 27.373 9.67424 27.2796 9.65892C27.1863 9.6436 27.0969 9.61004 27.0165 9.56016C23.3949 7.3116 18.8719 7.2 17.9999 7.2C17.1287 7.2 12.6028 7.31232 8.98338 9.55944C8.90301 9.60932 8.81361 9.64288 8.72027 9.6582C8.62693 9.67352 8.53149 9.67031 8.43939 9.64875C8.25339 9.6052 8.09231 9.48955 7.99158 9.32724C7.89085 9.16493 7.85873 8.96925 7.90227 8.78325C7.94582 8.59725 8.06147 8.43617 8.22378 8.33544C10.3305 7.03152 12.659 6.38424 14.5547 6.06672C14.4453 5.7096 14.3459 5.48424 14.3387 5.4648C14.2788 5.32841 14.1776 5.2143 14.0493 5.13859C13.921 5.06288 13.7721 5.0294 13.6238 5.04288C13.4294 5.05728 8.89554 5.44752 5.99034 7.78536C4.47474 9.18792 1.43994 17.3894 1.43994 24.48C1.43994 24.6067 1.47378 24.7277 1.5357 24.8371C3.62802 28.5163 9.3405 29.4775 10.6423 29.52H10.6646C10.7782 29.5203 10.8903 29.4937 10.9916 29.4424C11.093 29.3911 11.1808 29.3165 11.2478 29.2248L12.5632 27.4133C9.01146 26.4967 7.19706 24.9386 7.09338 24.8458C6.95017 24.7194 6.86303 24.5412 6.85115 24.3506C6.83927 24.1599 6.90361 23.9723 7.03002 23.8291C7.15643 23.6859 7.33456 23.5988 7.52522 23.5869C7.71588 23.575 7.90345 23.6394 8.04666 23.7658C8.08842 23.8054 11.4299 26.64 17.9999 26.64C24.5807 26.64 27.9223 23.7938 27.9561 23.7658C28.0998 23.6403 28.2874 23.5769 28.4777 23.5896C28.668 23.6023 28.8456 23.69 28.9713 23.8334C29.0335 23.9042 29.0812 23.9864 29.1117 24.0756C29.1421 24.1647 29.1546 24.259 29.1486 24.353C29.1426 24.447 29.1181 24.5389 29.0766 24.6235C29.035 24.708 28.9772 24.7836 28.9065 24.8458C28.8028 24.9386 26.9884 26.4967 23.4367 27.4133L24.7528 29.2248C24.8198 29.3164 24.9074 29.3909 25.0087 29.4422C25.1099 29.4935 25.2218 29.5202 25.3353 29.52H25.3569C26.6601 29.4775 32.3719 28.5156 34.4649 24.8371C34.5261 24.7277 34.5599 24.6067 34.5599 24.48C34.5599 17.3894 31.5251 9.18864 29.9699 7.7544V7.7544ZM13.3199 21.6C11.9275 21.6 10.7999 20.3112 10.7999 18.72C10.7999 17.1288 11.9275 15.84 13.3199 15.84C14.7124 15.84 15.8399 17.1288 15.8399 18.72C15.8399 20.3112 14.7124 21.6 13.3199 21.6ZM22.6799 21.6C21.2875 21.6 20.1599 20.3112 20.1599 18.72C20.1599 17.1288 21.2875 15.84 22.6799 15.84C24.0724 15.84 25.1999 17.1288 25.1999 18.72C25.1999 20.3112 24.0724 21.6 22.6799 21.6Z"></path>
            </svg>
          ),
        },
        {
          name: 'Discourse',
          description:
            'Long-form discussions about Redwood, troubleshooting, show & tell',
          link: 'https://community.redwoodjs.com',
          icon: () => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="transition duration-200 fill-current text-orange-600"
            >
              <path d="M16.1357143,0 C7.37857143,0 0,7.03571429 0,15.7214286 C0,16 0.00714285714,32 0.00714285714,32 L16.1357143,31.9857143 C24.9,31.9857143 32,24.6785714 32,15.9928571 C32,7.30714286 24.9,0 16.1357143,0 Z M16,25.1428571 C14.6142857,25.1428571 13.2928571,24.8357143 12.1142857,24.2785714 L6.32142857,25.7142857 L7.95714286,20.3571429 C7.25714286,19.0642857 6.85714286,17.5785714 6.85714286,16 C6.85714286,10.95 10.95,6.85714286 16,6.85714286 C21.05,6.85714286 25.1428571,10.95 25.1428571,16 C25.1428571,21.05 21.05,25.1428571 16,25.1428571 Z"></path>
            </svg>
          ),
        },
        {
          name: 'Twitter',
          description:
            'Follow @redwoodjs for updates, new releases and community meetup annoucements',
          link: 'https://twitter.com/redwoodjs',
          icon: () => (
            <svg
              viewBox="0 0 34 34"
              className="fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.693 31.025C23.528 31.025 30.532 20.4 30.532 11.186V10.285C31.892 9.282 33.065 8.075 34 6.664C32.725 7.225 31.382 7.599 29.988 7.769C31.4415 6.89552 32.5288 5.52436 33.048 3.91C31.688 4.726 30.192 5.287 28.628 5.61C27.5817 4.47537 26.1884 3.72011 24.6667 3.46265C23.1449 3.20519 21.5807 3.46011 20.2194 4.18742C18.8582 4.91474 17.7768 6.0733 17.1449 7.48142C16.513 8.88954 16.3664 10.4676 16.728 11.968C13.9549 11.8247 11.243 11.0998 8.76823 9.84043C6.29346 8.58108 4.11117 6.8154 2.363 4.658C1.46192 6.19488 1.18356 8.01846 1.58508 9.75418C1.98661 11.4899 3.03753 13.006 4.522 13.991C3.417 13.94 2.329 13.651 1.36 13.09V13.175C1.35653 14.7901 1.91405 16.3562 2.93729 17.6058C3.96053 18.8554 5.38596 19.7109 6.97 20.026C5.93906 20.3076 4.85718 20.3483 3.808 20.145C4.25151 21.5313 5.11789 22.744 6.2856 23.6129C7.4533 24.4818 8.86372 24.9634 10.319 24.99C8.87328 26.1262 7.21777 26.9662 5.44716 27.4621C3.67654 27.958 1.82554 28.1 0 27.88C3.19039 29.927 6.90238 31.0129 10.693 31.008"></path>
            </svg>
          ),
        },
      ],
    },
    {
      name: 'Showcase',
      navigation: [
        {
          name: 'Example Apps',
          description:
            'Learn all the features of Redwood with example apps and code',
          route: routes.examples(),
          icon: () => (
            <span className="icon md-36 text-orange-600">construction</span>
          ),
        },
        {
          name: 'Showcase',
          description:
            'Case studies of real-world apps and companies built with Redwood',
          route: routes.showcase(),
          icon: () => (
            <span className="icon md-36 text-orange-600">emoji_events</span>
          ),
        },
      ],
    },

    { name: 'Jobs', route: routes.jobs() },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-900 bg-opacity-90">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  to={routes.home()}
                  className="flex-shrink-0 flex items-center"
                >
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/images/diecut.svg"
                    alt="RedwoodJS"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/images/logo-diecut-mark.svg"
                    alt="RedwoodJS"
                  />
                </Link>
                <div className="hidden sm:flex sm:items-center sm:space-x-4 sm:ml-6">
                  <NavLinksDesktop navigation={navigation} />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ul className="hidden lg:flex items-center">
                  <li className="mr-4">
                    <GithubStars />
                  </li>
                  <li>
                    <LanguagePicker />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <NavLinksMobile navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}

export default MainLayoutNavbar
