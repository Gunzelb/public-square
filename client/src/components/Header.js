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
  Link,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
// import PSLogo from "./PSLogoLight.gif";
import Friendlink from './themedComponents/Friendlink';
// import LoginSignUp from './components/pages/LoginSignup';
import StyleColorMode from './themedComponents/Logo';
import { useBreakpointValue } from "@chakra-ui/react"

import { Link as RouterLink } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
      <HStack spacing="auto" padding="1.5%">
        <Box>
          <InputGroup size="sm">
            <Input id="search" width="10rem" placeholder="Search..." />
            <IconButton
              id="searchButton"
              aria-label="search the directory"
              icon={<SearchIcon />}
              onClick={() =>
                console.log(document.getElementById('search').value)
              }
            />
          </InputGroup>
        </Box>
        {/* Logo */}
        <StyleColorMode />

        {/* Nav Links */}
        <Box>
          <ButtonGroup>
            <>
              <Button>
                <Link as={RouterLink} to="/">
                  Home
                </Link>
              </Button>
              {Auth.loggedIn() ? (
                <>
                  <Button>
                    <Link as={RouterLink} to="/profile">
                      Profile
                    </Link>
                  </Button>
                  <Friendlink names={[]} />
                  <Button>
                    <Link onClick={logout}>Logout</Link>
                  </Button>
                </>
              ) : (
                <Button>
                  <Link as={RouterLink} to="/login">
                    Login/Signup
                  </Link>
                </Button>
              )}
            </>
          </ButtonGroup>
        </Box>
      </HStack>
    </nav>
  );
}
