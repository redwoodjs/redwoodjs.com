import { useAuth } from '@redwoodjs/auth'
import {Link, navigate, routes} from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { logOut } = useAuth()

  return (
    <div className={'flex flex-row'}>
      <Toaster />
      <ul className={'w-64 p-4'}>
        <li>
          <Link to={routes.showcases()}>Showcases</Link>
        </li>
        <li>
          <Link to={routes.authors()}>Authors</Link>
        </li>
        <li>
          <Link to={routes.tags()}>Tags</Link>
        </li>
        <li>
          <Link to={routes.medias()}>Medias</Link>
        </li>
        <li>
          <a href={'#'}
            onClick={() => {
              logOut()
            }}
          >
            -> Log out
          </a>
        </li>
      </ul>
      <main className={'flex flex-row ml-4 w-full'}>{children}</main>
    </div>
  )
}

export default AdminLayout
