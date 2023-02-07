import {
    Center,
    Flex,
    GridItem,
    Image,
    Link,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TypeTodoBanner from "../../Images/TypeTodoBanner.png";
import GymNationBanner from "../../Images/GymNationBanner.png";
import NlwSetupBanner from "../../Images/NlwSetup.png";
import BarDoZéBanner from "../../Images/BarDoZéBanner.png";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGithub } from "react-icons/bs";
import Css from '../../Icons/Css.svg'
import Devices from '../../Icons/Devices.svg'
import Figma from '../../Icons/Figma.svg'
import Firebase from '../../Icons/Firebase.svg'
import Git from '../../Icons/Git.svg'
import GitHub from '../../Icons/GitHub.svg'
import Html from '../../Icons/Html.svg'
import Js from '../../Icons/Js.svg'
import React from '../../Icons/React.svg'
import Ts from '../../Icons/Ts.svg'
import TailwindCss from '../../Icons/TailwindCss.svg'
import Expo from '../../Icons/Expo.svg'
import ReactNative from '../../Icons/ReactNative.svg'
import Prisma from '../../Icons/Prisma.svg'
import StyledComponents from '../../Icons/StyledComponents.svg'

const ProjectsSec = () => {
    interface IHover {
        projTitle: string;
        state: boolean;
    }

    const [hover, setHover] = useState<IHover>();

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
            id: "TypeTodo",
            title: "TypeTodo",
            description: "typetodo description",
            gitRepo: "https://github.com/Andrevlopess/typeTodoList",
            url: "https://type-todos.vercel.app/",
            tools: [React, Ts, Firebase, Figma, Devices, Git, GitHub],
            banner: TypeTodoBanner,
        },
        {
            id: "GymNation",
            title: "Gym Nation",
            description: "GymNation description",
            gitRepo: "https://github.com/Andrevlopess/gymApp",
            url: "https://gym-nation.vercel.app/",
            banner: GymNationBanner,
            tools: [React, Ts, Firebase, Figma, Devices, Js, Git, GitHub]
        },
        {
            id: "Nlw Setup",
            title: "Nlw Setup",
            description: "Nlw Setup description",
            gitRepo: "https://github.com/Andrevlopess/nlwHabits",
            banner: NlwSetupBanner,
            tools: [React, ReactNative, Expo, Prisma,TailwindCss, Ts, Figma, Devices, Git, GitHub]
        },
        {
            id: "Bar do zé",
            title: "Bar do zé",
            description: "Bar do zé description",
            gitRepo: "https://github.com/Andrevlopess/BardozeMenu",
            url: "https://bardoze.netlify.app/",
            banner: BarDoZéBanner,
            tools: [React, Js, StyledComponents, Html, Css, Git, GitHub]
        },
    ];
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };


    const item = {
        hidden: { x: 0 },
        show: { x: -100 },
    };

    const tools = {
        hidden: { y: 0, opacity: 0 },
        show: { y: 60, opacity: 1 },
    }

    return (
        <Flex
            w="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Flex w="100%" justifyContent="flex-start">
                <Text
                    fontSize="12em"
                    color="txtDistact"
                    bgGradient="linear(to-r, violet300, violet200, violet100)"
                    bgClip="text"
                    ml="-40px"
                >
                    Projects
                </Text>
            </Flex>

            <Flex
                w="80%"
                flexDirection="column"
                justifyContent="center"
                my="100px"
                bgColor="bgDistinct"
                py="30px"
                px="50px"
                borderRadius="20px"
            >
                {projects.map((project) => {
                    return (
                        <motion.div
                            onHoverStart={() =>
                                setHover({ projTitle: project.title, state: true })
                            }
                            onHoverEnd={() =>
                                setHover({ projTitle: project.title, state: false })
                            }
                            transition={{ ease: "easeInOut", duration: 0.4 }}
                        >
                            {hover?.projTitle === project.title && hover.state && (
                                <Flex w='100%' h='0' justifyContent='center' >
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        style={{ display: 'flex' }}>
                                        {project.tools?.map((tool) => {
                                            return (
                                                <motion.div variants={tools}>
                                                    <Image src={tool} key={tool} boxSize='50px'
                                                        filter='drop-shadow(0px 10px 8px black)'
                                                        _hover={{ transform: 'scale(1.2)' }} transition='.2s'
                                                        m='5px'/>
                                                </motion.div>
                                            )
                                        })}
                                    </motion.div>
                                </Flex>
                            )}

                            <Flex
                                w="100%"
                                my="25px"
                                overflow='hidden'
                            >
                                <Image
                                    src={project.banner}
                                    borderRadius="10px"
                                    transition=".4s"
                                />



                                {hover?.projTitle === project.title && hover.state && (
                                    <motion.div
                                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                    >

                                        {project.url && (
                                            <motion.div variants={item}>
                                                <Link href={project.url}>
                                                    <Center
                                                        marginRight='-50px'
                                                        h="65px"
                                                        w="65px"
                                                        borderRadius="50%"
                                                        boxShadow="0 -10px 50px black"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to right, #4d0484, #9240d0) border-box",
                                                        }}
                                                    >
                                                        <FontAwesomeIcon

                                                            icon={faArrowUpRightFromSquare}
                                                            fontSize="20px"
                                                        />
                                                    </Center>
                                                </Link>
                                            </motion.div>
                                        )}

                                        <motion.div variants={item}>
                                            <Center
                                                marginRight='-50px'
                                                marginTop="10px"
                                                h="65px"
                                                w="65px"
                                                borderRadius="50%"
                                                boxShadow="0 -10px 50px black"
                                                style={{
                                                    background:
                                                        "linear-gradient(to right, #4d0484, #9240d0) border-box",
                                                }}
                                            >
                                                <Link href={project.gitRepo}>
                                                    <BsGithub size="35px" />
                                                </Link>
                                            </Center>
                                        </motion.div>


                                    </motion.div>
                                )}
                            </Flex>
                        </motion.div>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default ProjectsSec;
