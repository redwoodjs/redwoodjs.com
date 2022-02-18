import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MediaLayoutProps = {
  children: React.ReactNode
}

const MediasLayout = ({ children }: MediaLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.medias()} className="rw-link">
            Medias
          </Link>
        </h1>
        <Link to={routes.newMedia()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          New Media
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MediasLayout
