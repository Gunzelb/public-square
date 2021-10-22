// Import React
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

//Components
import PostList from '../PostList';
import AddPostModal from '../AddPostModal';

//Chakra Components
import { Box, Heading, Flex } from '@chakra-ui/react'; // Text, VStack,

function User() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You must be logged in to access this page. Please log in or sign up
        using the link above!
      </h4>
    );
  }

  return (
    <>
      <Box textAlign="center">
        <Heading textDecoration="underline" mb={2}>
          Post in the Square
        </Heading>
        {/* <Heading textDecoration="underline" mb={2}>Name Profile</Heading> */}
        <Flex justifyContent="center">
          {/* Add Post Modal renders the Private Post & Public Post buttons*/}
          <AddPostModal />
        </Flex>
      </Box>

      <Flex direction="column" alignContent="start" width="100%">
        <Heading
          textDecor="underline"
          as="h1"
          size="xl"
          marginLeft="25px"
          mb={5}
        >
          Posts
        </Heading>
        <PostList ms={1} posts={user.posts} />
      </Flex>
    </>
  );
}

export default User;
