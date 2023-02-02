import { Center, Flex, GridItem, Image, Link, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TypeTodoBanner from '../../Images/TypeTodoBanner.png'
import GymNationBanner from '../../Images/GymNationBanner.png'
import NlwSetupBanner from '../../Images/NlwSetup.png'
import BarDoZéBanner from '../../Images/BarDoZéBanner.png'
import ProjectBg from '../../Images/ProjectsBg.svg'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGithub } from 'react-icons/bs'
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
        show: { x: -80 },
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
                                        opacity={hover?.projTitle === project.title && hover.state ? .4 : 1} />

                                    {hover?.projTitle === project.title && hover.state &&
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            {project.url &&
                                                <motion.div variants={item}>
                                                    <Center marginTop='10px' marginRight='-50px' h='65px' w='65px' borderRadius='50%' boxShadow='0 -10px 50px black' style={{
                                                        background: 'linear-gradient(to right, #4d0484, #9240d0) border-box'
                                                    }}>
                                                        <Link href={project.url}>
                                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize='20px' />
                                                        </Link>
                                                    </Center>
                                                </motion.div>
                                            }

                                            <motion.div variants={item}>
                                                <Center marginTop='10px' marginRight='-50px' h='65px' w='65px' borderRadius='50%' boxShadow='0 -10px 50px black' style={{
                                                    background: 'linear-gradient(to right, #4d0484, #9240d0) border-box'
                                                }}>
                                                    <Link href={project.gitRepo}>
                                                            <BsGithub size='35px'/>
                                                   </Link>
                                                </Center>

                                            </motion.div>


                                        </motion.div>
                                    }
                                </Flex>
                            </motion.div>
                        )
                    })
                }
            </Flex >




        </Flex >
    )
}

export default ProjectsSec