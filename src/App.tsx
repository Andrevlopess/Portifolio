import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AboutMeSection } from './Components/Sections/AboutMeSection';
import IntroductionSec from './Components/Sections/IntroductionSec';
import ScrollDown from './Components/ScrollDown';
import Cursor from './Components/Cursor';
import SkillsSection from './Components/Sections/SkillsSection';
import './Styles/Global.css'
import ProjectsSec from './Components/Sections/ProjectsSec';

function App() {

  return (
    <Container
      maxW='none'
      w='100%'
      overflow='hidden'
      fontWeight='bold'
      style={{ fontFamily: 'Plus jakarta sans', cursor: 'none', scrollBehavior: 'smooth'}}
      bgColor='background'
      minH='100vh'
    >
      <Cursor />

      <Flex w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
        <IntroductionSec />
        <ScrollDown />
        <AboutMeSection />
        <ScrollDown />
        <SkillsSection />
        <ProjectsSec/>
      </Flex>
      <Flex h='100vh'></Flex>
    </Container>
  )
}

export default App
