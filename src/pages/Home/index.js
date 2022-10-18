import { Box, Heading, SimpleGrid, Text, Flex, Container, Avatar, HStack, useBoolean, Button } from "@chakra-ui/react";
import Logotype from '../../components/Logotype';
import BoardItem from "../../components/BoardItem";
import AddBoard from "../../components/BoardItem/AddBoard";
import Profile from "../../components/Profile";
import boards from '../data';
import GridLayout from "react-grid-layout";
import { useState, useMemo, useEffect } from "react";

// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
import ChakraBox from "../../components/ChakraBox";

import bgImage from './bgImagePink.png';

const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
};

function Home() {
    const boardItemSize = useMemo(() => ({ w: 1, h: 5 }), []);
    const [layout, setLayout] = useState([]);

    useEffect(() => {
        const layout = boards.map((board, index) => {
            return {
                i: board.id,
                ...boardItemSize,
                x: boardItemSize.w * (index % 3),
                y: boardItemSize.w * Math.floor(index / 3)
            };
        });

        setLayout(layout);
    }, [boardItemSize]);

    return (
        <ChakraBox
            w='100vw'
            h='100vh'
            bgColor='#f5f5f7'
            overflowX='hidden'
            pb='100px'

            initial="initial"
            animate="in"
            exit="out"

            variants={pageVariants}
            transition={pageTransition}
        >
            <Box
                bgColor='#fad8df'
            >
                <Container
                    maxW='container.xl'
                    bgImage={bgImage}
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
                        <Logotype size='4xl' color='apple.black' />
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
                            <Text as='sub' fontSize='md'>доски короче</Text>
                        </Heading>
                    </Flex>
                </Container>
            </Box>
            <Container
                maxW='container.xl'
                mt='-30px'
            >
                {/* <GridLayout
                    className='home-layout'
                    layout={layout}
                    cols={3}
                    rowHeight={30}
                    width={1280}
                    isResizable={false}
                    isDraggable={false}
                >
                    {boards.map(board => {
                        return (
                            <Box key={board.id}>
                                <BoardItem name={board.title} type={board.type} />
                            </Box>
                        );
                    })}
                </GridLayout> */}
                <SimpleGrid
                    columns='4'
                    gap='3'
                >
                    {boards.map(board => {
                        return (
                            <BoardItem name={board.title} type={board.type} />
                        );
                    })}
                </SimpleGrid>
            </Container>
        </ChakraBox>
    );
}

export default Home;