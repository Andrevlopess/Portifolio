import { Flex, Highlight, Image, Text } from "@chakra-ui/react"
import eu from '../../Images/andrevlopes.jpeg'

const IntroductionSec = () => {

  return (
    <Flex w='80%' justifyContent='space-around' minH='95vh' alignItems='center'>
      <Flex flexDirection='column' justifyContent='center'>
        <Text fontSize='5em'>Hi👋,</Text>
        <Text fontSize='4.6em'>
          <Highlight query='André v Lopes' styles={{ color: 'txtDistact' }}>
            I'm André v Lopes
          </Highlight>
        </Text>

        <Text fontSize='4em'>Front-end Dev</Text>
      </Flex>

      <Image src={eu} boxSize='400px' borderRadius='50%' style={{
        borderWidth: '5px',
        borderStyle: 'solid',
        background: 'linear-gradient(white, white) padding-box,  linear-gradient(to right, #4d0484, #9240d0) border-box'
      }} />
    </Flex>
  )
}

export default IntroductionSec
