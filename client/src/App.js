//Library imports
import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme,} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

// Components
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import Posts from './components/Posts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <ColorModeSwitcher justifySelf="flex-end" />
            <LoginForm />
            {/* <SignupForm /> */}
            {/* <Posts/> */}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
