import { GraphQLClient, gql } from 'graphql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(req, res) {
  const graphqlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
    },
  })
}
