import { Flex, Heading, Text } from "@chakra-ui/react"
import { useParallax } from "react-scroll-parallax";
import CssSVG from "../../Icons/CssSVG";
import DeviceSVG from "../../Icons/DeviceSVG";
import FigmaSVG from "../../Icons/FigmaSVG";
import FirebaseSVG from "../../Icons/FirebaseSVG";
import GithubSVG from "../../Icons/GithubSVG";
import GitSVG from "../../Icons/GitSVG";
import HtmlSVG from "../../Icons/HtmlSVG";
import JsSVG from "../../Icons/JsSVG";
import ReactSVG from "../../Icons/ReactSVG";
import TsSVG from "../../Icons/TsSVG";


const SkillsSection = () => {


    const parallax = useParallax<HTMLDivElement>({
        easing:"easeInOutBack",
        translateX: [40, -20],
    });
    const invertedParralax = useParallax<HTMLDivElement>({
        easing: 'easeInOutBack',
        translateX: [-40, 20],
    });

    return (
        <Flex w='100%' flexDirection='column' alignItems='flex-start'>
            <Flex w='100%' justifyContent='flex-start'>
                <Text
                    ml='-40px'
                    fontSize='14em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                >Skills</Text>
            </Flex>

            <Flex ref={invertedParralax.ref} w='80%' justifyContent='space-around' alignContent='center'>
                <ReactSVG />
                <JsSVG />
                <TsSVG />
                <HtmlSVG />
                <CssSVG />
            </Flex>

            <Flex ref={parallax.ref} w='80%' justifyContent='space-around' alignContent='center' my='100px'>
                <FigmaSVG />
                <DeviceSVG />
                <FirebaseSVG />
                <GithubSVG />
                <GitSVG />

            </Flex>

        </Flex>
    )
}

export default SkillsSection