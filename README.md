# redwoodjs.com

This repo contains the latest iteration of redwoodjs.com, redesiged for our v1.0 launch in late March 2022. If you'd like to help contribute, get in touch in our [Discord](https://discord.gg/jjSYEQd) or [Discourse](https://community.redwoodjs.com/)!

## Development Quick Start

### Database

Setup your local database and seed any required data:

```bash
yarn rw prisma migrate dev
```

### .env

You'll need to create a `.env` file containing at least a `SESSION_SECRET` var for dbAuth. To generate this secret:

```bash
yarn rw g secret
```

### Account Creation

Start the dev server:

```bash
yarn rw dev
```

And then go to [http://localhost:8910/signup](http://localhost:8910/signup) to create an account.
