import { createYoga, createSchema } from "graphql-yoga"
import type { NextApiRequest, NextApiResponse } from "next"
 
export const config = {
  api: {
    bodyParser: false
  }
}
 
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      greetings: String
    }
  `,
  resolvers: {
    Query: {
      greetings: () => "This is the `greetings` field of the root `Query` type"
    }
  }
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // @ts-ignore
  schema,
  graphqlEndpoint: "/api/graphql"
})
