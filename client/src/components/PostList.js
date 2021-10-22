import React from 'react';
import moment from 'moment';

import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar } from '@chakra-ui/react';

const PostList = ({ posts, editPost }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
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
              />
            </Flex>
          </div>
        ))}
    </div>
  );
};

export default PostList;
