import React from 'react';
import {
  Box,
  Input,
  // Img,
  IconButton,
  InputGroup,
  Button,
  ButtonGroup,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
// import PSLogo from "./PSLogoLight.gif";
import Friendlink from './themedComponents/Friendlink';
// import LoginSignUp from './components/pages/LoginSignup';
import StyleColorMode from './themedComponents/Logo';

// import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function Header ({loggedIn, setLoggedIn, names}) { 
  return(
    <nav>
      <Button onClick={() => setLoggedIn(!loggedIn)}>Test</Button>
      {loggedIn ? (
        <HStack spacing="auto" padding="1.5%">
    
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
          {/* <Box>
              <Img 
              height="50px" 
              maxwidth="200px"
              // src = {<SwitchLogo/>}
              src = { PSLogo }
              />
          </Box> */}
          <StyleColorMode />

            {/* Nav Links */}
          <Box>
            <ButtonGroup>
              <Button>Home</Button>
              <Button>Profile</Button>
              <Friendlink names={names} />
              <Button onClick={() => setLoggedIn(false)}>Logout</Button>
            </ButtonGroup>
          </Box>

        </HStack>
      ) : (
        <HStack spacing="auto" padding="1.5%">
    
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
          {/* <Box>
              <Img 
              height="50px" 
              maxwidth="200px"
              // src = {<SwitchLogo/>}
              src = { PSLogo }
              />
              <Button onClick = { () => setLoggedIn(!loggedIn) }>Test</Button>
          </Box> */}
          <StyleColorMode />

            {/* Nav Links */}
          <Box>
            <ButtonGroup>
              <Button>Register/Login</Button>
            </ButtonGroup>
          </Box>

        </HStack>
      )}
    </nav>
  );};