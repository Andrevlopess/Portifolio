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
            description: 'TypeTodo is a todo project built with react and Chakra-ui for front-end, firebase for back-end and authentication, and Figma for design. Manage your daily tasks. ',
            gitRepo: "https://github.com/Andrevlopess/typeTodoList",
            url: "https://type-todos.vercel.app/",
            tools: [React, Ts, Firebase, Figma, Devices, Git, GitHub],
            mockup: TypeTodoMockup,
        },
        {
            id: "GymNation",
            title: "Gym Nation",
            description: "Create your own workout with more than 1300 exercises, search and like your favorite exercises, built with react and Chakra-ui for front-end, firebase for back-end. ",
            gitRepo: "https://github.com/Andrevlopess/gymApp",
            url: "https://gym-nation.vercel.app/",
            mockup: GymNationMockup,
            tools: [React, Ts, Firebase, Figma, Devices, Js, Git, GitHub]
        },
        {
            id: "Nlw Setup",
            title: "Nlw Setup",
            description: "NLw Setup is an event from Rocketseat, that makes an app to create new habits, built with React and React Native for front-end and prisma for back-end.",
            gitRepo: "https://github.com/Andrevlopess/nlwHabits",
            mockup: NlwHabitsMockup,
            tools: [React, ReactNative, Expo, Prisma, TailwindCss, Ts, Figma, Devices, Git, GitHub]
        },
        {
            id: "Bar do zé",
            title: "Bar do zé",
            description: "Bar do zé is and online menu, where you can order foods from the restaurant.",
            gitRepo: "https://github.com/Andrevlopess/BardozeMenu",
            url: "https://bardoze.netlify.app/",
            mockup: BarDoZéMockup,
            tools: [React, Js, StyledComponents, Html, Css, Git, GitHub]
        },
    ];

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
            >
                {projects.map((project) => {
                    return (
                        <Flex bgColor="bgDistinct" borderRadius='50px' p='50px' my='100px' key={project.id} w='100%' flexWrap='wrap' justifyContent='center' >
                            <Image src={project.mockup} mb='30px' />
                            <Flex flexDirection='column' mx='50px'>
                                <Text fontSize='min(4em, 8.5vw)' mb='20px' textAlign='center'>
                                    {project.title}
                                </Text>
                                <Text w='min(25em, 65vw)' mb='30px' fontSize='min(1.4em, 4.5vw)' >
                                    {project.description}
                                </Text>
                                <Flex flexDirection='column'>
                                    <Text color='violet100' fontSize='min(2em, 4.5vw)'>Built with:</Text>
                                    <Flex flexWrap='wrap' w='min(30em, 65vw)' justifyContent='center' my='10px'>
                                        {
                                            project.tools?.map((tool) => {
                                                return (
                                                    <Image src={tool} boxSize='min(3em, 7.5vw)' m='5px' />
                                                )
                                            })
                                        }
                                    </Flex>

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
