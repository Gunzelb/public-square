import React from "react";
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";


function SignupForm() {
    //
    // const [inputUsername, setUserName] = useState("");
    // const [inputPassword, setPassword] = useState("");

    return (
        <Flex direction="column" border="1px" p={10} rounded={10}>
            <Heading mb={6}>Sign up</Heading>
            <Flex direction="row">
                <FormControl id="firstname" mr={4} isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="Jane" variant="filled" mb={3} />
                </FormControl>
                <FormControl id="lastname" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Doe" variant="filled" mb={3} />
                </FormControl>
            </Flex>
            <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="jane_doe" variant="filled" mb={3} />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="janedoe@email.com" variant="filled" mb={3} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="********" variant="filled" mb={3} />
            </FormControl>
            <Button colorScheme="cyan" variant="outline">
                Submit
            </Button>
        </Flex>
    )
};

export default SignupForm;