import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $postText: String!
    $postAuthor: String!
    $private: Boolean!
  ) {
    addPost(postText: $postText, postAuthor: $postAuthor, private: $private) {
      _id
      postText
      postAuthor
      createdAt
      private
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost($postId: ID!, $postText: String!) {
    editPost(postId: $postId, postText: $postText) {
      post {
        _id
        postText
        postAuthor
        createdAt
        private
        comments {
          _id
          commentText
          commentAuthor
        }
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($username: String!) {
    addFriend(username: $username) {
      username
    }
  }
`;
