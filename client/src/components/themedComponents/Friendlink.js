import React from "react";
import { 
    Avatar,
    Button, 
    IconButton, 
    Link,
    // LinkOverlay, 
    Flex,
    Spacer
    } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    // DrawerCloseButton,
    useDisclosure,
    } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
//Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)


export default function Friendlink ({names}) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button colorScheme="purple" variant="outline" onClick={onOpen}>Friends</Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Friends</DrawerHeader>
            <DrawerBody>

            {names.map((name, i) => (
                <Flex width="80%" padding="2%" key={i}>
                    <Avatar size="lg" name={name.Firstname + name.Lastname} mr={1} />
                        <Flex border="1px" p={4} rounded={8} width="100%">
                        <Link fontSize="md" src="" paddingRight="10">
                            {name.Firstname} {name.Lastname}
                        </Link>
                        <Spacer />
                        <IconButton 
                            size="xs"
                            maxWidth="1" 
                            aria-label="Add friend"
                            icon={<AddIcon/>}
                        />
                        </Flex>
                </Flex>

            ))}
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    )
};