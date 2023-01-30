import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AboutMeSection } from './Components/AboutMeSection';
import IntroductionSec from './Components/IntroductionSec';
import ScrollDown from './Components/ScrollDown';
import './Styles/Global.css'
import "./Styles/scrollIconAnimation.css"
import { motion } from 'framer-motion';
import Cursor from './Components/Cursor';

function App() {

  return (
    <Container
      maxW='none'
      w='100%'
      fontWeight='bold'
      style={{ fontFamily: 'Plus jakarta sans', cursor: 'none' }}
      bgColor='background'
      minH='100vh'
    >
      <Cursor />
      <Flex w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
        <IntroductionSec />
        <ScrollDown />
      </Flex>
      <Flex h='100vh'></Flex>
    </Container>
  )
}

export default App
