import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query ($page: Int, $id: ID!) {
    posts (page: $page) {
      totalPosts
      posts {
        _id
        title
      }
    }
    post (id: $id) {
      _id
      title
    }
  }
`;
