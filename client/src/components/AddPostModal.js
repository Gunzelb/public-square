import React, {useState} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react";
import {
    FormControl,
    //FormLabel, 
    Input,
    Flex
} from "@chakra-ui/react";


const AddPostModal = ({message, setMessage, setIsPrivate, handleInputChange, handleSubmit,
    }) => {

    //States
    const [modalHeader, setModalHeader] = useState("")


    const { isOpen, onOpen, onClose } = useDisclosure()

    const addPostForm = (e, postType) => {
        setMessage("")
        //Set the isPrivate value to true/false depending on which post button was clicked
        setIsPrivate(postType);

        //Set Modal Header as Add Public/Private Post
        setModalHeader(`Add ${e.target.id} Post`);

        //Open Modal
       
    }

    return (
        <>
            <Button border="1px" id="Private" onClick={(e) => { addPostForm(e, true); onOpen() }} m={6} > Private Post </Button>
            <Button border="1px" id="Public" onClick={(e) => {addPostForm(e, false)}} m={6}> Public Post </Button>
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
                    <Flex p={3} justifyContent="end">
                        <Button colorScheme="pink" variant="outline" mr={3} onClick={onClose}>Cancel</Button>
                        <Button colorScheme="cyan" variant="outline" onClick={(e) => {handleSubmit(e); onClose()}}>Submit</Button>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPostModal;