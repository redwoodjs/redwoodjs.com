export const schema = gql`
  enum SocialLinkPlatform {
    discord
    github
    linkedin
    productHunt
    twitter
  }

  type SocialLink {
    # Meta
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    # Data
    link: String!
    platform: SocialLinkPlatform!
    # Relations
    author: Author
    authorId: Int
    showcase: Author
    showcaseId: Int
  }

  input CreateSocialLinkInput {
    # Data
    link: String!
    platform: SocialLinkPlatform!
  }

  input SyncSocialLinkInput {
    # Meta
    id: Int
    # Data
    link: String!
    platform: SocialLinkPlatform!
  }

  type Mutation {
    SyncAuthorSocialLinks(
      id: Int!
      input: [SyncSocialLinkInput!]!
    ): SocialLink! @requireAuth
    SyncShowcaseSocialLinks(
      id: Int!
      input: [SyncSocialLinkInput!]!
    ): SocialLink! @requireAuth
    SyncStartupSocialLinks(
      slug: String!
      token: String!
      input: [SyncSocialLinkInput!]!
    ): SocialLink! @skipAuth
  }
`
