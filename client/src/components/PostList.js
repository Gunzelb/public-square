import React from 'react';
import moment from 'moment';

import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar, Text, Heading } from '@chakra-ui/react';

const PostList = ({ posts, editPost, modalHeader, handleInputChange,
  deletePostHandler, handleSubmit, onChangeMessage }) => {
  if (!posts.length) {
    return (
      <Flex direction="column" alignContent="start" width="100%">
        <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
        <Text fontSize="xl" marginLeft="25px">No Posts Yet</Text>
      </Flex>
    )
  }

  return (
    <Flex direction="column" alignContent="start" width="100%">
      <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
      {posts &&
        posts.map(post => (
          // <div >
          <Flex
            key={post._id}
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
              date={moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              isPrivate={post.private}
              comments={post.comments}
              editPost={editPost}
              modalHeader={modalHeader}
              handleInputChange={handleInputChange}
              deletePostHandler={deletePostHandler}
              handleSubmit={handleSubmit}
              onChangeMessage={onChangeMessage}
            />
          </Flex>
          // </div>
        ))}
    </Flex>
  );
};

export default PostList;
