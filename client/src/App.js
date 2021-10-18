//Library imports
import React from 'react';
import { ChakraProvider, theme,} from '@chakra-ui/react'; //VStack, Box, Grid,
// import { ColorModeSwitcher } from './ColorModeSwitcher';

// Components
// import LoginForm from './components/LoginForm';
import User from './components/pages/User';
import Header from './components/Header';
// import SignupForm from './components/SignupForm';
// import Posts from './components/Posts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl"> */}
        {/* <Grid minH="100vh"> */}
            < Header />
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}
            {/* <Posts/> */}
            < User />
        {/* </Grid> */}
      {/* </Box> */}
    </ChakraProvider>
  );
}

export default App;
