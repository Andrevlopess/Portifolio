import { Flex, Highlight, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import eu from '../../Images/andrevlopes.jpeg'

const IntroductionSec = () => {

  return (
    <Flex w='80%' justifyContent='center' p='20px' minH='95vh' alignItems='center' flexWrap='wrap-reverse'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Flex flexDirection='column' justifyContent='center'>
          <Text fontSize='min(5em, 10vw)'>Hi👋,</Text>
          <Text fontSize='min(5em, 8vw)'>
            <Highlight query='André v Lopes' styles={{ color: 'txtDistact' }}>
              I'm André v Lopes
            </Highlight>
          </Text>
          <Text fontSize='min(5em, 6vw)'>Front-end Dev</Text>
        </Flex>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        style={{ margin: '0 40px' }}
      >

        <Flex borderRadius='10px' transform='rotateZ(10deg)'
          bgGradient='linear(to-b, violet100, violet400)' >
          <Image src={eu} maxH='min(350px, 80vw)' zIndex='banner' borderRadius='10px'
            transform='rotateZ(-10deg)' />
        </Flex>

      </motion.div>

    </Flex>
  )
}

export default IntroductionSec

