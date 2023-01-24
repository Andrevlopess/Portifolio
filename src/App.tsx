import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'

function App() {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Flex bgColor='uaifi' fontFamily="body">
      <Text fontSize={100} fontWeight='bold'>
        ai papai funcionou
      </Text>
      <Button onClick={toggleColorMode}>
        toggle
      </Button>
    </Flex>

  )
}

export default App
