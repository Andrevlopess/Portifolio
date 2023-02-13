import { Center, Flex, Image, Link, Text } from "@chakra-ui/react"
import GmailIcon from '../../Images/Images/GmailIcon.png'
import GitHubIcon from '../../Images/Images/GitHubIcon.png'
import InstagramIcon from '../../Images/Images/InstagramIcon.png'
import WhatsAppIcon from '../../Images/Images/WhatsAppIcon.png'
import TwitterIcon from '../../Images/Images/TwitterIcon.png'
import FinalWave from "../../Icons/FinalWave.svg"
import { motion } from 'framer-motion'

const ContactMeSec = () => {

    const container = {
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const contacts = {
        hidden: { y: 0, opacity: 0 },
        show: { y: 60, opacity: 1 },
    }


    return (
        <Flex w='100%' flexDirection='column' alignItems='center' >
          
                <Text
                    fontSize="min(12em, 15vw)"
                    color='txtDistact'
                    bgGradient='linear(to-r, violet300, violet200, violet100)'
                    bgClip='text'

                >Contact me</Text>
           

            <motion.div
                variants={container}
                style={{ display: 'flex', width: '80%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', margin:'50px 0' }}
                whileInView="show">

                <motion.div style={{ display: 'flex' }} variants={contacts}>
                    <Link href='mailto:andrellopes021@gmail.com'>
                        <Image src={GmailIcon} boxSize='min(5em, 13vw)' transition='.5s' _hover={{transform:'scale(1.1)'}}/>
                    </Link>
                </motion.div>


                <motion.div style={{ display: 'flex' }} variants={contacts}>
                    <Link href='https://www.instagram.com/andrevlopesz/'>
                        <Image src={InstagramIcon} boxSize='min(5em, 13vw)' transition='.5s' _hover={{transform:'scale(1.1)'}}/>
                    </Link>
                </motion.div>
                <motion.div style={{ display: 'flex' }} variants={contacts}>
                    <Link href='https://wa.me/11954291628'>
                        <Image src={WhatsAppIcon} boxSize='min(5em, 13vw)' transition='.5s' _hover={{transform:'scale(1.1)'}}/>
                    </Link>
                </motion.div>


                <motion.div style={{ display: 'flex' }} variants={contacts}>
                    <Link href='https://github.com/Andrevlopess'>
                        <Image src={GitHubIcon} boxSize='min(5em, 13vw)' transition='.5s' _hover={{transform:'scale(1.1)'}}/>
                    </Link>
                </motion.div>


                <motion.div style={{ display: 'flex' }} variants={contacts}>
                    <Link href='https://twitter.com/andrevlopess'>
                        <Image src={TwitterIcon} boxSize='min(5em, 13vw)' transition='.5s' _hover={{transform:'scale(1.1)'}}/>
                    </Link>
                </motion.div>

            </motion.div>
            <Image src={FinalWave} mt='50px'/>
        </Flex>
    )
}

export default ContactMeSec