import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion, useTransform, useScroll, useMotionValue, transform } from "framer-motion"
import { useEffect } from 'react';
import './Styles/Styles.css'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const { scrollYProgress } = useScroll();
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)

  useEffect(() => {
    function updateOpacity() {
      const maxXY = Math.max(x.get(), y.get())
      const newOpacity = transform(maxXY, [0, 100], [1, 0])
      opacity.set(newOpacity)
    }

    const unsubscribeX = x.on("change", updateOpacity)
    const unsubscribeY = y.on("change", updateOpacity)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])



  return (
    <Container
      fontWeight='bold'
      style={{ fontFamily: "'Plus jakarta sans', sans serif" }}
      maxW='none'
      w='100%'>
      <motion.div
        initial={{ opacity: 1 }}
      >
        <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
       <motion.div style={{ x }} />
        <Flex h='50vh'></Flex>
        <motion.div style={{
          scale: scrollYProgress,
          position: 'fixed',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',

        }}><Text fontSize='5em' textAlign='center'>Andre v Lopes</Text></motion.div>

      </motion.div>
      <Flex h='300vh'></Flex>
      <Button onClick={toggleColorMode}>mudar</Button>
    </Container>
  )
}

export default App
