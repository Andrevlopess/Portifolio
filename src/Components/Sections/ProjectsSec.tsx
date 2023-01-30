import { Flex, Text } from "@chakra-ui/react"


const ProjectsSec = () => {
    return (
        <Flex w='100%'>
            <Flex w='100%' justifyContent='flex-end'>
                <Text fontSize='12em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                    mr='-40px'>Projects</Text>
            </Flex>
        </Flex>
    )
}

export default ProjectsSec