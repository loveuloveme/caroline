import { Box, Text, Flex, Container, HStack } from "@chakra-ui/react";
import Logotype from "../Logotype";
import { CloseIcon } from '@chakra-ui/icons'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ChakraBox from '../FramerElement';
import { useEffect } from "react";

function Footer() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Box
            as='footer'
            bgColor='#0e0e0e'
        >
            <Container
                maxW='container.xl'
                color='white'

                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Box>
                    <Text
                        fontSize='5xl'
                        color='white'
                        fontWeight='bold'
                    >
                        Р П П Ю
                    </Text>
                </Box>
                <Flex
                    h='220px'
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <ChakraBox
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1, transition: { duration: 1 } },
                            hidden: { opacity: 0, }
                        }}
                    >
                        <HStack
                            spacing='5'
                        >
                            <Logotype color='white' fontSize='2xl' />
                            <CloseIcon w='4' h='4' />
                            <Text fontSize='2xl'>MCKAREVICH</Text>
                        </HStack>
                    </ChakraBox>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;