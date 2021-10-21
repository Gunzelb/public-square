// Import React
import React from "react"
import LoginForm from "../LoginForm"
import SignupForm from "../SignupForm"
import {Flex} from '@chakra-ui/react'


const LoginSignUp = () => {
    return(
        <Flex justify="space-evenly" align="center" m={4}>
            <LoginForm />
            <SignupForm />
        </Flex>
    )
}


export default LoginSignUp