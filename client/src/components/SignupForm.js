import React, { useState, useEffect } from "react";

//Chakra
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";




function SignupForm() {

    //Toast variables
    const toast = useToast();
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState("It Works!");
    const [description, setDescription] = useState("Omg it really did it"); 
    const [toastType, setToastType] = useState('error');

    //Form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



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
        // Getting the value and name of the input which triggered the change
        const inputType = e.target.name;
        const inputValue = e.target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'firstName') {
            setFirstName(inputValue);
        }
        else if (inputType === 'lastName') {
            setLastName(inputValue);
        }
        else if (inputType === "email") {
            setEmail(inputValue);
        }
        else if (inputType === 'username') {
            setUsername(inputValue);
        } else if (inputType === "password") {
            setPassword(inputValue);
        }
        else {
            setConfirmPassword(inputValue);
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault()


        //Check if the input is empty
        if(!firstName || !lastName || !email || !username 
            || !password || !confirmPassword){
            
            
                setTitle("Error");
                setDescription("Missing Fields");
                setToastType('error')
                return
        }


        const Signup = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
            confirm: confirmPassword
        }

        console.log(Signup);
        
        if (password !== confirmPassword) {
            console.log("Passwords do not match!");
            setTitle("Error");
            setDescription("Passwords do not match!");
            setToastType('error')
            setStatus(true)
            return
        }
        else {
            setTitle( "Account created");
            setDescription("");
            setToastType('success');
            setStatus(true)

            //Set the states to empty strings
            setFirstName("")
            setLastName("")
            setEmail("")
            setUsername("")
            setPassword("")
            setConfirmPassword("")
            return
        }




        // setTimeout(1000, setStatus(false))

    }

    return (
        <Flex direction="column" border="1px" px={7} py={3} rounded={10} width="40%">
            {/* <form onSubmit={handleSubmit}> */}
            <Heading mb={4} p={2} color="cyan.600">Sign up</Heading>
            <Flex direction="row">
                <FormControl id="firstname" mr={4} isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="Jane" variant="filled" mb={3}
                        name="firstName" value={firstName} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="lastname" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Doe" variant="filled" mb={3}
                        name="lastName" value={lastName} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="jane_doe" variant="filled" mb={3} autoComplete="username"
                    name="username" value={username} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="janedoe@email.com" variant="filled" mb={3}
                    name="email" value={email} onChange={handleInputChange} />
            </FormControl>
            <Flex direction="row">
            <FormControl id="password" mr={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="********" variant="filled" mb={3} autoComplete="new-password"
                    name="password" onChange={handleInputChange} value={password} />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm password</FormLabel>
                <Input type="password" placeholder="********" variant="filled" mb={3} autoComplete="new-password"
                    name="confirmPassword" onChange={handleInputChange} value={confirmPassword} />
            </FormControl>
            </Flex>
            {/* </form> */}
            <Button width="50%" alignSelf="center" colorScheme="cyan" variant="outline" onClick={handleSubmit} type="submit">
                Submit
            </Button>
        </Flex>
    )
};

export default SignupForm;