import React from "react";
import '../App.css'; 

//Components
import StyleColorMode from './PostMessageBox';
import { Flex, Avatar} from "@chakra-ui/react"; //Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)

function Post({name, message, date, comments}) {
    return (
        <Flex width="80%" direction="row" alignItems="start" justify="start" p={8} textAlign="start">
            <Avatar size="md" border="1px" name={name} mr={1} />{" "}
            <StyleColorMode message={message} date={date} comments={comments}/>
        </Flex>
    )
};

export default Post;