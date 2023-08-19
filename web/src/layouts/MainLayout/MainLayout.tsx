import { Fragment, useState } from 'react'
import { Toaster } from '@redwoodjs/web/toast'
import { XIcon, SpeakerphoneIcon } from '@heroicons/react/solid'

import Navbar from './Navigation/Navbar'
import Footer from 'src/components/Footer'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showcaseBannerVisible, setShowcaseBannerVisible] = useState(true)
  return (
    <>
      <Toaster toastOptions={{ className: 'mt-16' }} />

      <Navbar />

      <main className="w-full flex-1">{children}</main>

      <Footer />
    </>
  )
}

export default MainLayout
