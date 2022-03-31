export const schema = gql`
  type StartupCTA {
    href: String!
    title: String!
  }

  type StartupQuestionResponse {
    question: String!
    response: String!
  }

  type Startup {
    #
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    #
    about: String
    achievements: [String!]!
    cta: StartupCTA!
    images: [String!]!
    name: String!
    published: Boolean!
    questionResponses: [StartupQuestionResponse!]!
    slug: String!
    tagline: String!
    technologies: [String!]!
    thumbnail: String!
    token: String!
    videos: [String!]!
    #
    socialLinks: [SocialLink!]!
  }

  type Query {
    ListStartups(onlyPublished: Boolean = true): [Startup!]! @skipAuth
    GetStartup(slug: String!): Startup @skipAuth
  }

  input StartupCTAInput {
    href: String!
    title: String!
  }

  input StartupQuestionResponseInput {
    question: String!
    response: String!
  }

  input CreateStartupInput {
    about: String
    achievements: [String!]!
    cta: StartupCTAInput!
    images: [String!]!
    name: String!
    published: Boolean!
    questionResponses: [StartupQuestionResponseInput!]!
    tagline: String!
    technologies: [String!]!
    thumbnail: String!
    videos: [String!]!
    socialLinks: [CreateSocialLinkInput!]!
  }

  input UpdateStartupInput {
    about: String
    achievements: [String!]
    cta: StartupCTAInput
    images: [String!]
    name: String
    published: Boolean
    questionResponses: [StartupQuestionResponseInput!]
    tagline: String
    technologies: [String!]
    thumbnail: String
    videos: [String!]
  }

  type Mutation {
    CreateStartup(input: CreateStartupInput!): Startup!
      @requireAuth(roles: "admin")
    UpdateStartup(
      slug: String!
      token: String!
      input: UpdateStartupInput!
    ): Startup! @skipAuth
    DeleteStartup(id: Int!): Startup! @requireAuth(roles: "admin")
  }
`
