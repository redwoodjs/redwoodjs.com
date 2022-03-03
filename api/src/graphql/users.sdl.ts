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

  input UpdateUserInput {
    email: String
    roles: [Roles]!
  }

  type Mutation {
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
