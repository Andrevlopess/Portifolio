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
import TypeTodomockup from "../../Images/TypeTodoBanner.png";
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
import GymNationMockup from '../../Icons/ProjectsMockups/GymNationMockup.svg'
import NlwHabitsMockup from '../../Icons/ProjectsMockups/NlwHabitsMockup.svg'
import TypeTodoMockup from '../../Icons/ProjectsMockups/TypeTodoMockup.svg'
import BarDoZéMockup from '../../Icons/ProjectsMockups/BarDoZéMockup.svg'

const ProjectsSec = () => {
    interface IHover {
        projTitle: string;
        state: boolean;
    }

    const [hover, setHover] = useState<IHover>();

    interface Iproject {
        title: string;
        id: string;
        mockup: string;
        description: string;
        gitRepo: string;
        tools?: string[];
        url?: string;
    }
    const projects: Iproject[] = [
        {
            id: "TypeTodo",
            title: "TypeTodo",
            description: 'typetodo description',
            gitRepo: "https://github.com/Andrevlopess/typeTodoList",
            url: "https://type-todos.vercel.app/",
            tools: [React, Ts, Firebase, Figma, Devices, Git, GitHub],
            mockup: TypeTodoMockup,
        },
        {
            id: "GymNation",
            title: "Gym Nation",
            description: "GymNation description",
            gitRepo: "https://github.com/Andrevlopess/gymApp",
            url: "https://gym-nation.vercel.app/",
            mockup: GymNationMockup,
            tools: [React, Ts, Firebase, Figma, Devices, Js, Git, GitHub]
        },
        {
            id: "Nlw Setup",
            title: "Nlw Setup",
            description: "Nlw Setup description",
            gitRepo: "https://github.com/Andrevlopess/nlwHabits",
            mockup: NlwHabitsMockup,
            tools: [React, ReactNative, Expo, Prisma, TailwindCss, Ts, Figma, Devices, Git, GitHub]
        },
        {
            id: "Bar do zé",
            title: "Bar do zé",
            description: "Bar do zé description",
            gitRepo: "https://github.com/Andrevlopess/BardozeMenu",
            url: "https://bardoze.netlify.app/",
            mockup: BarDoZéMockup,
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
        show: { x: '-10vw' },
    };

    const tools = {
        hidden: { y: 0, opacity: 0 },
        show: { y: '8vw', opacity: 1 },
    }

    return (
        <Flex
            w="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            my='50px'
        >
            <Text
                fontSize="min(12em, 15vw)"
                color="txtDistact"
                bgGradient="linear(to-r, violet300, violet200, violet100)"
                bgClip="text"
            >
                Projects
            </Text>


            <Flex
                w="100%"
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
                        <Flex my='100px' key={project.id} w='100%' flexWrap='wrap' justifyContent='center'>
                            <Image src={project.mockup} />
                            <Flex flexDirection='column'>
                                <Text fontSize='min(4em, 6.5vw)'>
                                    {project.title}
                                </Text>
                                <Text>
                                    {project.description}
                                </Text>
                                <Flex>
                                    {
                                        project.tools?.map((tool) => {
                                            return (
                                                <Image src={tool} boxSize='30px' />
                                            )
                                        })
                                    }
                                </Flex>


                            </Flex>
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    );
};

export default ProjectsSec;
