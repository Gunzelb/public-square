import React, {useState} from "react";
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";


function SignupForm() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const inputType = e.target.name;
        const inputValue = e.target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if(inputType === 'firstName'){
            setFirstName(inputValue);
        }
        else if(inputType === 'lastName'){
            setLastName(inputValue);
        }
        else if (inputType === "email"){
            setEmail(inputValue);
        }
        else if (inputType === 'username') {
            setUsername(inputValue);
        }else if(inputType === "password") {
            setPassword(inputValue);
        }
        else{
            setConfirmPassword(inputValue);
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const Signup = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
            confirm: confirmPassword
        }


        console.log(Signup);
        if(password !== confirmPassword){
            console.log("Passwords do not match!");
        }

        //Set the states to empty strings
        setFirstName("")
        setLastName("")
        setEmail("")
        setUsername("")
        setPassword("")
        setConfirmPassword("")

    }

    return (
        <Flex direction="column" border="1px" p={10} rounded={10} justifySelf="center" 
            alignSelf="start" width="45%">
            <Heading mb={4}>Sign up</Heading>
            <Flex direction="row">
                <FormControl id="firstname" mr={4} isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  placeholder="Jane" variant="filled" mb={3} 
                    name="firstName" value={firstName} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="lastname" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  placeholder="Doe" variant="filled" mb={3} 
                    name="lastName" value={lastName} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="jane_doe" variant="filled" mb={3} 
                name="username" value={username} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="janedoe@email.com" variant="filled" mb={3} 
                name="email" value={email} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="********" variant="filled" mb={3} 
                name="password" onChange={handleInputChange} />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm password</FormLabel>
                <Input type="password" placeholder="********" variant="filled" mb={3} 
                name="confirmPassword" onChange={handleInputChange} />
            </FormControl>
            <Button colorScheme="cyan" variant="outline" onClick={handleSubmit}>
                Submit
            </Button>
        </Flex>
    )
};

export default SignupForm;