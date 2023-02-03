import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AboutMeSection } from './Components/Sections/AboutMeSection';
import IntroductionSec from './Components/Sections/IntroductionSec';
import ScrollDown from './Components/ScrollDown';
import Cursor from './Icons/Cursor.svg'
import SkillsSection from './Components/Sections/SkillsSection';
import ProjectsSec from './Components/Sections/ProjectsSec';
import ContactMeSec from './Components/Sections/ContactMeSec';

function App() {


  return (
    <Container
      maxW='none'
      w='100%'
      overflow='hidden'
      fontWeight='bold'
      style={{ fontFamily: 'Plus jakarta sans', scrollBehavior: 'smooth', }}
      bgColor='background'
      minH='100vh'
      m='0'
      p='0'
    >


      <Flex w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
        <IntroductionSec />
        <ScrollDown />
        <AboutMeSection />
        <ScrollDown />
        {/* <SkillsSection /> */}
        <ProjectsSec />
        <ContactMeSec />
      </Flex>
    </Container>
  )
}

export default App
