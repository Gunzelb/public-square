// Import React
import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import { ADD_POST, EDIT_POST, DELETE_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';

//Components
import PostList from '../PostList';

//Moment.js for Dates
import moment from 'moment';

//Chakra Components
import { Box, Heading, Button, Flex, Spacer } from '@chakra-ui/react'; // Text, VStack,
import { useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  //ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  FormControl,
  //FormLabel,
  Input,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// const onloadPosts = [
//     {
//         id: 1,
//         name: "Felicia",
//         message: "Ya like jazz? XD",
//         date: Date.now(),
//         isPrivate: true,
//         comments: [
//             {
//                 name: "Michael Myers",
//                 message: "First to comment"
//             },
//             {
//                 name: "Jason Todd",
//                 message: "lol"
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: "Michael Myers",
//         message: "Bye Felicia",
//         date: moment().format('MMMM Do YYYY, h:mm:ss a'),
//         isPrivate: false,
//         comments: [
//             {
//                 name: "Michael Myers",
//                 message: "First to comment"
//             },
//             {
//                 name: "Jason Todd",
//                 message: "lol"
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: "Jason Todd",
//         message: "Hello! Is it me you're looking for?",
//         date: moment().format('MMMM Do YYYY, h:mm:ss a'),
//         isPrivate: false,
//         comments: [
//             {
//                 name: "Michael Myers",
//                 message: "First to comment"
//             },
//             {
//                 name: "Jason Todd",
//                 message: "be quiet Michael!"
//             },
//             {
//                 name: "Felicia",
//                 message: "This chat is toxic XD"
//             }
//         ]
//     }
// ]

function User() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalHeader, setModalHeader] = useState('');
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [isPrivate, setIsPrivate] = useState();
  const [formState, setFormState] = useState({});

  let postType;
  if (modalHeader === 'Edit Post') {
    postType = false;
  } else {
    postType = true;
  }

  const [editPost, { error }] = useMutation(postType ? ADD_POST : EDIT_POST);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  const addPostForm = (e, postType) => {
    setMessage('');
    //Set the isPrivate value to true/false depending on which post button was clicked
    setIsPrivate(postType);

    //Set Modal Header as Add Post
    setModalHeader(`Add ${e.target.id} Post`);
    //Open Modal
    onOpen();
  };

  const editPostHandle = (e, post_id) => {
    e.preventDefault();

    const currentPost = user.posts.find(post => post._id === post_id);

    setMessage(currentPost.message);
    setId(post_id);
    //Set Modal Header as Add Post
    setModalHeader('Edit Post');
    //Open Modal
    onOpen();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (modalHeader === 'Edit Post') {
      try {
        const newEdit = { _id: id, postText: message };
        await editPost({
          variables: { ...newEdit },
        });
      } catch (err) {
        console.log(err);
        console.log(error);
      }
      setMessage('');
    } else {
      try {
      } catch (err) {
        console.log(err);
        console.log(error);
      }

      onClose();
    }
  };
  // const deletePostHandler = e => {
  //   console.log(`${e.target.id} : Delete Post button pressed`);
  //   console.log(posts);
  //   setPosts(
  //     posts.filter(post => {
  //       return post.id !== id;
  //     })
  //   );
  //   console.log(posts);
  //   onClose();
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You must be logged in to access this page. Please log in or sign up
        using the link above!
      </h4>
    );
  }

  return (
    <>
      <Box textAlign="center">
        <Heading textDecoration="underline" mb={2}>
          Post in the Square
        </Heading>
        {/* <Heading textDecoration="underline" mb={2}>Name Profile</Heading> */}
        <Flex justifyContent="center">
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
          {/* <Button border="1px" id="Private" onClick={addPostForm} m={6} > Add Friend </Button> */}
        </Flex>
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
            {modalHeader === 'Edit Post' ? (
              <IconButton
                variant="ghost"
                colorScheme="pink"
                icon={<DeleteIcon />}
                //   onClick={deletePostHandler}
                size="lg"
              />
            ) : (
              <></>
            )}
            <Spacer />
            <Button
              colorScheme="pink"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button colorScheme="cyan" variant="outline" onClick={handleSubmit}>
              Submit
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
      <Flex direction="column" alignContent="start" width="100%">
        <Heading
          textDecor="underline"
          as="h1"
          size="xl"
          marginLeft="25px"
          mb={5}
        >
          Posts
        </Heading>
        <PostList ms={1} posts={user.posts} editPost={editPostHandle} />
      </Flex>
    </>
  );
}

export default User;
