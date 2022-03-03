export const schema = gql`
  type Job {
    id: Int!
    token: String!
    email: String!
    applyUrl: String!
    company: String!
    logo: String!
    title: String!
    locations: String!
    compensation: String!
    perks: String!
    aboutJob: String!
    aboutApplicant: String!
    aboutCompany: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    jobs: [Job!]! @skipAuth
    job(id: Int!): Job @skipAuth
  }

  input CreateJobInput {
    token: String!
    email: String!
    applyUrl: String!
    company: String!
    logo: String!
    title: String!
    locations: String!
    compensation: String!
    perks: String!
    aboutJob: String!
    aboutApplicant: String!
    aboutCompany: String!
  }

  input UpdateJobInput {
    token: String
    email: String
    applyUrl: String
    company: String
    logo: String
    title: String
    locations: String
    compensation: String
    perks: String
    aboutJob: String
    aboutApplicant: String
    aboutCompany: String
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
