import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AuthorLayoutProps = {
  children: React.ReactNode
}

const AuthorsLayout = ({ children }: AuthorLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.authors()} className="rw-link">
            Authors
          </Link>
        </h1>
        <Link to={routes.newAuthor()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          New Author
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AuthorsLayout
