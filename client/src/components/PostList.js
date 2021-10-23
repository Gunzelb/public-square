import React from 'react';

import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar, Text, Heading } from '@chakra-ui/react';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return (
      <Flex direction="column" alignContent="start" width="100%">
        <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
        <Text fontSize="xl" marginLeft="25px">No Posts Yet</Text>
      </Flex>
    )
  }
  // let datecreated = moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <Flex direction="column" alignContent="start" width="100%">
      <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
      {posts &&
        posts.map(post => (
          <div key={post._id}>
            <Flex
              direction="row"
              alignItems="start"
              justify="start"
              justifySelf="start"
              p={6}
              textAlign="start"
            >
              <Avatar size="md" border="1px" name={post.postAuthor} mr={1} />{' '}
              <StyleColorMode
                post_id={post._id}
                message={post.postText}
                date={post.createdAt}
                isPrivate={post.private}
                comments={post.comments}
              />
            </Flex>
          </div>
        ))}
    </Flex>
  );
};

export default PostList;
