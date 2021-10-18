// Import React
import React from "react"

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



function User() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box textAlign="center">
                <Heading textDecoration="underline">Post in the Square</Heading>
                <Flex justifyContent="center">
                    <Button border="1px" onClick={onOpen} m={2}> Public Post </Button>
                    <Button border="1px" onClick={onOpen} m={2} > Private Post </Button>
                </ Flex>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Hello World!
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default User