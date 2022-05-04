import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { logOut, hasRole } = useAuth()

  return (
    <div className={'flex flex-row'}>
      <Toaster />
      <ul className={'navigate fixed h-screen w-44 bg-white p-4'}>
        {hasRole(['editor', 'admin']) && (
          <>
            <li>
              <Link to={routes.adminJobs()}>Jobs</Link>
            </li>
            <li>
              <Link to={routes.adminStartups()}>Startups</Link>
            </li>
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
          </>
        )}
        {hasRole('admin') && (
          <li>
            <Link to={routes.users()}>Users</Link>
          </li>
        )}
        {hasRole(['editor', 'admin', 'translator']) && (
          <li>
            <Link to={routes.showcaseLocalizations()}>Localizations</Link>
          </li>
        )}
        <li className={'mt-4'}>
          <button
            className="rw-link"
            onClick={() => {
              logOut()
            }}
          >
            {'-> Log out'}
          </button>
        </li>
      </ul>
      <main className={'ml-44 flex w-full flex-row p-8'}>{children}</main>
    </div>
  )
}

export default AdminLayout
