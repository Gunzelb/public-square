// Import React
import React from "react"
import LoginForm from "../LoginForm";
import {Flex} from '@chakra-ui/react'


const Login = () => {
    return(
        <Flex justify="center" align="center" m={4}>
            <LoginForm />
        </Flex>
    )
}


export default Login