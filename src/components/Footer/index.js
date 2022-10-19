import { Box, Heading, SimpleGrid, Text, Flex, Container, Icon, HStack } from "@chakra-ui/react";
import { GrClose } from 'react-icons/gr';
import Logotype from "../Logotype";
import { CloseIcon } from '@chakra-ui/icons'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ChakraBox from '../ChakraBox';
import { useEffect } from "react";

const sponsorVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, }
};

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
                        variants={sponsorVariants}
                    >
                        <HStack
                            spacing='5'
                        >
                            <Logotype color='white' size='2xl' />
                            <CloseIcon w='4' h='4' />
                            <Text fontSize='2xl'>MrSkyScriper</Text>
                        </HStack>
                    </ChakraBox>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;