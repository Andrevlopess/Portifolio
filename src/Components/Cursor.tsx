import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CursorProps {
    pointer: boolean;
}
const Cursor = ({ pointer }: CursorProps) => {
    console.log(pointer);


    const [mousePointer, setMousePointer] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const mouseMove = (e: MouseEvent) => {
            setMousePointer({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.addEventListener('mousemove', mouseMove)
        }


    }, [])

    const variants = {
        default: {
            x: mousePointer.x - 16,
            y: mousePointer.y - 16
        }
    }

    return (

        <>
            {pointer ?
                <motion.div
                    style={{
                        height: '32px',
                        width: '32px',
                        position: 'fixed',
                        border: '5px solid #6e01c0',
                        
                        zIndex: 9999,
                    }}
                    variants={variants} animate="default" />
                :
                <motion.div
                    style={{
                        height: '32px',
                        width: '32px',
                        position: 'fixed',
                        borderRadius: '50%',
                        border: '5px solid #6e01c0',
                        zIndex: 9999,
                    }}
                    variants={variants} animate="default" />
            }
        </>
    )
}

export default Cursor