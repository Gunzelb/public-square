import React from "react";

//Components
import { Box, Text, Avatar, HStack } from "@chakra-ui/react";

function Comment({ name, message, bg }) {
    return (
        <>
            <HStack width="100%" direction="row" alignItems="center" justify="start" py={2} px={2} textAlign="start">
                <Avatar size="sm" border="1px" name={name} mr={1} />{" "}
                <Box border="1px" bg={bg} width="100%" rounded={8} m={2} p={2} fontSize="75%">
                    <Text >
                        {message}
                    </Text>
                </Box>
            </HStack>
        </>
    )
};

export default Comment;
