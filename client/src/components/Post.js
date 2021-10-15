import React from "react";
import { Flex, Box, Avatar, Text} from "@chakra-ui/react"; 
import {EditIcon} from "@chakra-ui/icons";
import '../App.css';
//Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)


function Post() {
    return (
        <Flex width="80%" direction="row" alignItems="center" justify="start" p={8}>
            <Avatar size="lg" border="1px" name="Prosper Otemuyiwa (Enter name of user here)" src="https://bit.ly/prosper-baba" mr={1} />{" "}
            <Box bg="gray.700" border="1px" p={4} rounded={8} className="post-container">
                <Box className="post-date" bg="cyan.900" p={1} rounded={8} border="1px" mt={3}>
                    <Text > 
                        XX:XX on XXX XX, XXXX
                    </Text>
                </Box>
                <Box as="button" p={1} bg="cyan.900" rounded={8} border="1px" className="post-editBtn">
                    <EditIcon />
                </Box>
                <Box border="1px" bg="teal.800" rounded={8} m={2} p={5}>Message Box with extra stuff</Box>
            </Box>
        </Flex>
    )
};

export default Post;