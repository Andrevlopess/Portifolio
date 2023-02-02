import { Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TypeTodoBanner from '../../Images/TypeTodoBanner.png'
import GymNationBanner from '../../Images/GymNationBanner.png'
import NlwSetupBanner from '../../Images/NlwSetup.png'
import BarDoZéBanner from '../../Images/BarDoZéBanner.png'
import ProjectBg from '../../Images/ProjectsBg.svg'
import { faArrowUp19 } from "@fortawesome/free-solid-svg-icons"

const ProjectsSec = () => {

    interface IHover {
        projTitle: string,
        state: boolean
    }

    const [hover, setHover] = useState<IHover>()

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
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: .2,
                staggerChildren: .1
            }
        },
    }

    const item = {
        hidden: { x: 0 },
        show: { x: -60 },
    }

    return (
        <Flex w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
            <Flex w='100%' justifyContent='flex-end'>
                <Text fontSize='12em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                    mr='-40px'>Projects</Text>
            </Flex>

            <Flex w='80%' flexDirection='column' justifyContent='center' my='100px' bgColor='bgDistinct' py='30px' px='50px' borderRadius='20px'>
                {
                    projects.map(project => {
                        return (
                            <motion.div
                                onHoverStart={() => setHover({ projTitle: project.title, state: true })}
                                onHoverEnd={() => setHover({ projTitle: project.title, state: false })}
                                transition={{ ease: "easeInOut", duration: .4 }}
                            >
                                <Flex w='100%' my='25px' overflow='hidden' alignItems='center'
                                >

                                    <Image src={project.banner} borderRadius='10px' transition='.4s'
                                        opacity={hover?.projTitle === project.title && hover.state ? .5 : 1} />

                                    {hover?.projTitle === project.title && hover.state &&
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            <motion.div variants={item} >
                                                <Flex marginTop='10px' marginRight='-50px' h='50px' w='50px' borderRadius='50%' border='2px solid white'>
                                                    <FontAwesomeIcon icon={faArrowUp19} />
                                                </Flex>
                                                <Flex marginTop='10px' marginRight='-50px' h='50px' w='50px' borderRadius='50%' border='2px solid white'>
                                                </Flex>

                                            </motion.div>


                                        </motion.div>
                                    }
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