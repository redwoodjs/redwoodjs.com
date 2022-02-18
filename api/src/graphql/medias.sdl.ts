export const schema = gql`
  type Media {
    id: Int!
    url: String!
    type: MediaType!
    author: Author
    showcase: Showcase
  }

  enum MediaType {
    video
    picture
  }

  type Query {
    medias: [Media!]! @requireAuth
    media(id: Int!): Media @requireAuth
  }

  input CreateMediaInput {
    url: String!
    type: MediaType!
  }

  input UpdateMediaInput {
    url: String
    type: MediaType
  }

  type Mutation {
    createMedia(input: CreateMediaInput!): Media! @requireAuth
    updateMedia(id: Int!, input: UpdateMediaInput!): Media! @requireAuth
    deleteMedia(id: Int!): Media! @requireAuth
  }
`
