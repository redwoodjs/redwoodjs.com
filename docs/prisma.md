# Prisma According to Redwood

<!-- TODO -->
<!-- Intellisense section? Why doesn't it show up? -->

> **TLDR:** We think we can actually boil down this doc to this one piece of actionable advice: to grok the Prisma Client, you've got to really get to know and love `index.d.ts` in `node_modules/.prisma/client`.
>
> As the Prisma docs say, "Prisma Client is an auto-generated and type-safe query builder that's tailored to your data". But where do those types (which, crucially, _double as your docs_) actually live? In Redwood apps, the answer is in `index.d.ts`, in `.prisma/client`, in `node_modules`. 
>
> As JS developers, it's not often that we go near `node_modules` (and when we do, it's usually because something broke hard). But with Prisma Client, things are different. Don't be afraid to dig into this file.
>
> Really, you have to!

<!-- you need to 1) embrace types and TypeScript (embrace&mdash;not love, not even really know, just, you've got to open to them) and 2) run `yarn rw db generate` and go checkout `node_modules/.prisma/client/index.d.ts`. If anything, no. 2) is the most important. You've got to know and be familiar with this file&mdash;it's your (literally your, custom-tailored) docs for Prisma Client's CRUD operations. -->

Prisma is one of Redwood's core technologies. Prisma itself comprises many technologies. Right now, Redwood uses Prisma Client, Migrate, and Studio. Of those, Client is the only one that is Generally Available. It's also the one that's most important for you to really grok.

This doc isn't a substitute for actually reading the Prisma docs. But it can point you to the right places in the Prisma docs (because surely you don't have to read all of them) and make Prisma's place in Redwood apps super clear.

Did you read the TLDR?

## Reading The Prisma Docs (or Not)

The part of the Prisma docs that you'll probably be referencing the most is [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client). Specifically, its [CRUD](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud) section.

But when you get there, things still might not be all that clear (depending on how much you <3 TypeScript). For example, consider the read operation `findOne`:

![rw-prisma-docs](https://user-images.githubusercontent.com/32992335/86544318-cb3ad580-beda-11ea-93a2-54b306b0b9a3.png)

After reading this, if you're like me, you'll have to think for a second: "findOne takes an object with one of the following types". Ok, that means if we have a model named `User` in our `schema.prisma`, we'd call `findOne` like this:

```javascript
await db.user.findOne({
  where: ...
  select: ...
  include: ...
})
```

Where we have to supply `where`, but can optionally supply `select` and `include`.

The docs say that `where` has a type of `UserWhereUniqueInput`, and they say what that is (an object that has the shape `id: number | null` and `email: string | null`), so we could do:

```javascript{2}
await db.user.findOne({
  where: { id: 1 }
  select: ...
  include: ...
})
```

But what about `UserSelect` and `UserInclude`, the types for `select` and `include`&mdash;where are they defined?

<!-- To their point, Prisma Client is always tailored. But even one example would help, since the basic pattern of CRUD operations is pretty much the same, no matter what your schema is. -->
Seemingly, not in the docs. Hence, this tirade and my (initial) gripe: the Prisma docs conflate auto-generating types with writing docs. 

But, that's actually exactly the point (and why you won't even be having these questions if you already <3 TypeScript): the types are the docs. So, to really grok Prisma Client, you have to embrace types and TypeScript. And once you do, you'll kind of never have to read the docs again, because _your_ Prisma Client's docs are in a file called `index.d.ts`.

## Prisma's Place in a Redwood App

[todo]

The Prisma-related files and directories in a Redwood app are:

| File or Directory             | Description                                                      |
| :---------------------------- | :--------------------------------------------------------------- |
| `api/prisma`                  | This includes your schema, migrations, and seed file (`seed.js`) |
| `api/src/lib/db.js`           | Your services' way of talking to the database                    |
| `node_modules/.prisma/client` | Where your very own Prisma Client lives                          |

<!-- - **Everything in `api/prisma`:** This includes your schema, migrations, and seed file (`seed.js`)
- **`db.js` in `api/src/lib`:** Basically your services' way of accessing the database
- **`.prisma/client` in `node_modules`:** Where your very own Prisma Client lives -->

The last one is subtle, hidden, and counterintuitive. You'd have to know what Prisma Client is all about to go looking for it. But it's something you really should know about, as it contains all your types. Aka, your docs (for CRUD operations).

But conceptually speaking, Prisma's place in a Redwood app (well, Prisma Client's place at least) is as your GraphQL API's resolvers.

## Configuring Your Prisma Client

[todo]

You can configure your Prisma Client in `api/src/lib/db.js` (here the relevant Prisma docs are **Reference** > **Tools & Interface** > **Prisma Client** > [Constructor](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor)):

```javascript{5}
// api/src/lib/db.js

import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()
```

> **NOTE:** changes made to this Prisma Client don't apply to `yarn rw db seed`, which instantiates its own Prisma Client (which you can configure in `api/prisma/seed.js`).

We don't do any configuring for you out of the box. All `db.js` does is instantiate the Prisma Client as `db` and export it (for your services&mdash;it's what they use to talk to the database).

The only options there really are to configure are `errorFormat` and `log`. By default, `errorFormat` is set to `colorless` (which you can see in `node_modules/.prisma/client/index.d.ts`), which is the browser-friendliest format. Here's how errors look in scaffolds with this format:

![rw-db-error-colorless](https://user-images.githubusercontent.com/32992335/86541265-522e8480-bec0-11ea-9d21-fef517f27322.png)

Note that the same error is output in the terminal, and looks even nicer there:

![rw-db-terminal-error](https://user-images.githubusercontent.com/32992335/86541261-49d64980-bec0-11ea-9515-06ae78433a20.png)

(The error messages are really great. So read them!)

If you're really stuck and/or need to see what's going on at a more granular level for any reason, you can log anything you want with `log` + `db.on`:

```javascript
export const db = new PrismaClient({
  log: [{ emit: 'event', level: 'query' }],
})

db.on(...)
```

## Prisma Studio: a Prisma Client Playground

[todo: pictures, walkthrough]

As Siddhant Sinha [demoed](https://www.youtube.com/watch?v=Jq2ZR-3NYVg&feature=youtu.be&t=302) on Prisma Day, you can use Prisma Studio as a playground for your Prisma Client&mdash;basically the equivalent of GraphiQL for GraphQL.

![studio](https://user-images.githubusercontent.com/32992335/86546465-e3662100-bee9-11ea-8740-6099ff239598.png)

![studio-button-hover](https://user-images.githubusercontent.com/32992335/86546472-e8c36b80-bee9-11ea-9389-a928a33252d5.png)

![studio-button-click](https://user-images.githubusercontent.com/32992335/86546477-f1b43d00-bee9-11ea-8aea-ef96f9753f2d.png)

![studio-code](https://user-images.githubusercontent.com/32992335/86546483-f973e180-bee9-11ea-8247-f119e1957198.png)

<!-- ARCHIVE -->

<!-- ## Using seed.js to test CRUD operations

[todo]

While `seed.js` is for seeding your database, if you don't want to work in Prisma Studio for any reason, you can use `seed.js` to quickly try stuff out. -->

<!-- ## Example: User and Post

[todo]

> You can can download the redwood project here...

The canonical example is user and post...
We'll be using/copying the prisma quickstart models...

```javascript
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}
```

There's a one-to-many (m-n?) relationship here: a user can have many posts, but a post, only one user. This is at the "prisma" level. What does that mean? (Might need beekeper studio, etc at this point&mdash;install instructions for that/show other recommendations)

```
yarn rw db save
yarn rw db up
```

now run seed...

Your crud queries...

upsert...

seed.js for creating...

Mocking queries in studio. -->