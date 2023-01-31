import { Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TypeTodoBanner from '../../Images/TypeTodoBanner.png'
import GymNationBanner from '../../Images/GymNationBanner.png'
import NlwSetupBanner from '../../Images/NlwSetup.png'
import BarDoZéBanner from '../../Images/BarDoZéBanner.png'

const ProjectsSec = () => {

    interface Iproject {
        title: string;
        id: string;
        banner: string;
        description: string;
        gitRepo: string;
        tools?: string[];
        url?: string;
    }
    const projects: Iproject[] = [
        {
            id: 'TypeTodo',
            title: "TypeTodo",
            description: 'typetodo description',
            gitRepo: 'https://github.com/Andrevlopess/typeTodoList',
            url: 'https://type-todos.vercel.app/',
            banner: TypeTodoBanner
        },
        {
            id: 'GymNation',
            title: "Gym Nation",
            description: 'GymNation description',
            gitRepo: 'https://github.com/Andrevlopess/gymApp',
            url: 'https://gym-nation.vercel.app/',
            banner: GymNationBanner
        },
        {
            id: 'Nlw Setup',
            title: "Nlw Setup",
            description: 'Nlw Setup description',
            gitRepo: 'https://github.com/Andrevlopess/nlwHabits',
            banner: NlwSetupBanner
        },
        {
            id: 'Bar do zé',
            title: "Bar do zé",
            description: 'Bar do zé description',
            gitRepo: 'https://github.com/Andrevlopess/BardozeMenu',
            url: 'https://bardoze.netlify.app/',
            banner: BarDoZéBanner,
        },
    ]

    return (
        <Flex w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
            <Flex w='100%' justifyContent='flex-end'>
                <Text fontSize='12em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                    mr='-40px'>Projects</Text>
            </Flex>

            <SimpleGrid columns={1} spacing={10} w='80%'>
                {
                    projects.map(project => {
                        return (
                            <motion.div
                             
                            >
                                <Flex w='100%' h='50vh' bgImage={project.banner} bgSize='cover' borderRadius='10px' >
                                </Flex>
                            </motion.div>
                        )
                    })
                }

            </SimpleGrid>
        </Flex>
    )
}

export default ProjectsSec