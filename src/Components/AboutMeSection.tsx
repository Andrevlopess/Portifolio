import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export function AboutMeSection() {

    const txtDistact = useColorModeValue('txtdistact', 'dtxtdistact')

    return (
        <Flex w='100%' justifyContent='center' flexDirection='column' alignItems='center'>
            <Text fontSize='5em'>André v Lopes</Text>
            <Flex w='100%' justifyContent='flex-start'>
                <Flex flexDirection='column' alignItems='center' justifyContent='center' >
                    <Text fontSize='8em' m='0' p='0'>About</Text>
                    <Text
                        fontSize='17em'
                        letterSpacing='10px'
                        lineHeight='70%'
                        color={txtDistact}
                    >ME</Text>
                </Flex>
                <Divider as={Box} orientation='vertical' w='10px' h='10px'/>
            </Flex>

        </Flex>
    )
}