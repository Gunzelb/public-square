//Library imports
import React from 'react';
import { ChakraProvider, theme, Grid} from '@chakra-ui/react'; //VStack, Box, Grid,
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
// import User from './components/pages/User';
import Header from './components/Header';
import Home from './components/pages/Home';
import Login from './components/pages/LoginSignup';
import SignUp from './components/pages/Signup';

function App() {
  return (
  <ChakraProvider theme={theme}>
    <Router>
    
      {/* <Box textAlign="center" fontSize="xl"> */}
        <Grid minH="100vh">
            < Header />
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/login/" >
              <Login />
            </Route>
            <Route exact path="/signup/" >
              <SignUp />
            </Route>
        </Grid>
      {/* </Box> */}
    </Router>
    </ChakraProvider>
  );
}

export default App;
