import { Fragment } from 'react'
import { Toaster } from '@redwoodjs/web/toast'

import MainLayoutNavbar from 'src/components/MainLayoutNavbar'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'mt-16' }} />
      <MainLayoutNavbar />

      <main className="w-full flex-1 bg-white">{children}</main>

      <footer className="border-t border-orange-200 bg-orange-50 p-6 text-sm text-orange-700">
        Copyright &copy;{new Date().getFullYear()} Tom Preston-Werner
      </footer>
    </>
  )
}

export default MainLayout
