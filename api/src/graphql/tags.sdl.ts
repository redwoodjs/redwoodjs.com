export const schema = gql`
  type Tag {
    id: Int!
    label: String!
    link: String!
    showcases: [Showcase]
  }

  type Query {
    tags: [Tag!]! @skipAuth
    tag(id: Int!): Tag @requireAuth
  }

  input CreateTagInput {
    label: String!
  }

  input UpdateTagInput {
    label: String
    showcaseId: Int
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: Int!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: Int!): Tag! @requireAuth
  }
`
