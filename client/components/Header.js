import React from 'react';
import {
  Box,
  Input,
  Img,
  IconButton,
  InputGroup,
  Button,
  ButtonGroup,
  HStack
} from '@chakra-ui/react';
import PSLogo from "./PSLogoLight.gif";
// import lightLogo from "./PSLogoLight.gif";
// import darkLogo from "./PSLogoDark.gif";
import { SearchIcon } from '@chakra-ui/icons';
// import { useColorModeValue } from '@chakra-ui/react';


export default function Header (props) { 
  // const SwitchLogo = useColorModeValue({lightLogo}, {darkLogo});

  return(
    <nav>
      <HStack spacing="auto">
  
          {/* Search Bar */}
        <Box>  
          <InputGroup size="sm">
            <Input
              id = "search"
              width = "10rem"
              placeholder = "Search..."
            />
            <IconButton
                id = "searchButton"
                aria-label = "search the directory"
                icon = { <SearchIcon/> }
                onClick = { () => console.log(document.getElementById("search").value) }
            />
          </InputGroup>
        </Box>
      
            {/* Logo */}
        <Box>
            <Img 
            height="50px" 
            maxwidth="200px"
            // src = {<SwitchLogo/>}
            src = { PSLogo }
            />
        </Box>

          {/* Nav Links */}
        <Box>
          <ButtonGroup>
            <Button>Home</Button>
            <Button>Profile</Button>
            <Button>Friends</Button>
          </ButtonGroup>
        </Box>

      </HStack> 
    </nav>
  )};