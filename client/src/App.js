//Library imports
import React from 'react';
import './App.css';
import { ChakraProvider, Box, VStack, Grid, theme,} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

// Components
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Post from './components/Post';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}
            <Post/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
