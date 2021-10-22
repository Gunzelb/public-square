import React from 'react';
import moment from 'moment';

import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar, Text } from '@chakra-ui/react';

const PostList = ({ posts, editPost, modalHeader, handleInputChange, 
  deletePostHandler, handleSubmit, onChangeMessage }) => {
  if (!posts.length) {
    return (
      <Text fontSize="xl" marginLeft="25px">No Posts Yet</Text>
    )
  }

  return (
    <div>
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
          </div>
        ))}
    </div>
  );
};

export default PostList;
