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
    description: String!
    media: Media
    mediaId: Int
    socialLinks: [SocialLink]
    tags: [Tag]!
    localizations: [ShowcaseLocalization]
  }

  input ExamplesInput {
    tag: String
  }

  type Query {
    showcases: [Showcase!]! @skipAuth
    showcase(id: Int!): Showcase @skipAuth
    showcaseJobs(company: String!): [Job!]! @skipAuth
    examples(input: ExamplesInput, language: String): [Showcase]
      @skipAuth
      @translate
  }

  input CreateShowcaseInput {
    isPublished: Boolean!
    link: String!
    label: String
    title: String
    subtitle: String
    description: String!
    imageUrl: String
    socialLinks: [CreateSocialLinkInput!]!
  }

  input UpdateShowcaseInput {
    isPublished: Boolean
    link: String
    label: String
    title: String
    subtitle: String
    description: String
    imageUrl: String
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
