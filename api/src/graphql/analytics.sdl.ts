export const schema = gql`
  type UrlViews {
    count: Int!
    status_code: Int!
    url: String!
  }

  type JobViews {
    count: Int!
  }

  type Query {
    urlViews: [UrlViews!]! @skipAuth
    jobViews(id: Int!): JobViews! @skipAuth
  }
`

//@requireAuth(roles: ["admin"])
