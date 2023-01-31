import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TypeTodoBanner from '../../Images/TypeTodoBanner.png'
import GymNationBanner from '../../Images/GymNationBanner.png'
import NlwSetupBanner from '../../Images/NlwSetup.png'
import BarDoZéBanner from '../../Images/BarDoZéBanner.png'

interface ProjectsProps {
    setPointer: (arg: boolean) => void
}
const ProjectsSec = ({ setPointer }: ProjectsProps) => {

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

            <Flex w='80%' flexDirection='column' justifyContent='center' my='100px' 
            >
                {
                    projects.map(project => {
                        return (
                            <motion.div
                                onMouseEnter={() => setPointer(true)}
                                onMouseLeave={() => setPointer(false)}
                            >
                                <Flex w='100%' my='25px'

                                >

                                    <Image src={project.banner} />
                                </Flex>
                            </motion.div>
                        )
                    })
                }
            </Flex>




        </Flex>
    )
}

export default ProjectsSec