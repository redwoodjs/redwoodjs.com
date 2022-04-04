import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SecurityPage = () => {
  return (
    <div className="mx-auto mt-12 min-h-screen max-w-screen-md space-y-6">
      <MetaTags title="Security" description="Security page" />

      <h1 className="mb-6 font-serif font-bold">Security Policy</h1>
      <i>Last updated 21 June 2021</i>
      <p className="my-4">
        View the{' '}
        <a href="https://github.com/redwoodjs/redwood/security/policy">
          RedwoodJS Security policy
        </a>
      </p>

      <h2 className="text-2xl font-bold">Contact</h2>
      <p>
        If you discover a potential security issue, do let us know as soon as
        possible. We'll quickly work toward a resolution, so please provide us
        with a reasonable amount of time before disclosure to the public or a
        third-party.
      </p>
      <p>
        Contact us at{' '}
        <a href="mailto:security@redwoodjs.com">security@redwoodjs.com</a>
      </p>
      <p>Thank you for helping improve Redwood security!</p>
    </div>
  )
}

export default SecurityPage
