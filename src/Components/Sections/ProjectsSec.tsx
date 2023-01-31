import { Flex, GridItem, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TypeTodoBanner from '../../Images/TypeTodoBanner.png'
import GymNationBanner from '../../Images/GymNationBanner.png'
import NlwSetupBanner from '../../Images/NlwSetup.png'
const ProjectsSec = () => {

    interface Iproject {
        title: string;
        id: string;
        projectBanner: string;
        description: string;
        gitRepo: string;
        url?: string;
    }
    const projects: Iproject[] = [
        {
            id: 'TypeTodo',
            title: "TypeTodo",
            description: 'typetodo description',
            gitRepo: 'https://github.com/Andrevlopess/typeTodoList',
            url: 'https://type-todos.vercel.app/',
            projectBanner: TypeTodoBanner
        },
        {
            id: 'GymNation',
            title: "Gym Nation",
            description: 'GymNation description',
            gitRepo: 'https://github.com/Andrevlopess/gymApp',
            url: 'https://gym-nation.vercel.app/',
            projectBanner: GymNationBanner
        },
        {
            id: 'Nlw Setup',
            title: "Nlw Setup",
            description: 'Nlw Setup description',
            gitRepo: 'https://github.com/Andrevlopess/nlwHabits',
            projectBanner: NlwSetupBanner
        },
    ]

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