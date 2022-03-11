export const schema = gql`
  type Job {
    id: Int!
    email: String!
    applyUrl: String!
    company: String!
    logo: String!
    title: String!
    locations: [String!]!
    compensation: [String!]!
    perks: [String!]!
    aboutJob: String!
    aboutApplicant: String!
    aboutCompany: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    jobs(limit: Int): [Job!]! @skipAuth
    job(id: Int!, token: String): Job! @skipAuth
  }

  input CreateJobInput {
    email: String!
    applyUrl: String!
    company: String!
    logo: String!
    title: String!
    locations: [String!]!
    compensation: [String!]!
    perks: [String!]!
    aboutJob: String!
    aboutApplicant: String!
    aboutCompany: String!
  }

  input UpdateJobInput {
    email: String
    applyUrl: String
    company: String
    logo: String
    title: String
    locations: [String!]
    compensation: [String!]
    perks: [String!]
    aboutJob: String
    aboutApplicant: String
    aboutCompany: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @skipAuth
    updateJob(id: Int!, token: String!, input: UpdateJobInput!): Job! @skipAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
