import { Box, Button, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'

function App() {

  const {colorMode, toggleColorMode} = useColorMode()

  const teste = useColorModeValue('verdinLight', 'verdinDark')

  return (
    <Flex bgColor='uaifi' flexDirection={'column'}>
      <Text fontSize={100} fontWeight='bold'  style={{fontFamily: "'Plus jakarta sans', sans serif"}}>
        ai papai funcionou a
      </Text>
      <Button onClick={toggleColorMode}>
        toggle
      </Button>
      <Flex w='100%' border='3px solid white'>
        <Box bgColor={teste}>esse vai ser vermelho</Box>
        <Box bgColor='verdin'>esse vai ser azul</Box>
      </Flex>
    </Flex>

  )
}

export default App
