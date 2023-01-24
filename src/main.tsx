import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './Styles/theme'
import "@fontsource/plus-jakarta-sans"
import "@fontsource/aldrich"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>

)
