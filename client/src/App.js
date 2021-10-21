//Library imports
import React from 'react';
import { ChakraProvider, theme, Grid} from '@chakra-ui/react'; //VStack, Box, Grid,

// Components
// import LoginForm from './components/LoginForm';
// import User from './components/pages/User';
// import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/pages/Home';
import LoginSignUp from './components/pages/LoginSignup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl"> */}
        <Grid minH="100vh">
            < Header />
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/login/" >
              <LoginSignUp />
            </Route>
        </Grid>
      {/* </Box> */}
    </ChakraProvider>
    </Router>
  );
}

export default App;
