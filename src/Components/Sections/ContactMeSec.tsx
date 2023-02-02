import { Center, Flex, Image, Link, Text } from "@chakra-ui/react"
import GmailIcon from '../../Icons/Images/GmailIcon.png'
import GitHubIcon from '../../Icons/Images/GitHubIcon.png'
import InstagramIcon from '../../Icons/Images/InstaGramIcon.png'
import WhatsAppIcon from '../../Icons/Images/WhatsAppIcon.png'
import TwitterIcon from '../../Icons/Images/TwitterIcon.png'
import FinalWave from "../../Icons/FinalWave"

const ContactMeSec = () => {

    return (
        <Flex w='100%' flexDirection='column' alignItems='center'>
            <Flex w='100%' >
                <Text
                    fontSize='10em'
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'
                    ml='-30px'
                >Contact me</Text>
            </Flex>
            <Flex w='80%' justifyContent='space-between' alignItems='center' flexWrap='wrap' my='100px'>
                <Flex mx='10px'>
                    <Link href='mailto:andrellopes021@gmail.com'>
                        <Image src={GmailIcon} boxSize='150px' />
                    </Link>
                </Flex>
                <Flex>
                    <Link href='https://www.instagram.com/andrevlopesz/'>
                        <Image src={InstagramIcon} boxSize='150px' />
                    </Link>
                </Flex>
                <Flex>
                    <Link href='https://wa.me/11954291628'>
                        <Image src={WhatsAppIcon} boxSize='150px' />
                    </Link>
                </Flex>
                <Flex>
                    <Link href='https://github.com/Andrevlopess'>
                        <Image src={GitHubIcon} boxSize='150px' />
                    </Link>
                </Flex>
                <Flex>
                    <Link href='https://twitter.com/andrevlopess'>
                        <Image src={TwitterIcon} boxSize='150px' />
                    </Link>
                </Flex>
            </Flex>

            <FinalWave />
        </Flex>
    )
}

export default ContactMeSec