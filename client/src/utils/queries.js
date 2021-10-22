import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
      private
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        private
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    users {
      firstName
      lastName
      username
      email
      posts {
        _id
        postText
        createdAt
        private
      }
      friends {
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      firstName
      lastName
      username
      email
      posts {
        _id
        postText
        createdAt
        private
        comments {
          commentText
          commentAuthor
        }
      }
      friends {
        username
      }
    }
  }
`;
