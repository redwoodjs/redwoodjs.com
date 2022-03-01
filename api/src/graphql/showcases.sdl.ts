export const schema = gql`
  type Showcase {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    isPublished: Boolean!
    link: String!
    label: String
    title: String
    subtitle: String
    source: String
    description: String!
    media: Media
    mediaId: Int
    productHunt: String
    tags: [Tag]!
  }

  input ExamplesInput {
    type: String
    tag: String
  }

  type Query {
    showcases: [Showcase!]! @skipAuth
    showcase(id: Int!): Showcase @skipAuth
    examples(input: ExamplesInput): [Showcase] @skipAuth
  }

  input CreateShowcaseInput {
    isPublished: Boolean!
    link: String!
    label: String
    title: String
    subtitle: String
    source: String
    description: String!
    mediaId: Int
    productHunt: String
  }

  input UpdateShowcaseInput {
    isPublished: Boolean
    link: String
    label: String
    title: String
    subtitle: String
    source: String
    description: String
    mediaId: Int
    productHunt: String
    tags: [Int]
  }

  input ConnectTagToShowcaseInput {
    tagId: Int!
  }

  type Mutation {
    createShowcase(input: CreateShowcaseInput!): Showcase! @requireAuth
    updateShowcase(id: Int!, input: UpdateShowcaseInput!): Showcase!
      @requireAuth
    deleteShowcase(id: Int!): Showcase! @requireAuth
    connectTagToShowcase(
      id: Int!
      input: ConnectTagToShowcaseInput!
    ): Showcase! @requireAuth
  }
`
