// Import React
import React, { useState } from "react"

//Components
import Posts from '../Posts'
import AddPostModal from "../AddPostModal";

//Chakra Components
import { Box, Heading, Flex } from '@chakra-ui/react' // Text, VStack,


const onloadPosts = [
    {
        id: 1,
        name: "Felicia",
        message: "Ya like jazz? XD",
        date: Date.now(),
        isPrivate: true,
        comments: [
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {
                name: "Jason Todd",
                message: "lol"
            }
        ]
    },
    {
        id: 2,
        name: "Michael Myers",
        message: "Bye Felicia",
        date: Date.now(),
        isPrivate: false,
        comments: [
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {
                name: "Jason Todd",
                message: "lol"
            }
        ]
    },
    {
        id: 3,
        name: "Jason Todd",
        message: "Hello! Is it me you're looking for?",
        date: Date.now(),
        isPrivate: false,
        comments: [
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {
                name: "Jason Todd",
                message: "be quiet Michael!"
            },
            {
                name: "Felicia",
                message: "This chat is toxic XD"
            }
        ]
    }
]

//Conditional Rendering your profile vs friend profile

function User() {
    // const { isOpenEdit, onOpenEdit, onCloseEdit } = useDisclosure()

    const [modalHeader, setModalHeader] = useState("")
    const [isPrivate, setIsPrivate] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");
    const [posts, setPosts] = useState(onloadPosts);

    // const addPostForm = (e, postType) => {
    //     setMessage("")
    //     //Set the isPrivate value to true/false depending on which post button was clicked
    //     setIsPrivate(postType);

    //     //Set Modal Header as Add Public/Private Post
    //     setModalHeader(`Add ${e.target.id} Post`);

    //     //Open Modal
    //     onOpen()
    // }

    const handleInputChange = (e) => {
        const InputType = e.target.name;
        const InputData = e.target.value;

        if (InputType === "message") {
            setMessage(InputData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (modalHeader === "Edit Post") {
            posts[id-1].message = message;
            setMessage("")
        }
        else {
            const newPost = {
                id: posts.length + 1,
                name: "SignedIn Account",
                message: message,
                date: Date.now(),
                isPrivate: isPrivate,
                comments: []
            }
            const newPostArr = [...posts, newPost]
            console.log(newPostArr);
            setPosts(newPostArr)
        }
    }

        const editPost = (e, post_id, post_isPrivate) => {
        e.preventDefault()
        //Set the isPrivate value to true/false depending on which post button was clicked
        setIsPrivate(post_isPrivate);
        
        console.log(post_id);
        const currentPost = posts.find(post => post.id === post_id)

        setMessage(currentPost.message);
        setId(post_id)
        //Set Modal Header as Add Post
        setModalHeader("Edit Post");
    }

    const deletePostHandler = (e) => {
        console.log(`${e.target.id} : Delete Post button pressed`);
        console.log(posts);
        setPosts(posts.filter(
            (post) => { return post.id !== id }))
        console.log(posts);
    }

    return (
        <>
            <Box textAlign="center">
                <Heading textDecoration="underline" mb={2}>Post in the Square</Heading>
                {/* <Heading textDecoration="underline" mb={2}>Name Profile</Heading> */}
                <Flex justifyContent="center">
                    {/* Add Post Modal renders the Private Post & Public Post buttons*/}
                    <AddPostModal message={message} setMessage={setMessage} setIsPrivate={setIsPrivate} 
                    handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
                </ Flex>
            </Box>

            <Flex direction="column" alignContent="start" width="100%">
                <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
                <Posts ms={1} posts={posts} editPost={editPost} modalHeader={modalHeader} 
                handleInputChange={handleInputChange} deletePostHandler={deletePostHandler} 
                handleSubmit={handleSubmit} onChangeMessage={message}
                />
            </Flex>
        </>
    )
}

export default User