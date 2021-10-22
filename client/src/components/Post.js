import React from "react";
import '../App.css'; 
import moment from "moment";
//Components
import StyleColorMode from './themedComponents/PostMessageBox';
import { Flex, Avatar} from "@chakra-ui/react"; //Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)

function Post({post_id, name, message, date, isPrivate, comments, editPost}) {
    return (
    <>
        {/* {!isPrivate ?  */}
        <Flex direction="row" alignItems="start" justify="start" justifySelf="start" p={6} textAlign="start">
            <Avatar size="md" border="1px" name={name} mr={1} />{" "}
            <StyleColorMode post_id={post_id} message={message} date={moment(date).format('MMMM Do YYYY, h:mm:ss a')} isPrivate={isPrivate} 
            comments={comments} editPost={editPost}/>
        </Flex>
        {/* ?:(<></>) */}
    {/* } */}
    </>
    )
};

export default Post;