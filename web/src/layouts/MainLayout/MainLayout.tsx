import { Fragment } from 'react'
import { Toaster } from '@redwoodjs/web/toast'

import Navbar from './Navigation/Navbar'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'mt-16' }} />
      <Navbar />

      <main className="flex-1 w-full bg-orange-50">{children}</main>

      <footer className="p-6 bg-orange-50 text-orange-700 text-sm border-t border-orange-200">
        Copyright &copy;{new Date().getFullYear()} Tom Preston-Werner
      </footer>
    </>
  )
}

export default MainLayout
