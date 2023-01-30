import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './Styles/theme'
import "@fontsource/plus-jakarta-sans"
import "@fontsource/aldrich"
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ParallaxProvider>
    </ChakraProvider>
  </React.StrictMode>

)
