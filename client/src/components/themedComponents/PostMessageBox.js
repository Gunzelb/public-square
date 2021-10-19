/* 
This file is for the sole purpose of customizing the Chakra components to fit our
dark/light themes of the Post
*/

//Imports
import React from "react";
import { useColorModeValue, Box, Text, Flex, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Comment from "../Comment";
import AddComment from "../AddComment";

function StyleColorMode({ date, message, isPrivate, comments, editPost}) {

    const bg = useColorModeValue("cyan.200", "cyan.800");
    const bg_gray = useColorModeValue("gray.200", "gray.700");
    const comment_bg = useColorModeValue("gray.300", "gray.600");

    return (
        <>
            <Box bg={bg_gray} border="1px" p={4} rounded={8} className="post-container">

                <Text className="post-date" bg={bg} p={1} rounded={8} border="1px" mt={3}>
                    {date}
                </Text>
                <Text border="1px" align="start" bg={bg} rounded={8} m={2} p={2}>
                    {message}
                </Text>

                {
                    comments.map((comment, i) => (<Comment key={i} name={comment.name} message={comment.message} bg={comment_bg} />))
                }
                
                <Flex ms={3} justifySelf="start" direction="column" mt={5}>  
                    <AddComment display="block" bg={bg} comment_bg={comment_bg} border="1px" comments={comments} />
                </Flex>
                <Flex justifyContent="end">
                    <Button  className="post-editBtn" size="sm" bg={bg} variant="solid" onClick={editPost}> <EditIcon /></Button>
                </Flex>

            </Box>
        </>
    );
}

export default StyleColorMode;

