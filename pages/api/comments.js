import { GraphQLClient, gql } from 'graphql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(req, res) {
    const {name, email, comment, slug} = req.body
  const graphqlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
    },
  })
  const query = gql`
    mutation CreateComment($name: string!, $email: string!, $comment: string!, $slug: string!) {
        createComment(input: { name: $name, email: $email, comment: $comment, post: slug: {connect {$slug }}}) {id}
    }
    `
    const result = await graphqlClient.request(query, req.body)
    return res.status(200).send(result)
    
}
