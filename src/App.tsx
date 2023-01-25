import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AboutMeSection } from './Components/AboutMeSection';

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const BG = useColorModeValue('background', 'dbackground')

  return (
    <Container
      maxW='none'
      minH='100vh'
      w='100%'
      whiteSpace='nowrap'
      overflow='hidden'
      fontWeight='bold'
      style={{ fontFamily: 'Plus jakarta sans' }}
      bgColor={BG}
    >
    <AboutMeSection/>
   <Button onClick={toggleColorMode}>change</Button>
    </Container>
  )
}

export default App
