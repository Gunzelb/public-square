/* 
This file is for the sole purpose of customizing the Chakra components to fit our
dark/light themes of the Post
*/

//React
import React from 'react';

//Components
import Comment from '../Comment';
import AddComment from '../AddComment';
import EditPostModal from '../EditPostModal';

//Chakra Components and Hooks
import { useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';




function StyleColorMode({
  post_id,
  date,
  message,
  isPrivate,
  comments,
  deletePostHandler,
}) {
  const bg = useColorModeValue('cyan.200', 'cyan.800');
  const bg_gray = useColorModeValue('gray.200', 'gray.700');
  const comment_bg = useColorModeValue('gray.300', 'gray.600');

  return (
    <>
      <Flex
        direction="column"
        bg={bg_gray}
        border="1px"
        p={4}
        rounded={8}
        className="post-container"
      >
        <Text
          className="post-date"
          bg={bg}
          p={1}
          rounded={8}
          border="1px"
          mt={3}
        >
          {date}
        </Text>
        {!isPrivate ? (
          <Badge width="max-content" alignSelf="end" mb={2} colorScheme="green">
            Public
          </Badge>
        ) : (
          <Badge width="max-content" alignSelf="end" mb={2} colorScheme="red">
            Private
          </Badge>
        )}
        <Text border="1px" align="start" bg={bg} rounded={8} m={2} p={2}>
          {message}
        </Text>
        {(comments.length > 0) && (comments.map((comment, i) => (
          <Comment
            key={i}
            name={comment.name}
            message={comment.message}
            bg={comment_bg}
          />
          )))
        }
        <Flex ms={3} justifySelf="start" direction="column" mt={5}>
          <AddComment
            display="block"
            bg={bg}
            comment_bg={comment_bg}
            border="1px"
            comments={comments}
          />
        </Flex>
        <Flex justifyContent="end">
          <EditPostModal
            post_id={post_id}
            message={message}
            deletePostHandler={deletePostHandler}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default StyleColorMode;
