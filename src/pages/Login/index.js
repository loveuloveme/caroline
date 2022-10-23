import {
    Flex,
    Box,
    Stack,
    Link,
    Heading,
    Text,
    Container,
    VStack,
    Icon,
} from '@chakra-ui/react';
import { MdEmail, MdPassword } from 'react-icons/md';
import Button from '../../components/Button';
import FramerBox from '../../components/FramerElement';

import Logotype from '../../components/Logotype';
import TextInput from './TextInput';

import Board from '../../components/Board';

import boardData from './boardData';
import { useEffect, useState } from 'react';
import { parseEdges, parseNodes } from '../../helpers';
import BoardProvider from '../Board/context';


const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
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

export default function SimpleCard() {

    const [previewData, setPreviewData] = useState({
        nodes: [],
        edges: []
    });

    useEffect(() => {
        setPreviewData(prev => ({
            ...prev,
            nodes: parseNodes(boardData).map(nds => ({ ...nds, draggable: false, selectable: false })),
            edges: parseEdges(boardData)
        }));
    }, []);

    return (
        <FramerBox
            style={{
                flexDirection: 'column'
            }}
            display='flex'
            minH='100vh'

            initial='initial'
            animate='in'
            exit='out'

            variants={pageVariants}
            transition={pageTransition}
        >
            <Container
                flex='1'
                h='100%'
                maxW='100%'

                display='flex'
                flexDirection='row-reverse'
                justifyContent='flex-end'
                alignItems='stretch'
                px='0'
            >
                <Box
                    flex='1'
                    alignItems='flex-start'
                    position='relative'
                    overflow='hidden'
                >
                    <BoardProvider>
                        <Board
                            nodes={previewData.nodes}
                            edges={previewData.edges}
                            miniMap={false}
                            zoomOnScroll={false}
                            panOnScroll={false}
                            panOnDrag={false}
                        />
                    </BoardProvider>
                </Box>
                <Flex
                    direction='column'
                    w='25%'
                    justifyContent='center'
                    zIndex='10'
                    bgColor='white'
                    backdropFilter='blur(5px)'
                    alignItems='center'
                    minW='450px'
                >
                    <Flex
                        p='10%'
                        w='100%'
                        display='flex'
                        pt='8'
                    >
                        <Logotype fontSize='3xl' />
                    </Flex>
                    <Flex
                        direction='column'
                        justifyContent='center'
                        flex='1'
                        maxW='500px'
                        w='80%'
                    >
                        <VStack
                            mb='55px'
                            spacing='3'
                            alignItems='flex-start'
                        >
                            <Heading
                                fontSize='7xl'
                                color='black'
                                ml='-5px'
                            >
                                Вход
                            </Heading>
                            <Text color='#9d9d9d'>Как и говорилось, сейчас без этого никак</Text>
                        </VStack>

                        <Stack
                            w='100%' spacing='5'
                        >
                            <TextInput type='email' placeholder='Email' icon={<Icon w='5' h='5' as={MdEmail} />} />
                            <TextInput type='password' placeholder='Пароль' icon={<Icon w='5' h='5' as={MdPassword} />} />
                        </Stack>
                        <Button
                            variant='black'
                            mt='60px'
                        >
                            Войти
                        </Button>
                    </Flex>
                    <Flex
                        w='100%'
                        h='60px'
                        bgColor='caroline.blue'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Link
                            color='white'
                            fontWeight='600'
                            fontSize='sm'
                        >
                            Нет аккаунта? Создать.
                        </Link>
                    </Flex>
                </Flex>
            </Container>

        </FramerBox >
    );
}