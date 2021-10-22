//React
import React  from "react";

//Chakra Components
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton} from "@chakra-ui/react"
import { FormControl, Input, Flex, Spacer, Button} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"

//Chakra Hooks
import { useDisclosure } from "@chakra-ui/react";

//Chakra Icons
import { DeleteIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";


const EditPostModal = ({post_id, isPrivate, bg, message, modalHeader, 
handleInputChange, handleSubmit, deletePostHandler, editPost }) => {

const { isOpen, onOpen, onClose } = useDisclosure()
    

    return (
        <>
            <Button  className="post-editBtn" size="sm" bg={bg} variant="solid" onClick={(e) => {editPost(e, post_id, isPrivate); onOpen()}}> <EditIcon /></Button>
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
                                <IconButton variant="ghost" colorScheme="pink" icon={<DeleteIcon />}
                                    onClick={(e)=>{deletePostHandler(e, post_id); onClose()}} size="lg" />

                        <Spacer />
                        <Button colorScheme="pink" variant="outline" mr={3} onClick={onClose}>Cancel</Button>

                        <Button colorScheme="cyan" variant="outline" onClick={(e) => {handleSubmit(e); onClose()}}>Submit</Button>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditPostModal;