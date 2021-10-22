/* 
This file is for the sole purpose of customizing the Chakra components to fit our
dark/light themes of the Post
*/

//Imports
import React from "react";
import { useColorModeValue, Text, Flex} from "@chakra-ui/react"; //Box,
import { Badge } from "@chakra-ui/react"
import Comment from "../Comment";
import AddComment from "../AddComment";
import EditPostModal from "../EditPostModal";

function StyleColorMode({ 
    post_id, 
    date, 
    message, 
    isPrivate, 
    comments, 
    editPost, 
    modalHeader, 
    handleInputChange, 
    deletePostHandler, 
    handleSubmit, 
    onChangeMessage  
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

        {comments.map((comment, i) => (
          <Comment
            key={i}
            name={comment.commentAuthor}
            message={comment.commentText}
            bg={comment_bg}
          />
        ))}

                <Text className="post-date" bg={bg} p={1} rounded={8} border="1px" mt={3}>
                    {date}
                </Text>
                {
                    !(isPrivate) ? 
                    <Badge width="max-content" alignSelf="end" mb={2} colorScheme="green" >Public</Badge> 
                    : <Badge width="max-content"  alignSelf="end" mb={2} colorScheme="red">Private</Badge>}
                <Text border="1px" align="start" bg={bg} rounded={8} m={2} p={2}>
                    {message}
                </Text>

                {
                    comments.map((comment, i) => (<Comment key={i} name={comment.name} message={comment.message} bg={comment_bg} />))
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
                    {/* <Button  className="post-editBtn" size="sm" bg={bg} variant="solid" onClick={(e) => {editPost(e, post_id, isPrivate)}}> <EditIcon /></Button> */}
                    <EditPostModal 
                        post_id={post_id} 
                        message={onChangeMessage} 
                        isPrivate={isPrivate} 
                        editPost={editPost} 
                        modalHeader={modalHeader} 
                        handleInputChange={handleInputChange} 
                        deletePostHandler={deletePostHandler}
                        handleSubmit={handleSubmit} 
                    />
                </Flex>

            </Flex>
        </>
    );
}

export default StyleColorMode;
