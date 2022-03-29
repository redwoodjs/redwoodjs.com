export const schema = gql`
  type ShowcaseLocalization {
    id: Int!
    showcaseId: Int!
    showcase: Showcase!
    isValid: Boolean!
    language: Language!
    title: String
    subtitle: String
    description: String!
  }

  enum Language {
    eng
    fra
  }

  type Query {
    showcaseLocalizations: [ShowcaseLocalization!]! @requireAuth
    showcaseLocalization(id: Int!): ShowcaseLocalization @requireAuth
  }

  input CreateShowcaseLocalizationInput {
    showcaseId: Int!
    isValid: Boolean!
    language: Language!
    title: String
    subtitle: String
    description: String!
  }

  input UpdateShowcaseLocalizationInput {
    isValid: Boolean
    language: Language
    title: String
    subtitle: String
    description: String
  }

  type Mutation {
    createShowcaseLocalization(
      input: CreateShowcaseLocalizationInput!
    ): ShowcaseLocalization! @requireAuth
    updateShowcaseLocalization(
      id: Int!
      input: UpdateShowcaseLocalizationInput!
    ): ShowcaseLocalization! @requireAuth
    deleteShowcaseLocalization(id: Int!): ShowcaseLocalization! @requireAuth
  }
`
