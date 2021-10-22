import React from 'react';
import lightLogo from "../../images/PSLogoLight.gif";
import darkLogo from "../../images/PSLogoDark.gif";

//Chakra Components
import { useColorModeValue } from '@chakra-ui/react';
import {Img} from '@chakra-ui/react'

function StyleColorMode() {
    
    const SwitchLogo = useColorModeValue(lightLogo, darkLogo);
    
    return (
        <>
            <Img 
            height="50px" 
            maxwidth="200px"
            src={SwitchLogo}
            />
        </>
    )
}

export default StyleColorMode;