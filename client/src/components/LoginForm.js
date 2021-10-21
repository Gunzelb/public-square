import React from "react";
import { Flex, Input, Heading, Button } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";


function LoginForm() {
    // const [inputUsername, setUserName] = useState("");
    // const [inputPassword, setPassword] = useState("");

    return (
        <Flex direction="column" border="1px" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
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

export default LoginForm;