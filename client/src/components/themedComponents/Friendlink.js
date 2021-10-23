import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Button,
  IconButton,
  Link,
  // LinkOverlay,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/toast';
//Avatar: Use the name attribute for a default icon (initials based on the name atrr if the src cant load)
import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from '../../utils/mutations';

export default function Friendlink({ names }) {
  const toast = useToast();
  const [status, setStatus] = useState(false);
  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (status) {
      toast({
        title: 'Success:',
        description: 'Friend Added!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setStatus(false);
    }
  }, [status, toast]);

  const plusButtonhandler = async (e, username) => {
    try {
      await addFriend({ variables: { username } });
      setStatus(true);
    } catch (err) {
      console.error(err);
      console.error(error);
    }
  };
  return (
    <>
      <Button colorScheme="purple" variant="outline" onClick={onOpen}>
        Friends
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Friends</DrawerHeader>
          <DrawerBody>
            {names.map((name, i) => (
              <Flex width="80%" padding="2%" key={i}>
                <Avatar size="lg" name={name.username} mr={1} />
                <Flex border="1px" p={4} rounded={8} width="100%">
                  <Link
                    fontSize="md"
                    as={RouterLink}
                    to={`/profile/${name.username}`}
                    paddingRight="10"
                  >
                    {name.username}
                  </Link>
                  <Spacer />
                  <IconButton
                    size="xs"
                    maxWidth="1"
                    aria-label="Add friend"
                    icon={<AddIcon />}
                    onClick={e => {
                      plusButtonhandler(e, name.username);
                    }}
                  />
                </Flex>
              </Flex>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
