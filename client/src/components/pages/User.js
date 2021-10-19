// Import React
import React, { useState } from "react"

//Components
import Posts from '../Posts'

//Moment.js for Dates
import moment from 'moment';

//Chakra Components
import { Box, Heading, Button, Flex } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import {
    FormControl,
    //FormLabel, 
    Input
} from "@chakra-ui/react";



function User() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [modalHeader, setModalHeader] = useState("")
    const [isPrivate, setIsPrivate] = useState("");
    const [message, setMessage] = useState("");


    const addPostForm = (e) => {

        //Set the isPrivate value to true/false depending on which post button was clicked
        const postType = (e.target.id === "Private") ? true : false;
        setIsPrivate(postType);

        //Set Modal Header as Add Post
        setModalHeader(`Add ${e.target.id} Post`);
        //Open Modal
        onOpen()
    }

    const editPost = (e) => {
        //Set the isPrivate value to true/false depending on which post button was clicked
        const postType = (e.target.id === "Private") ? true : false;
        setIsPrivate(postType);

        //Set Modal Header as Add Post
        setModalHeader(`Edit ${e.target.id} Post`);
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

        const newPost = {
            author: "SignedIn Account",
            message: message,
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            isPrivate: isPrivate,
            comments: []
        }

        console.log(newPost);
    }

    return (
        <>
            <Box textAlign="center">
                <Heading textDecoration="underline">Post in the Square</Heading>
                <Flex justifyContent="center">
                    <Button border="1px" id="Public" onClick={addPostForm} m={2}> Public Post </Button>
                    <Button border="1px" id="Private" onClick={addPostForm} m={2} > Private Post </Button>
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

                        {/* <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                placeholder="********"
                                variant="filled"
                                mb={3}
                                value={password}
                                onChange={handleInputChange}
                            />
                        </FormControl> */}

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="ghost" onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <Posts editPost={editPost} />
        </>
    )
}

export default User