import { Box, Heading, SimpleGrid, Text, Flex, Container, HStack } from "@chakra-ui/react";
import Logotype from '../../components/Logotype';
import BoardItem from "../../components/BoardItem";
// import boards from '../../data';
import ChakraBox, { FramerVideo } from "../../components/FramerElement";
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from "react-redux";
import { pageTransition, pageVariants } from "../anims";

import Button from '../../components/Button';
import { Icon } from '@chakra-ui/react';
import { IoClose, IoPencil } from 'react-icons/io5';
import AddBoard from "../../components/AddBoard";
import UserProfile from "../../components/UserProfile";
import { useState } from "react";
import { useEffect } from "react";
import { getBoards } from "../../store/board/thunk";
import NothingItem from "../../components/NothingItem";

function Home() {
    const [isEdit, setEdit] = useState(false);

    const { boards, loading, error } = useSelector(state => state.board);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoards());
    }, []);

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
                bgSize='cover'
                bgColor='black'
                // bgImage={require('../../assets/photos/heh2.jpg')}
                bgPosition='center bottom'
                position='relative'
                zIndex='0'
            >
                <FramerVideo
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        zIndex: -1,
                        opacity: 0.4
                    }}
                    // poster={poster}
                    autoPlay={true}
                    loop={true}
                    controls={false}
                    playsInline
                    muted
                    preload="none"


                    animate={{
                        opacity: [0, 0.2],
                        transition: {
                            duration: 2,
                            delay: 2
                        }
                    }}
                >
                    <source src={require('../../assets/videos/background.webm')} type='video/webm' />
                </FramerVideo>
                <Box
                    position='absolute'
                    top='0'
                    left='0'
                    w='100%'
                    h='100%'
                    // bgColor='red'
                    zIndex='-1'
                    bgImage='linear-gradient(to bottom, transparent 0%, black 100%)'
                />
                <Box
                    backdropFilter='blur(15px)'
                    bgColor='rgba(0, 0, 0, 0.2)'
                >
                    <Container
                        maxW='container.xl'
                        position='relative'
                        borderBottom='1px solid #787878'
                    >
                        <Flex
                            h='100px'
                            alignItems='center'
                            justifyContent='space-between'
                            zIndex='100'
                        >
                            <Logotype
                                fontSize='3xl'
                                color='white'
                            />

                        </Flex>
                    </Container>
                </Box>
                <Container
                    maxW='container.xl'
                    bgSize='contain'
                    pb='30px'
                >
                    <Flex
                        justifyContent='space-between'
                        alignItems='flex-end'
                        h='450px'
                        pb='5'
                        position='relative'
                    >
                        <Heading
                            fontSize='9xl'
                            fontWeight='bold'
                            color='white'
                        >
                            BOARDS
                        </Heading>
                        <UserProfile />
                        {boards.length > 0 &&
                            <HStack>
                                <AddBoard />
                                <Button
                                    variant='gray'
                                    onClick={() => setEdit(!isEdit)}
                                >
                                    <Icon
                                        w='5'
                                        h='5'
                                        as={isEdit ? IoClose : IoPencil}
                                    />
                                </Button>
                            </HStack>
                        }
                    </Flex>
                </Container>
            </Box>
            <Container
                maxW='container.xl'
                mt='-30px'
                flex='1'
                zIndex='1'
                minHeight='700px'
                pb='100px'
            >

                {boards.length > 0 ?
                    <SimpleGrid
                        columns='4'
                        gap='3' s
                    >
                        {boards.map(board => {
                            return (
                                <BoardItem boardId={board.boardId} isEdit={isEdit} name={board.title} type={board.type} />
                            );
                        })}
                    </SimpleGrid>
                    :
                    <NothingItem loading={loading} error={error} gridColumn='span 5' gridRow='1 / 50' />
                }

            </Container>
            <Footer />
        </ChakraBox>
    );
}

export default Home;