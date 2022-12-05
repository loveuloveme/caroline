import { Box, Text, Flex, Container, HStack, Image, VStack } from "@chakra-ui/react";
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
            bgColor='#000000'
        >
            <Container
                maxW='container.xl'
                color='white'
                h='450px'
                bgImage={require('../../assets/photos/footer.jpg')}
                bgSize='contain'
                bgRepeat='no-repeat'
                bgPosition='right'
            >
                <Flex
                    display='flex'
                    // justifyContent='space-between'
                    // alignItems='center'
                    flexDirection='column'
                    h='100%'
                >
                    <Flex
                        flex='1'
                        alignItems='center'
                    >
                        <Text w='50%' lineHeight='1.3' fontSize='2xl'>
                            Имя Каролина зародилось в Древней Греции и в переводе означает <strong>королева</strong>. Переродилось оно из мужского имени Карл - <strong>человек</strong>
                        </Text>
                    </Flex>
                    <Flex
                        borderTop='1px solid #323232'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <VStack
                            py='5'
                            alignItems='flex-start'
                            spacing='0'
                            color='#787878'
                        >
                            <Text color='#3c3c3c'>Хотелось бы, чтобы это было не хуже, чем у MrSkyScriper.</Text>
                            <Text>Никаких прав нет, ничего не защищено.</Text>
                            <Text color='white'>Сделано Папикяном Сергеем в <strong>2022</strong> году.</Text>
                        </VStack>
                        <Logotype color='white' fontSize='5xl' />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;