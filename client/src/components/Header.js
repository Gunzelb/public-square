import React from 'react';
import '../App.css';
import {
  Box,
  Input,
  // Img,
  IconButton,
  InputGroup,
  Button,
  // ButtonGroup,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Friendlink from './themedComponents/Friendlink';
import StyleColorMode from './themedComponents/Logo';
import { useBreakpointValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useColorModeValue } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Header() {

  //Breakpoint properties
  const direction = useBreakpointValue({ base: "column", md: "row" })
  const bg = useColorModeValue("gray.300", "gray.700");
  const borderColor = useColorModeValue('cyan.500', 'cyan.800');
  
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  

  return (
    <Box backgroundColor={bg} borderBottom="2px" borderBottomColor={borderColor} height="max">
      <Stack className="navbar" direction={direction} spacing="auto" padding="1.5%" borderBottomColor={borderColor}>
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
        <Flex spacing="auto">
          <LinkBox me={1}>
            <Button colorScheme="cyan" variant="outline">
              <LinkOverlay as={RouterLink} to="/">
                Home
              </LinkOverlay>
            </Button>
          </LinkBox>
          {Auth.loggedIn() ? (
            <>
              <LinkBox me={1}>
                <Button colorScheme="pink" variant="outline">
                  <LinkOverlay as={RouterLink} to="/profile">
                    Profile
                  </LinkOverlay>
                </Button>

              </LinkBox>

              <Box me={1}><Friendlink names={[]} /></Box>

              <LinkBox me={1}>
                <Button colorScheme="green" variant="outline">
                  <LinkOverlay onClick={logout}>Logout</LinkOverlay>
                </Button>
              </LinkBox>
            </>
          ) :
            (
              <>
                <LinkBox me={1}>
                  <Button colorScheme="pink" variant="outline">
                    <LinkOverlay as={RouterLink} to="/login">
                      Login
                    </LinkOverlay>
                  </Button>
                </LinkBox>

                <LinkBox me={1}>
                  <Button colorScheme="green" variant="outline">
                    <LinkOverlay as={RouterLink} to="/signup">
                      Signup
                    </LinkOverlay>
                  </Button>
                </LinkBox>

              </>
            )}
           
          <ColorModeSwitcher/>
        </Flex>
      </Stack>
    </Box>
  );
}
