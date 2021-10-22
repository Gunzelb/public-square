import React from "react"
import SignupForm from "../SignupForm"
import {Flex} from '@chakra-ui/react'

const SignUp = () => {
    return(
        <Flex justify="center" align="start" m={4}>
            <SignupForm />
        </Flex>
    )
}


export default SignUp