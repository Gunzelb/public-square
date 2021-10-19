import React from "react";
import '../App.css'; 

//Components
import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar} from "@chakra-ui/react"; //Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)

function Post({name, message, date, isPrivate, comments, editPost}) {
    return (
    <>
        {!isPrivate ? 
        <Flex width="60%" direction="row" alignItems="start" justify="start" justifySelf="start" p={6} textAlign="start">
            <Avatar size="md" border="1px" name={name} mr={1} />{" "}
            <StyleColorMode message={message} date={date} isPrivate={isPrivate} 
            comments={comments} editPost={editPost}/>
        </Flex>:(<></>)
    }
    </>
    )
};

export default Post;