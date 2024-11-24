import { Box } from "@chakra-ui/react";
import { useEffect } from 'react';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';



function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  console.log('App component rendering');

  return (
    <Box minH={"100vh"}>
      <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/create" element={<CreatePage />} />
    </Routes>
    </Box>
    
  )
}

export default App;