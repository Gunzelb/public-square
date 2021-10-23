//Imports
import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

//Chakra Components
import { Flex, Input, Heading, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

//Helper functions
import { checkPassword, validateEmail } from '../utils/helpers';

function LoginForm() {
  //Input states
  const [formState, setFormState] = useState({ email: '', password: '' });

  //Toast variables/states
  const toast = useToast();
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('It Works!');
  const [description, setDescription] = useState('Omg it really did it');
  const [toastType, setToastType] = useState('error');

  const [loginUser, { error }] = useMutation(LOGIN_USER);

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
    // Set the state of the form to an object with the email and password as properties
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formState);

    //Check if email is in the right format
    if (!validateEmail(formState.email) || !formState.password) {
      setTitle('Error');
      setDescription('Email or password is invalid');
      setToastType('error');
      setStatus(true);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    if (!checkPassword(formState.password)) {
      setTitle('Error');
      setDescription('Password between 8-14 characters');
      setToastType('error');
      setStatus(true);
      return;
    } else {
      try {
        const { data } = await loginUser({
          variables: { ...formState },
        });
        console.log(data);
        Auth.login(data.login.token);
      } catch (err) {
        console.log(error);
        console.log(err);
        setTitle('Error');
        setDescription('An error occurred!');
        setToastType('error');
        setStatus(true);
        return;
      }
      setTitle('');
      setDescription('Login successfully ');
      setToastType('success');
      setStatus(true);
    }
  };

  return (
    <Flex direction="column" border="1px" borderColor="cyan.600" p={8} rounded={6} width="30%">
      <Heading mb={6} color="cyan.600">
        Log in
      </Heading>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="jane_doe"
          variant="filled"
          mb={3}
          value={formState.email}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="********"
          variant="filled"
          mb={3}
          value={formState.password}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button colorScheme="cyan" variant="outline" onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
}

export default LoginForm;
