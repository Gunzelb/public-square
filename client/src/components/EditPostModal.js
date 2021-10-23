//React
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_POST } from '../utils/mutations';

//Chakra Components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FormControl, Input, Flex, Spacer, Button } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';

//Chakra Hooks
import { useDisclosure } from '@chakra-ui/react';

//Chakra Icons
import { DeleteIcon } from '@chakra-ui/icons';
import { EditIcon } from '@chakra-ui/icons';

const EditPostModal = ({ post_id, bg, message, deletePostHandler }) => {
  const [postText, setPostText] = useState(message);
  const [modalHeader, setModalHeader] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editPost, { error }] = useMutation(EDIT_POST, {
    update(cache, { data: { editPost } }) {
      try {
        // const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.modify({
          id: cache.identify(post_id),
          fields: {
            postText(cachedText) {
              return (cachedText = editPost.postText);
            },
          },
        });
      } catch (err) {
        console.error(err);
        console.error(error);
      }
    },
  });

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'message') {
      setPostText(value);
    }
  };

  const editPostHandle = (e, text) => {
    e.preventDefault();

    setPostText(text);
    //Set Modal Header as Add Post
    setModalHeader('Edit Post');
    //Open Modal
    onOpen();
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();

    if (modalHeader === 'Edit Post') {
      try {
        const newEdit = { _id: id, postText: postText };
        await editPost({
          variables: { ...newEdit },
        });
      } catch (err) {
        console.log(err);
        console.log(error);
      }
      setPostText('');
    } else {
      try {
      } catch (err) {
        console.log(err);
        console.log(error);
      }

      onClose();
    }
  };

  return (
    <>
      <Button
        className="post-editBtn"
        size="sm"
        bg={bg}
        variant="solid"
        onClick={e => {
          editPostHandle(e, message);
        }}
      >
        {' '}
        <EditIcon />
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
          <Flex p={3}>
            <IconButton
              variant="ghost"
              colorScheme="pink"
              icon={<DeleteIcon />}
              onClick={e => {
                deletePostHandler(e, post_id);
                onClose();
              }}
              size="lg"
            />

            <Spacer />
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
                handleSubmit(e, post_id);
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

export default EditPostModal;
