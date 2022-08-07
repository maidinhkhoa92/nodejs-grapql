import { buildSchema } from 'graphql'

export default buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        createdAt: String!
        updatedAt: String!
    }
    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }
    input PostInputData {
        title: String!
        content: String!
        imageUrl: String!
    }
    type RootQuery {
        posts(page: Int): PostData!
        post(id: ID!): Post!
    }
    type RootMutation {
        createPost(postInput: PostInputData): Post!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);