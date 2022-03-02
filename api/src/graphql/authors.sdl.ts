export const schema = gql`
  type Author {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    firstname: String!
    lastname: String!
    email: String
    isEmailPublic: Boolean!
    pronoun: Pronoun!
    companyName: String
    companyUrl: String
    avatar: Media
    avatarId: Int
    socialLinks: [SocialLink!]!
  }

  enum Pronoun {
    they
    he
    she
  }

  type Query {
    authors: [Author!]! @requireAuth
    author(id: Int!): Author @requireAuth
  }

  input CreateAuthorInput {
    firstname: String!
    lastname: String!
    email: String
    isEmailPublic: Boolean!
    pronoun: Pronoun!
    companyName: String
    companyUrl: String
    avatarId: Int
    socialLinks: [CreateSocialLinkInput!]!
  }

  input UpdateAuthorInput {
    firstname: String
    lastname: String
    email: String
    isEmailPublic: Boolean
    pronoun: Pronoun
    companyName: String
    companyUrl: String
    avatarId: Int
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): Author! @requireAuth
    updateAuthor(id: Int!, input: UpdateAuthorInput!): Author! @requireAuth
    deleteAuthor(id: Int!): Author! @requireAuth
  }
`
