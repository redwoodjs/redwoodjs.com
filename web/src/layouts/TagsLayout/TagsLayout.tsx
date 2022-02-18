import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TagLayoutProps = {
  children: React.ReactNode
}

const TagsLayout = ({ children }: TagLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.tags()} className="rw-link">
            Tags
          </Link>
        </h1>
        <Link to={routes.newTag()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          New Tag
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TagsLayout
