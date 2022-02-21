import { MetaTags } from '@redwoodjs/web'
import Hero  from 'src/components/Hero/Hero'
import { useTranslation, Trans } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags title="Home" description="The fullstack JS framework for startups" />

      {/* Hero */}

      <Hero
        imgProps={{
          src: '/images/diecut.svg',
          alt: 'Redwood Logo'
        }}
        title={<Trans i18nKey={'HomePage.hero.title'} components={{ break: <br/> }}/>}
        text={<Trans i18nKey={'HomePage.hero.text'} components={{ red: <span className="text-red-300" />}}/>}
        links={[
          { pointer: t('HomePage.hero.links.tutorial'), href: 'https://learn.redwoodjs.com/docs/tutorial/welcome-to-redwood', className: "button"},
          { pointer: t('HomePage.hero.links.docs'), href: 'https://redwoodjs.com/docs', className: "button-invert"},
        ]}
      />

      {/* Testimonials */}

      <section className="py-6 md:py-8 bg-red-200 lg:flex justify-between items-start px-8 -mt-8 h-72 md:h-64">
        <div className="glide max-w-screen-lg mx-auto h-full">
          <div className="glide__track h-full" data-glide-el="track">
            <ul className="glide__slides h-full">@@include('testimonials')</ul>
          </div>

          <div
            className="hidden md:flex glide__arrows justify-between items-center -mt-24"
            data-glide-el="controls"
          >
            <button
              className="absolute left-0 glide__arrow glide__arrow--left text-6xl text-red-300 hover:text-red-400 transition:color duration-150 focus:outline-none"
              data-glide-dir="<"
            >
              &laquo;
            </button>
            <button
              className="absolute right-0 glide__arrow glide__arrow--right text-6xl text-red-300 hover:text-red-400 transition:color duration-150 focus:outline-none"
              data-glide-dir=">"
            >
              &raquo;
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter, shop, sticker form */}

      <section className="md:flex items-start max-w-screen-xl mx-auto px-8 my-16 space-x-12">
        <div className="md:w-1/3">
          <header className="text-center">
            <h2 className="text-red-700 text-2xl font-semibold tracking-tight">
              Get the Newsletter
            </h2>
            <p className="text-sm mt-1">
              Keep up on all that's happening with RedwoodJS!
            </p>
          </header>
          <form
            className="flex items-center justify-between mt-4 pt-1"
            action="https://redwoodjs.us19.list-manage.com/subscribe/post?u=0c27354a06a7fdf4d83ce07fc&amp;id=09f634eea4"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
          >
            <input
              type="email"
              value=""
              name="EMAIL"
              className="block border border-red-700 rounded-l py-2 px-2 w-full"
              id="mce-EMAIL"
              placeholder="your-email@example.com"
            />
            <button
              type="submit"
              value="Subscribe"
              name="subscribe"
              className="block bg-red-700 hover:bg-red-600 transition duration-200 text-white px-4 py-2 border border-red-700 font-semibold rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0">
          <header className="text-center">
            <a href="/stickers.html" className="hover:underline text-red-700">
              <h2 className="text-red-700 text-2xl font-semibold tracking-tight">
                Get Some Swag
              </h2>
            </a>
            <p className="text-sm mt-1">
              The Redwood logo on shirts, hats and more!
            </p>
          </header>
          <a
            href="https://shop.redwoodjs.com"
            className="block mt-4 text-center text-2xl tracking-tight text-red-100 bg-red-700 hover:bg-red-600 transition duration-200 py-3 rounded"
          >
            The Redwood Shop &rarr;
          </a>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0">
          <header className="text-center">
            <a href="/stickers.html" className="hover:underline text-red-700">
              <h2 className="text-red-700 text-2xl font-semibold tracking-tight">
                Get Free Stickers
              </h2>
            </a>
            <p className="text-sm mt-1">
              Enter your address for a chance to get some, free!
            </p>
          </header>
          <div className="mt-3">
            <a
              href="/stickers.html"
              className="flex flex-between block hover:bg-red-100 rounded"
            >
              <div className="w-1/2">
                <img src="/images/stickers.png" alt="Redwood stickers" />
              </div>
              <div className="w-1/2">
                <img
                  src="/images/stickers.png"
                  alt="Redwood stickers"
                  className=""
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Three big ol' icons */}

      <section className="mt-12 py-12 bg-red-200 px-8">
        <div className="lg:flex justify-between items-start max-w-screen-xl mx-auto space-x-8">
          <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:w-1/3 text-center">
            <img src="/images/icon-edge.svg" className="block w-40 mx-auto" />
            <div className="ml-0 md:ml-8 lg:ml-0 text-center md:text-left lg:text-center w-full">
              <h2 className="text-2xl font-bold mt-2 py-2 bg-red-800 text-red-200 tracking-tight rounded">
                Edge–ready
              </h2>
              <p className="lg:mt-4 px-2 text-red-800">
                Redwood is designed to be deployable completely to the
                <span className="whitespace-no-wrap">Edge—</span>CDNs and serverless
                functions distributed everywhere. Containers and traditional
                server deploys are also supported!
              </p>
              <p></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:w-1/3 text-center mt-8 md:mt-4 lg:mt-0">
            <img src="/images/icon-organization.svg" className="block w-40 mx-auto" />
            <div className="ml-0 md:ml-8 lg:ml-0 text-center md:text-left lg:text-center w-full">
              <h2 className="text-2xl font-bold mt-2 py-2 bg-red-700 text-red-200 tracking-tight rounded">
                Code Organization
              </h2>
              <p className="lg:mt-4 px-2 text-red-800">
                Redwood has a pre-defined place for all your code, front-end and
                back-end. Components, layouts, pages, GraphQL, and services: they
                all have a home. Don't worry, you can reogranize if you want.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:w-1/3 text-center mt-8 md:mt-4 lg:mt-0">
            <img src="/images/icon-code.svg" className="block w-40 mx-auto" />
            <div className="ml-0 md:ml-8 lg:ml-0 text-center md:text-left lg:text-center w-full">
              <h2 className="text-2xl font-bold mt-2 py-2 bg-red-600 text-red-200 tracking-tight rounded">
                Developer Experience
              </h2>
              <p className="lg:mt-4 px-2 text-red-800">
                Redwood apps are as declarative as possible; we eliminate most
                boilerplate; zero-config code splitting...everything just works.
                Let us worry about Webpack and Babel config, you focus on the fun
                stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code samples */}

      <section className="md:flex mt-12 pt-12 max-w-screen-lg mx-auto">
        <div className="md:w-2/5 pr-4">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">
            How it's Organized
          </h3>
          <p className="my-3">
            Redwood places both the frontend and backend code in a{' '}
            <span className="whitespace-nowrap">single monorepo.</span>
          </p>
          <p className="my-3">
            <code className="text-red-700 bg-red-200 py-half px-1 rounded text-xs">
              /web
            </code>
            contains the frontend and is served as static files through a CDN
            (and automatically code-split{' '}
            <span className="whitespace-nowrap">for you).</span>
          </p>
          <p className="my-3">
            <code className="text-red-700 bg-red-200 py-half px-1 rounded text-xs">
              /api
            </code>
            contains the backend serverless functions (a GraphQL API by default)
            that your frontend will call when it needs some{' '}
            <span className="whitespace-nowrap">dynamic data.</span>
          </p>
        </div>
        <div className="md:w-3/5 md:pl-4 mt-4 md:mt-0">
          <a href="/images/structure.png">
            <img src="/images/structure.png" alt="Structure of a Redwood app" />
          </a>
        </div>
      </section>

      <div className="flex w-36 mx-auto">
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
      </div>

      <section className="md:flex mt-24 max-w-screen-lg mx-auto">
        <div className="md:w-3/5 md:pr-4 mt-4 md:mt-0">
          <pre className="overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="javascript"
              data-target="application.code"
            >{`// web/src/Routes.js
import { Router, Route } from '@redwoodjs/router'
const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/users/{type}" page={UsersPage} name="users" />
    </Router>
  )
}

// web/src/components/Admin/Admin.js
import { Link, routes } from '@redwoodjs/router'
const Admin = () => {
  return (
    <h1><Link to={routes.home()}>My CRM</Link></h1>
    <Link to={routes.users({type: "admin"})}>View Admins</Link>
  )
}`}
            </code>
          </pre>
        </div>

        <div className="md:w-2/5 pl-4">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">
            Routing
          </h3>
          <p className="my-3">
            Redwood features its own router that brings some awesome innovation
            to this often overlooked (but important) part of{' '}
            <span className="whitespace-nowrap">your app.</span>
            <strong>Named routes</strong> let you reference a route by a name
            you define,
            <strong>route param types</strong> take care of coercing values
            based on data type or custom functions,{' '}
            <span className="whitespace-nowrap">and more.</span>
          </p>
        </div>
      </section>

      <div className="flex w-36 mx-auto">
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
      </div>

      <section className="md:flex mt-24 max-w-screen-lg mx-auto">
        <div className="md:w-2/5 pr-4 text-right">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">Cells</h3>
          <p className="my-3">
            The sequence of retrieving data from an API, showing a loading
            placeholder, and then displaying the result is so common that
            Redwood codifies it into a declarative code pattern, resulting in
            simple and <span className="whitespace-nowrap">readable code!</span>
          </p>
          <p className="my-3">
            We call them <strong>cells</strong> and they contain the GraphQL
            query, loading, empty, error, and success states, each one rendering
            itself automatically depending on what state your cell{' '}
            <span className="whitespace-nowrap">is in.</span>
          </p>
        </div>
        <div className="md:w-3/5 md:pl-4 mt-4 md:mt-0">
          <pre className="overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="javascript"
              data-target="application.code"
            >{`// web/src/components/UsersCell/UsersCell.js
export const QUERY = gql\`
query USERS {
  users {
    id
    name
  }
}
\`
export const Loading = () => <div>Loading users...</div>
export const Empty = () => <div>No users yet!</div>
export const Failure = ({ message }) => <div>Error: {message}</div>
export const Success = ({ users }) => {
  return (
    <ul>
      { users.map(user => (
        <li>{user.id} | {user.name}</li>
      ))}
    </ul>
  )
}`}
            </code>
          </pre>
        </div>
      </section>

      <div className="flex w-36 mx-auto">
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
      </div>

      <section className="md:flex mt-24 max-w-screen-lg mx-auto">
        <div className="md:w-3/5 md:pr-4 mt-4 md:mt-0">
          <pre className="overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="javascript"
              data-target="application.code"
            >{`// api/src/graphql/users.sdl.js

export const schema = gql\`
  type User {
    id: Int!
    name: String!
  }
  type Query {
    users: [User]
  }
\``}
            </code>
          </pre>

          <pre className="mt-2 overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="javascript"
              data-target="application.code"
            >{`// api/src/services/users/users.js

import { db } from 'src/lib/db'

export const users = () => db.user.findMany()
</code></pre>

    <pre class="mt-2 border border-red-200 rounded-lg"><code class="javascript" data-target="application.code">// web/src/components/UsersCell/UsersCell.js

export const QUERY = gql\`
  query USERS {
    users {
      id
      name
    }
  }
\`
export const Success = ({ users }) => {
  return JSON.stringify(users)
}`}
            </code>
          </pre>
        </div>
        <div className="md:w-2/5 pl-4">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">
            Services
          </h3>
          <p className="my-3">
            Redwood puts all your business logic in one place—
            <strong>Services</strong>. These can be used by your GraphQL API or
            any other place in your backend code. Redwood does all of the
            annoying stuff <span className="whitespace-nowrap">for you.</span>
          </p>
          <p></p>
          <p className="my-3">
            Check out how easy it is to create and consume a GraphQL endpoint
            (we didn't even omit any other
            <code className="bg-red-200 text-red-600 font-mono text-sm px-1 py-half rounded">
              import
            </code>
            statements or cheat to get the code smaller,{' '}
            <span className="whitespace-nowrap">honest!).</span>
          </p>
        </div>
      </section>

      <div className="flex w-36 mx-auto">
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
      </div>

      <section className="md:flex mt-24 max-w-screen-lg mx-auto">
        <div className="md:w-2/5 pr-4 text-right">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">
            CLI Tools
          </h3>
          <p className="my-3">
            Even with a relentless elimination of boilerplate, Redwood files
            still need a bit of code to get you started, and need to be created
            in the right directories. No problem, let a computer do that{' '}
            <span className="whitespace-nowrap">for you!</span>
          </p>
          <p className="my-3">
            Redwood contains several <strong>generators</strong> which create
            the shell of cells, pages, layouts, services, as well as{' '}
            <strong>installers</strong> for TailwindCSS, authentication
            libraries and even{' '}
            <span className="whitespace-nowrap">deploy targets.</span>
          </p>
        </div>
        <div className="md:w-3/5 md:pl-4 mt-4 md:mt-0">
          <pre className="overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="bash"
              data-target="application.code"
            >{`# Create a cell for Users
$ yarn rw generate cell User

# Create a homepage and set the URL to /
$ yarn rw generate page Home /

# Read the DB schema and create the SDL file for the User table
$ yarn rw generate sdl User

# Create the SDL, service, cells, pages and components to CRUD a User
$ yarn rw generate scaffold User

# Install and configure TailwindCSS
$ yarn rw setup tailwind

# Install and configure Auth0 for login/signup
$ yarn rw setup auth Auth0

# Configure deployment to Netlify
$ yarn rw setup deploy netlify`}
            </code>
          </pre>
        </div>
      </section>

      <div className="flex w-36 mx-auto">
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
        <img src="/images/logo.svg" className="mt-24 w-8 mx-auto" alt="divider" />
      </div>

      <section className="md:flex mt-24 max-w-screen-lg mx-auto">
        <div className="md:w-3/5 md:pr-4 mt-4 md:mt-0">
          <pre className="overflow-x-scroll text-xs border border-red-200 rounded-lg p-4">
            <code
              className="javascript"
              data-target="application.code"
            >{`// web/src/components/Comment/Comment.js
import { Form, Label, TextAreaField, FieldError, Submit } from "@redwoodjs/web"

export const Comment = () => {
  const onSubmit = (data) => {
    console.info(\`Submitted: \${data}\`)
  }
  return (
    <Form onSubmit={onSubmit}>
      <Label name="comment" errorStyle={{ color: "red" }} />
      <TextAreaField
        name="comment"
        errorStyle={{ borderColor: "red" }}
        validation={{ required: true }}
      />
      <FieldError name="comment" errorStyle={{ color: "red" }} />
      <Submit>Send</Submit>
    </Form>
  )
}`}
            </code>
          </pre>
        </div>
        <div className="md:w-2/5 pl-4 text">
          <h3 className="text-2xl text-red-700 font-bold tracking-tight">Forms</h3>
          <p className="my-2">
            Working with forms is notoriously annoying in React apps. Redwood
            removes the complexity and gives you the freedom to work with
            regular HTML inputs, but sprinkled with a bit of validation and
            error handling. Show client and server-side errors automatically and
            style them like any other{' '}
            <span className="whitespace-nowrap">React component.</span>
          </p>
        </div>
      </section>

      <section className="mt-12 py-36 text-center bg-red-800"
      style={{
        backgroundImage:
          "url('/images/logo-outline.svg'), linear-gradient(#682712, #84331b)",
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}>
        <p className="text-white text-3xl font-light tracking-tight">
          Ready to start learning RedwoodJS?
        </p>
        <div className="flex justify-center">
          <a
            href="https://learn.redwoodjs.com/docs/tutorial/welcome-to-redwood"
            className="mt-6 button no-underline"
          >
            Start the Tutorial
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage
