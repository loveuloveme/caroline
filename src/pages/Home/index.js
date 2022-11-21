import { Box, Heading, SimpleGrid, Text, Flex, Container } from "@chakra-ui/react";
import Logotype from '../../components/Logotype';
import BoardItem from "../../components/BoardItem";
import Profile from "../../components/Profile";
import boards from '../../data';
import ChakraBox from "../../components/FramerElement";
import Footer from '../../components/Footer';

import bgImg from '../../assets/taskPink.png';
import { useSelector } from "react-redux";
import { pageTransition, pageVariants } from "../anims";

function Home() {
    return (
        <ChakraBox
            display='flex'
            flexDirection='column'
            w='100vw'
            h='100vh'
            bgColor='#f5f5f7'
            overflowX='hidden'

            initial='initial'
            animate='in'
            exit='out'

            variants={pageVariants}
            transition={pageTransition}
        >
            <Box
                bgColor='#fad8df'
            >
                <Container
                    maxW='container.xl'
                    bgImage={bgImg}
                    bgSize='contain'
                    bgPosition='right center'
                    bgRepeat='no-repeat'
                    pb='30px'
                >
                    <Flex
                        h='150px'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Logotype
                            fontSize='3xl'
                            color='apple.black'
                        />
                        <Profile />
                    </Flex>
                    <Flex
                        justifyContent='space-between'
                        alignItems='flex-end'
                        h='300px'
                    >
                        <Heading
                            mb='10'
                            fontSize='9xl'
                            fontWeight='bold'
                            color='apple.black'
                        >
                            BOARDS
                        </Heading>
                    </Flex>
                </Container>
            </Box>
            <Container
                maxW='container.xl'
                mt='-30px'
                flex='1'
            >
                <SimpleGrid
                    columns='4'
                    gap='3'
                    pb='100px'
                >
                    {boards.map(board => {
                        return (
                            <BoardItem name={board.title} type={board.type} />
                        );
                    })}
                </SimpleGrid>
            </Container>
            <Footer />
        </ChakraBox>
    );
}

export default Home;