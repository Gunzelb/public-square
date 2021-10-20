//Imports
import React from "react"
import { useState, useEffect } from "react"

//Chakra Components
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

//Helper functions
import { checkPassword, validateEmail } from '../utils/helpers';

function LoginForm() {

    //Input states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Toast variables/states
    const toast = useToast();
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState("It Works!");
    const [description, setDescription] = useState("Omg it really did it");
    const [toastType, setToastType] = useState('error');

    useEffect(() => {
        if (status) {
            toast({
                title: title,
                description: description,
                status: toastType,
                duration: 3000,
                isClosable: true
            });
            setStatus(false)
        }
    }, [status, toast, title, description, toastType]);

    const handleInputChange = (e) => {
        e.preventDefault()

        // Getting the value and name of the input which triggered the change
        const inputType = e.target.name;
        const inputValue = e.target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const login = {
            email: email,
            password: password
        }
        //Check if email is in the right format
        if (!validateEmail(email) || !password) {
            setTitle("Error");
            setDescription('Email or password is invalid');
            setToastType('error')
            setStatus(true)
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
          }

        if(!checkPassword(password)){
            setTitle("Error");
            setDescription('Password between 8-14 characters');
            setToastType('error')
            setStatus(true)
            return
        }

        else{
            setTitle("");
            setDescription('Login successfully ');
            setToastType('success')
            setStatus(true)
        }
        console.log(login);
    }


    return (
        <Flex direction="column" border="1px" p={8} me={3} rounded={6} width="30%">
            <Heading mb={6} color="cyan.600">Log in</Heading>
            <FormControl id="email" isRequired>

                <FormLabel>Email address</FormLabel>
                <Input
                    type="email"
                    name="email"
                    placeholder="jane_doe"
                    variant="filled"
                    mb={3}
                    value={email}
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
                    value={password}
                    onChange={handleInputChange}
                />

            </FormControl>

            <Button colorScheme="cyan" variant="outline" onClick={handleSubmit}>
                Submit
            </Button>

        </Flex>
    )
};

export default LoginForm;