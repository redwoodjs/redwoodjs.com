# redwoodjs.com

This repo contains the latest iteration of redwoodjs.com, redesiged for our v1.0 launch in late March 2022. If you'd like to help contribute, get in touch in our [Discord](https://discord.gg/jjSYEQd) or [Discourse](https://community.redwoodjs.com/)!

## Development Quick Start

### Dependencies

Install required dependencies:

```bash
yarn install
```

### Environment

Create an `.env` file from `.env.example`:

```bash
cp .env.example .env
```

### Database

Setup your local database manually or using Docker:

**Option A: Manually**

1. Setup database
2. Enable and update `DATABASE_URL` and `TEST_DATABASE_URL` in `.env` with an appropriate connection string

**Option B: Docker**

Start Postgres server using docker-compose:

```bash
docker-compose up -d
```

### Seeding

Seed the database:

```bash
yarn rw prisma migrate dev
```

### Secret

Update your `.env` file to contain at least a `SESSION_SECRET` var for dbAuth. To generate this secret:

```bash
yarn rw g secret
```

### Account Creation

Start the dev server:

```bash
yarn rw dev
```

And then go to [http://localhost:8910/signup](http://localhost:8910/signup) to create an account.
