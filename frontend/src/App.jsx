import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from 'react';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ReqsPage from './pages/ReqsPage';
// import { useProductStore } from './store/product';


function App() {
  // useEffect(() => {
  //   console.log('App component mounted');
  // }, []);

  // console.log('App component rendering');
  // const {products}  = useProductStore();
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/create" element={<CreatePage />} />
      <Route path="/requirements" element={<ReqsPage />} />
    </Routes>
    </Box>
    
  )
}

export default App;