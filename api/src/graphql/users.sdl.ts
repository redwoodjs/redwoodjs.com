export const schema = gql`
  type User {
    id: Int!
    email: String!
    roles: [Roles]!
  }

  enum Roles {
    admin
    editor
    translator
    candidate
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    roles: [Roles]!
  }
  input UpdateUserInput {
    email: String
    roles: [Roles]!
  }

  type Mutation {
    createUser(input: CreateUserInput): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
