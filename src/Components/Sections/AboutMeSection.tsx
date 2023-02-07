import { Divider, Flex, Highlight, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'

export function AboutMeSection() {
    return (
        <Flex w='100%' mt='100px' flexDirection='column' justifyContent='center' alignItems='center' mb='100px'>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true }}>
                <Text
                    fontSize='min(12em, 15vw)'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'

                >About me</Text>
            </motion.div>


            <Flex w='80%' justifyContent='center' alignItems='center' mt='50px' flexDirection='column'>
                <Text fontSize='min(3.3em, 4.8vw)' textAlign='center'>
                    <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        viewport={{ once: true }}>
                        <Highlight query='Frontend focused Web Developer' styles={{ color: 'violet100' }}>
                            A Frontend focused Web Developer building the Frontend of Websites and Web applications that leads to the success of the overall product.
                        </Highlight>
                    </motion.text>

                </Text>
                <Divider border='2px solid white' my='30px' />
                <Flex w='100%' flexWrap='wrap' >
                    <Text fontSize='min(1.4em, 3.5vw)' my='10px' 
                     borderLeft='2px' borderTop='2px' borderColor='violet100' p='10px' borderRadius='10px'>
                        <motion.text
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                            <Highlight
                                query={['Typescript', 'Javascript', 'React Js']} styles={{ color: 'violet100' }}>
                                I've been studying programming for over a year, learning the most famous and usable tools such as Typescript, Javascript, React JS.
                            </Highlight>
                        </motion.text>


                    </Text>
                    <Text fontSize='min(1.4em, 4vw)' my='10px' textAlign='end' 
                    borderLeft='2px' borderTop='2px' borderColor='highBlue' p='10px' borderRadius='10px'>
                        <motion.text
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            viewport={{ once: true }}>
                            <Highlight query='Escolas Padre Anchieta' styles={{ color: 'highBlue' }}>
                                Coursing Tech-integrated high Scholl at Escolas Padre Anchieta,
                                Jundiaí, SP.
                            </Highlight>
                        </motion.text>
                    </Text>
                </Flex>
            </Flex>

        </Flex>
    )
}