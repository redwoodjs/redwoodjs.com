export const schema = gql`
  type UrlAnalytics {
    count: Int!
    status_code: Int!
    url: String!
  }

  type JobViews {
    count: Int!
  }

  type Query {
    urlAnalytics: [UrlAnalytics!]! @skipAuth
    jobViewAnalytics(id: Int!): JobViews! @skipAuth
  }
`

//@requireAuth(roles: ["admin"])
