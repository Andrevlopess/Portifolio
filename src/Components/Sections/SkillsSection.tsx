import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useParallax } from "react-scroll-parallax";


const SkillsSection = () => {

    return (
        <Flex w='100%' flexDirection='column' alignItems='center' >
            <Flex w='100%' justifyContent='flex-start'>
                <Text
                    ml='-40px'
                    fontSize='14em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                >Skills</Text>
            </Flex>

            <SimpleGrid columns={4} spacing={10} w='80%'>


            </SimpleGrid>



        </Flex>
    )
}

export default SkillsSection