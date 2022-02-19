export const schema = gql`
  type Showcase {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    isPublished: Boolean!
    type: ApplicationType!
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

  enum ApplicationType {
    sample
    startup
    module
  }

  input ExamplesInput {
    type: String
    isHighlight: Boolean
  }

  type Query {
    showcases: [Showcase!]! @requireAuth
    showcase(id: Int!): Showcase @requireAuth
    examples(input: ExamplesInput): [Showcase] @skipAuth
  }

  input CreateShowcaseInput {
    isPublished: Boolean!
    type: ApplicationType!
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
    type: ApplicationType
    link: String
    label: String
    title: String
    subtitle: String
    source: String
    description: String
    mediaId: Int
    productHunt: String
  }

  type Mutation {
    createShowcase(input: CreateShowcaseInput!): Showcase! @requireAuth
    updateShowcase(id: Int!, input: UpdateShowcaseInput!): Showcase!
      @requireAuth
    deleteShowcase(id: Int!): Showcase! @requireAuth
  }
`
