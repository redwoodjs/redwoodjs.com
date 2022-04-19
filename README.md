# redwoodjs.com

This repo contains the latest iteration of redwoodjs.com, redesiged for our v1.0 launch in late March 2022. If you'd like to help contribute, get in touch in our [Discord](https://discord.gg/redwoodjs) or [Discourse](https://community.redwoodjs.com/)!

## Development Quick Start

Start by installing dependencies.

```bash
yarn
```

### .env

You'll need to create a `.env` file. Start with this in the file:

```
DATABASE_URL=
SESSION_SECRET=
```

Go to https://railway.app and provision a new Postgres database. Switch to "Connect" tab and copy "Postgres Connection URL". Paste that as the `DATABASE_URL`. If you don't want to use Railway, you can use a local Postgres.

The `SESSION_SECRET` var is required for dbAuth. To generate this secret:

```bash
yarn rw g secret
```

Paste that as the `SESSION_SECRET`.

### Database

Setup the database and seed any required data:

```bash
yarn rw prisma migrate dev
```

### Account Creation

Start the dev server:

```bash
yarn rw dev
```

And then go to [http://localhost:8910/signup](http://localhost:8910/signup) to create an account.
