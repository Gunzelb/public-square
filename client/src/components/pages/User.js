// Import React
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

//Components
import AddPostModal from '../AddPostModal';
import PostList from '../PostList';

//Chakra Components
import { Box, Heading, Flex, VStack, Link } from '@chakra-ui/react'; // Text, VStack,

function User() {
  //
  let isMine = true;

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.user || data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <VStack alignContent="center">
        <h4>
          You must be logged in to access this page.
        </h4>
        <h4>
          <Link color="cyan.600" href="/login"> Login </Link>
          or
          <Link color="cyan.600" href="/signup"> Signup </Link>
        </h4>
      </VStack>
    );
  }

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn()) {
    if (Auth.getProfile().data.username === userParam) {
      isMine = true;
    }
    else {
      isMine = false;
    }
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
        <Heading as="h1" size="xl" marginLeft="25px" mb={5} textTransform='capitalize'>
          {userParam ? `${userParam}` : "Your"} Posts
          <hr style={{ 'margin-top': '25px' }} />
        </Heading>
        <PostList ms={1} posts={user.posts} page={false}/>
      </Flex>
    </>
  );
}

export default User;
