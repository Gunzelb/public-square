//Imports
import React from "react"
import {useState} from "react"

//Chakra Components
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";


function LoginForm() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const inputType = e.target.name;
        const inputValue = e.target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'username') {
          setUserName(inputValue);
        }else {
          setPassword(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const login= {
            username: username,
            password: password
        }
        console.log(login);
    }


    return (
        <Flex direction="column" border="1px" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <FormControl id="email" isRequired>
                
                <FormLabel>Email address</FormLabel>
                <Input 
                    type="username" 
                    name="username" 
                    placeholder="jane_doe" 
                    variant="filled" 
                    mb={3} 
                    value={username} 
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