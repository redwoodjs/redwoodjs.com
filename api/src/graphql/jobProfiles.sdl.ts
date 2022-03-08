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
    jobProfile(id: Int!): JobProfile @skipAuth
  }

  input CreateJobProfileInput {
    token: String!
    email: String!
    portfolioUrl: String!
    name: String!
    photo: String!
    status: String!
    title: String!
    locations: String!
    about: String!
  }

  input UpdateJobProfileInput {
    token: String
    email: String
    portfolioUrl: String
    name: String
    photo: String
    status: String
    title: String
    locations: String
    about: String
  }

  type Mutation {
    createJobProfile(input: CreateJobProfileInput!): JobProfile! @requireAuth
    updateJobProfile(id: Int!, input: UpdateJobProfileInput!): JobProfile!
      @requireAuth
    deleteJobProfile(id: Int!): JobProfile! @requireAuth
  }
`
