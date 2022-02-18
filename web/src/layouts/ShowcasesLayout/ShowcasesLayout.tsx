import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ShowcaseLayoutProps = {
  children: React.ReactNode
}

const ShowcasesLayout = ({ children }: ShowcaseLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.showcases()} className="rw-link">
            Showcases
          </Link>
        </h1>
        <Link to={routes.newShowcase()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          New Showcase
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ShowcasesLayout
