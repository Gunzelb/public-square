import React from 'react';
import {
  Box,
  Input,
  IconButton,
  InputGroup,
  Button,
  ButtonGroup,
  // HStack,
  // Center,
  Spacer,
  Stack,
  LinkBox,
  LinkOverlay,
  Flex,
  Link
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { SearchIcon } from '@chakra-ui/icons';
import StyleColorMode from './themedComponents/Logo';
import { useBreakpointValue } from "@chakra-ui/react"

export default function Header(props) {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  // const justifyContent = useBreakpointValue({base: "center", md: "space-between"})
  return (
    <Flex className="header-container" >

      {/* Search Bar */}
      <Flex className="header-search">
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
      </Flex>

      {/* Logo */}
      <div className="header-logo">
        <StyleColorMode />
      </div>
      {/* Nav Links */}

      <Flex direction={direction} className="header-right-buttons">
        <LinkBox>
          <LinkOverlay href="/"> <Button m={1} >Home</Button></LinkOverlay>
        </LinkBox>
        <Button m={1} >Profile</Button>
        <Button m={1} >Friends</Button>
        <ColorModeSwitcher m={1} />
      </Flex>

    </Flex>
  )
};