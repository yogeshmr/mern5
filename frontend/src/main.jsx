import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'

import { BrowserRouter } from 'react-router-dom';

// Define the initial color mode
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// Extend the theme
const theme = extendTheme({ config })

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>,
  )
  console.log('App rendered successfully')
} catch (error) {
  console.error('Error rendering app:', error)
}