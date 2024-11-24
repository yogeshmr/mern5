import { Box, Text, Container } from "@chakra-ui/react";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  console.log('App component rendering');

  return (
    <Container maxW="container.xl">
      <Box p={4} bg="gray.100" minH="100vh" width="100%">
        <Text fontSize="2xl" color="blue.500" fontWeight="bold" textAlign="center">
          Hello World - Again
        </Text>
      </Box>
    </Container>
  )
}

export default App;