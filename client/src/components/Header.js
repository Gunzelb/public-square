import React from 'react';
import {
  Box,
  Input,
  IconButton,
  InputGroup,
  Button,
  ButtonGroup,
  HStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { SearchIcon } from '@chakra-ui/icons';
import StyleColorMode from './themedComponents/Logo';

export default function Header(props) {

  return (
    <nav>
      <HStack spacing="auto" mx={3} p={3} mb={5} borderBottom="1px">

        {/* Search Bar */}
        <Box ms={2}>
          <InputGroup size="sm">
            <Input
              id="search"
              width="10rem"
              placeholder="Search..."
            />
            <IconButton
              id="searchButton"
              aria-label="search the directory"
              icon={<SearchIcon />}
              onClick={() => console.log(document.getElementById("search").value)}
            />
          </InputGroup>
        </Box>

        {/* Logo */}
        <Box>
          <StyleColorMode />
        </Box>

        {/* Nav Links */}
        <Box>
          <ButtonGroup>
            <Button onClick={() => document.location.replace("/")}>Home</Button>
            <Button>Profile</Button>
            <Button>Friends</Button>
          </ButtonGroup>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>

      </HStack>
    </nav>
  )
};