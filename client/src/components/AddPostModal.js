import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {
  FormControl,
  //FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import Auth from '../utils/auth';

import { ADD_POST } from '../utils/mutations';

const AddPostModal = () => {
  //States
  const [modalHeader, setModalHeader] = useState('');
  const [postText, setPostText] = useState('');
  const [isPrivate, setIsPrivate] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'message') {
      setPostText(value);
    }
  };

  const addPostForm = (e, postType) => {
    setPostText('');
    //Set the isPrivate value to true/false depending on which post button was clicked
    setIsPrivate(postType);

    //Set Modal Header as Add Public/Private Post
    setModalHeader(`Add ${e.target.id} Post`);

    //Open Modal
    onOpen();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const payload = {
        postText,
        postAuthor: Auth.getProfile().data.username,
        private: isPrivate,
      };
      console.log(payload);
      const { data } = await addPost({
        variables: { ...payload },
      });
      console.log(data);
      setPostText('');
    } catch (err) {
      console.log(err);
      console.log(error);
    }
    onClose();
  };

  return (
    <>
      <Button
        border="1px"
        id="Private"
        onClick={e => {
          addPostForm(e, true);
        }}
        m={6}
      >
        {' '}
        Private Post{' '}
      </Button>
      <Button
        border="1px"
        id="Public"
        onClick={e => {
          addPostForm(e, false);
        }}
        m={6}
      >
        {' '}
        Public Post{' '}
      </Button>
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
                value={postText}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>
          <Flex p={3} justifyContent="end">
            <Button
              colorScheme="pink"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="cyan"
              variant="outline"
              onClick={e => {
                handleSubmit(e);
                onClose();
              }}
            >
              Submit
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPostModal;
