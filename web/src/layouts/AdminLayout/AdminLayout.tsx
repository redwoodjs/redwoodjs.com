import { Link, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <ul>
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
      </ul>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
