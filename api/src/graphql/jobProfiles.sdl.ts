export const schema = gql`
  type JobProfile {
    id: Int!
    email: String!
    portfolioUrl: String!
    name: String!
    photo: String!
    status: String!
    title: String!
    locations: [String!]!
    about: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    jobProfiles(limit: Int): [JobProfile!]! @skipAuth
    jobProfile(id: Int!, token: String): JobProfile! @skipAuth
  }

  input CreateJobProfileInput {
    email: String!
    portfolioUrl: String!
    name: String!
    photo: String!
    title: String!
    locations: [String!]!
    about: String!
    status: String!
  }

  input UpdateJobProfileInput {
    email: String
    portfolioUrl: String
    name: String
    photo: String
    status: String
    title: String
    locations: [String]
    about: String
  }

  type Mutation {
    createJobProfile(input: CreateJobProfileInput!): JobProfile! @skipAuth
    updateJobProfile(
      id: Int!
      token: String!
      input: UpdateJobProfileInput!
    ): JobProfile! @skipAuth
    deleteJobProfile(id: Int!): JobProfile! @requireAuth
  }
`
