import React, { useState, useEffect } from 'react';

//Chakra
import { Flex, Input, Heading, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function SignupForm() {
  //Toast variables
  const toast = useToast();
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('It Works!');
  const [description, setDescription] = useState('Omg it really did it');
  const [toastType, setToastType] = useState('error');

  //Form states
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  //Graphql mutation function and variables
  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (status) {
      toast({
        title: title,
        description: description,
        status: toastType,
        duration: 3000,
        isClosable: true,
      });
      setStatus(false);
    }
  }, [status, toast, title, description, toastType]);

  const handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // if this is the confirmPassword field, set that separate state, else set as part of the formState
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    //Check if the input is empty
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.email ||
      !formState.username ||
      !formState.password ||
      !confirmPassword
    ) {
      setTitle('Error');
      setDescription('Missing Fields');
      setToastType('error');
      setStatus(true);
      return;
    }

    if (formState.password !== confirmPassword) {
      console.log('Passwords do not match!');
      setTitle('Error');
      setDescription('Passwords do not match!');
      setToastType('error');
      setStatus(true);
      return;
    } else {
      //send userData to backend via Graphql
      try {
        const { data } = await addUser({ variables: { ...formState } });
        console.log(data);

        Auth.login(data.addUser.token);
      } catch (err) {
        console.log(error);
        console.log(err);
        setTitle('Error');
        setDescription('An error occurred!');
        setToastType('error');
        setStatus(true);
        return;
      }
      setTitle('Account created');
      setDescription('');
      setToastType('success');
      setStatus(true);

      //Set the states to empty strings
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
      });
      setConfirmPassword('');
      return;
    }

    // setTimeout(1000, setStatus(false))
  };

  return (
    <Flex
      direction="column"
      border="1px"
      px={7}
      py={3}
      rounded={10}
      width="40%"
    >
      {/* <form onSubmit={handleSubmit}> */}
      <Heading mb={4} p={2} color="cyan.600">
        Sign up
      </Heading>
      <Flex direction="row">
        <FormControl id="firstname" mr={4} isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="Jane"
            variant="filled"
            mb={3}
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="lastname" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Doe"
            variant="filled"
            mb={3}
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
      </Flex>
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="jane_doe"
          variant="filled"
          mb={3}
          autoComplete="username"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="janedoe@email.com"
          variant="filled"
          mb={3}
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </FormControl>
      <Flex direction="row">
        <FormControl id="password" mr={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="********"
            variant="filled"
            mb={3}
            autoComplete="new-password"
            name="password"
            onChange={handleInputChange}
            value={formState.password}
          />
        </FormControl>
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            placeholder="********"
            variant="filled"
            mb={3}
            autoComplete="new-password"
            name="confirmPassword"
            onChange={handleInputChange}
            value={confirmPassword}
          />
        </FormControl>
      </Flex>
      {/* </form> */}
      <Button
        width="50%"
        alignSelf="center"
        colorScheme="cyan"
        variant="outline"
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </Button>
    </Flex>
  );
}

export default SignupForm;
