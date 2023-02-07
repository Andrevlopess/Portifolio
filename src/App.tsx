import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AboutMeSection } from './Components/Sections/AboutMeSection';
import IntroductionSec from './Components/Sections/IntroductionSec';
import ScrollDown from './Components/ScrollDown';
import ProjectsSec from './Components/Sections/ProjectsSec';
import ContactMeSec from './Components/Sections/ContactMeSec';
import { Element, Link } from 'react-scroll';

function App() {


  return (
    <Container
      maxW='none'
      w='100%'
      overflow='hidden'
      fontWeight='bold'
      style={{ fontFamily: 'Plus jakarta sans', scrollBehavior: 'smooth' }}
      bgColor='background'
      minH='100vh'
      m='0'
      p='0'
    >

      <Flex w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
          <Flex w='80%' p='20px' justifyContent='center'>
            <Text fontSize='1.2em' mr='10px' _hover={{color:'txtDistact'}} transition='.3s' cursor='pointer'>
              <Link
                activeClass="active" className="AboutMe" to="AboutMe" spy={true} smooth={true} duration={800}>
                About me
              </Link>
            </Text>
            <Text fontSize='1.2em' mx='10px' _hover={{color:'txtDistact'}} transition='.3s' cursor='pointer'>
              <Link
                activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={800}>
                Projects
              </Link> </Text>
            <Text fontSize='1.2em' mx='10px' _hover={{color:'txtDistact'}} transition='.3s' cursor='pointer'>
              <Link
                activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={800}>
                Contact
              </Link> </Text>
        </Flex>

        <IntroductionSec />
        <ScrollDown />
        <Element name='AboutMe'>
          <AboutMeSection />
        </Element>
        <ScrollDown />
        <Element name='projects'>
          <ProjectsSec />
        </Element>
        <Element name='Contact' style={{width:'100%'}}>
          <ContactMeSec />
        </Element>

      </Flex>
    </Container>
  )
}

export default App
