import { Divider, Flex, Highlight, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'

export function AboutMeSection() {
    return (
        <Flex w='100%' mt='100px' flexDirection='column' justifyContent='center' alignItems='center' mb='100px'>
            <Flex w='100%' justifyContent='flex-end'>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}>
                    <Text
                        fontSize='12em'
                        color='txtDistact'
                        bgGradient='linear(to-r, violet300, violet200, violet100)'
                        bgClip='text'
                        mr='-40px'
                    >About me</Text>
                </motion.div>
            </Flex>

            <Flex w='80%' justifyContent='center' alignItems='center' mt='50px' flexDirection='column'>
                <Text fontSize='3.3em' textAlign='center'>
                    <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{  opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        viewport={{once: true}}>
                        <Highlight query='Frontend focused Web Developer' styles={{ color: 'violet100' }}>
                            A Frontend focused Web Developer building the Frontend of Websites and Web applications that leads to the success of the overall product.
                        </Highlight>
                    </motion.text>

                </Text>
                <Divider border='2px solid white' my='30px' />
                <Flex w='100%'>
                    <Text fontSize='1.4em'>
                        <motion.text
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                            <Highlight query='Escolas Padre Anchieta' styles={{ color: 'highBlue' }}>
                                I've been studying programming for over a year, learning the most famous and usable tools such as Typescript, Javascript, React JS
                            </Highlight>
                        </motion.text>


                    </Text>
                    <Text fontSize='1.4em'>
                        <motion.text
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            viewport={{ once: true }}>
                            <Highlight query='Escolas Padre Anchieta' styles={{ color: 'highBlue' }}>
                                Coursing Tech-integrated high Scholl at Escolas Padre Anchieta,
                                Jundiaí, SP
                            </Highlight>
                        </motion.text>
                    </Text>
                </Flex>
            </Flex>

        </Flex>
    )
}