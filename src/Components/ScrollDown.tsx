import React from 'react'
import { motion, useScroll } from "framer-motion";


type Props = {}

const ScrollDown = (props: Props) => {

    const { scrollYProgress } = useScroll();

    return (
        <div style={{
            width: '40px',
            border: '4px solid white',
            height: '80px',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <motion.div
                style={{
                    width: '20px',
                    height: "20px",
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}
                animate={{
                     translateY: [20, -20, 20, -20, 20]
                }}
                transition={{ ease: "easeInOut", duration: 5, repeat: Infinity, }}
            />
        </div>

    )
}

export default ScrollDown