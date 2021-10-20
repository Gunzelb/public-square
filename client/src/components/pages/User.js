// Import React
import React, { useState } from "react"

//Components
import Posts from '../Posts'

//Moment.js for Dates
import moment from 'moment';

//Chakra Components
import { Box, Heading, Button, Flex, Spacer } from '@chakra-ui/react' // Text, VStack,
import { useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    //ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import {
    FormControl,
    //FormLabel, 
    Input
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";

const onloadPosts = [
    {
        id: 1,
        name: "Felicia",
        message: "Ya like jazz? XD",
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
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
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
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
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
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

function User() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [modalHeader, setModalHeader] = useState("")
    const [isPrivate, setIsPrivate] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");
    const [posts, setPosts] = useState(onloadPosts);

    const addPostForm = (e, postType) => {
        setMessage("")
        //Set the isPrivate value to true/false depending on which post button was clicked
        setIsPrivate(postType);

        //Set Modal Header as Add Post
        setModalHeader(`Add ${e.target.id} Post`);
        //Open Modal
        onOpen()
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
        //Open Modal
        onOpen()
    }

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
                id: posts.length,
                name: "SignedIn Account",
                message: message,
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                isPrivate: isPrivate,
                comments: []
            }
            const newPostArr = [...posts, newPost]
            console.log(newPostArr);
            setPosts(newPostArr)
        }
        
        onClose()
    }

    const deletePostHandler = (e) => {
        console.log(`${e.target.id} : Delete Post button pressed`);
        console.log(posts);
        setPosts(posts.filter(
            (post) => { return post.id !== id }))
        console.log(posts);
        onClose()
    }

    return (
        <>
            <Box textAlign="center">
                <Heading textDecoration="underline" mb={2}>Post in the Square</Heading>
                {/* <Heading textDecoration="underline" mb={2}>Name Profile</Heading> */}
                <Flex justifyContent="center">
                    <Button border="1px" id="Public" onClick={(e) => {addPostForm(e, false)}} m={6}> Public Post </Button>
                    <Button border="1px" id="Private" onClick={(e) => {addPostForm(e, true)}} m={6} > Private Post </Button>
                    {/* <Button border="1px" id="Private" onClick={addPostForm} m={6} > Add Friend </Button> */}
                </ Flex>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="message">
                            <Input
                                type="text"
                                name="message"
                                placeholder="What are you thinking about?"
                                variant="filled"
                                mb={3}
                                value={message}
                                onChange={handleInputChange}
                            />

                        </FormControl>

                    </ModalBody>
                    <Flex p={3}>
                        {
                            (modalHeader === "Edit Post") ?
                                (<IconButton variant="ghost" colorScheme="pink" icon={<DeleteIcon />}
                                    onClick={deletePostHandler} size="lg" />)
                                : (<></>)
                        }
                        <Spacer />
                        <Button colorScheme="pink" variant="outline" mr={3} onClick={onClose}>Cancel</Button>

                        <Button colorScheme="cyan" variant="outline" onClick={handleSubmit}>Submit</Button>
                    </Flex>
                </ModalContent>
            </Modal>
            <Flex direction="column" alignContent="start" width="100%">
                <Heading textDecor="underline" as="h1" size="xl" marginLeft="25px" mb={5}>Posts</Heading>
                <Posts ms={1} posts={posts} editPost={editPost} />
            </Flex>
        </>
    )
}

export default User