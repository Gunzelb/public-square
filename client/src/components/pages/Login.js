// Import React
import React from "react"
import LoginForm from "../LoginForm";
import {Flex} from '@chakra-ui/react'


const Login = () => {
    return(
        <Flex justify="center" align="start">
            <LoginForm />
        </Flex>
    )
}


export default Login