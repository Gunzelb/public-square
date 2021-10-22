//Library imports
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider, theme, Grid } from '@chakra-ui/react'; //VStack, Box, Grid,

// Components
// import LoginForm from './components/LoginForm';
// import User from './components/pages/User';
// import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/pages/Home';
import LoginSignUp from './components/pages/LoginSignup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider theme={theme}>
          {/* <Box textAlign="center" fontSize="xl"> */}
          <Grid minH="100vh">
            <Header />
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login/">
              <LoginSignUp />
            </Route>
          </Grid>
          {/* </Box> */}
        </ChakraProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
