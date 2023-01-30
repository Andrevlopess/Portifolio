import { Divider, Flex, Highlight, Text } from "@chakra-ui/react";

export function AboutMeSection() {
    return (
        <Flex w='100%' mt='100px' flexDirection='column' justifyContent='center' alignItems='center' mb='100px'>
            <Flex w='100%' justifyContent='flex-end'>
                <Text
                    fontSize='10em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                >About me</Text>
            </Flex>
            <Flex w='80%' justifyContent='center' alignItems='center' mt='50px' flexDirection='column'>
                <Text fontSize='3.3em' textAlign='center'>
                    <Highlight query='Frontend focused Web Developer' styles={{ color: 'violet100' }}>
                        A Frontend focused Web Developer building the Frontend of Websites and Web applications that leads to the success of the overall product.
                    </Highlight>
                </Text>
                <Divider border='2px solid white' my='30px' />
                <Flex w='100%'>
                    <Text fontSize='1.4em'>
                        <Highlight query='Escolas Padre Anchieta' styles={{ color: 'highBlue' }}>
                            I've been studying programming for over a year, learning the most famous and usable tools such as Typescript, Javascript, React JS
                        </Highlight>
                    </Text>
                    <Text fontSize='1.4em'>
                        <Highlight query='Escolas Padre Anchieta' styles={{ color: 'highBlue' }}>
                            Coursing Tech-integrated high Scholl at Escolas Padre Anchieta
                            Jundiaí, SP
                        </Highlight>
                    </Text>
                </Flex>
            </Flex>

        </Flex>
    )
}