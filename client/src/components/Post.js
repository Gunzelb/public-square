import React from "react";
import { Flex, Box, Container, Avatar } from "@chakra-ui/react";
//Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)


function Post() {
    return (
        <Flex direction="row" alignItems="center" justifyContent="center">
            <Avatar size="lg" border="1px" name="Prosper Otemuyiwa (Enter name of user here)" src="https://bit.ly/prosper-baba" mr={4} />{" "}
            <Container width="container.lg" border="1px" p={4} rounded={8}>
                <Box rounded={8} border="1px"> XX:XX on XXX XX, XXXX </Box>
                
            </Container>
        </Flex>
    )
};

export default Post;