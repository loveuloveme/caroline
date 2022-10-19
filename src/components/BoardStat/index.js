import { Flex, VStack, Heading, Text, Box, SimpleGrid, useBoolean, HStack } from "@chakra-ui/react";
import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";
import { useBoard } from "../../pages/Board/context";
import { Icon } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoExpand, IoGitBranch } from 'react-icons/io5';
import { ImTrello } from 'react-icons/im';
import { SiJira } from 'react-icons/si';
import Logotype from "../Logotype";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ChakraBox from "../ChakraBox";
import Button from "../Button";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
    slideHidden: {
        left: -370,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: '0.20'
        },
    },
    slideOpen: {
        left: 30,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: '0.20'
        },
    }
}

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
}

function BoardStat({ title, users, tags, states, handle, onChange, type }) {
    const { query, clearUser, clearTag, clearState } = useBoard();

    const [isOpen, setOpen] = useBoolean(true);
    const [ready, setReady] = useBoolean(true);

    const controls = useAnimation();

    useEffect(() => {
        controls.start(isOpen ? 'slideOpen' : 'slideHidden');
        onChange(isOpen);
    }, [isOpen, onChange, controls])

    const openBoard = () => {
        window.open('https://trello.com');
    };

    const setFullscreen = () => {
        handle.enter();
    };

    useEffect(() => {
        controls.start("visible");
    }, [])

    return (
        <ChakraBox
            display='flex'
            position='absolute'
            left='30px'
            h='100%'

            // animate={{
            //     left: isOpen ? '30px' : '-370px'
            // }}

            // transition={{ ease: 'anticipate', type: 'spring', bounce: '0' }}
            initial="hidden"
            variants={list}
            animate={controls}
            exit="slideHidden"

            onAnimationComplete={() => setReady.on()}
            onAnimationStart={() => setReady.off()}
        >
            <Box
                w='370px'
                h='100%'
                spacing='0'
                alignItems='flex-start'

                overflow='auto'
                zIndex='1000'
                className='no-scroll'
                pt='5vh'
            >
                <VStack
                    pb='10'
                    w='full'
                    flex='1'
                    spacing='7'
                    alignItems='flex-start'
                >
                    <Logotype size='3xl' />
                    <ChakraBox
                        bgColor='white'
                        px='5'
                        py='5'
                        borderRadius='xl'

                        variants={item}
                    >
                        <Text mb='10px' fontSize='lg' fontWeight='600' color='#b3b3b3'>Доска</Text>
                        <Text
                            lineHeight='50px'
                            letterSpacing='tighter'
                            fontSize='5xl'
                            fontWeight='700'
                            color='black'
                            className='last-colored'
                        >
                            {title}
                        </Text>
                        <HStack
                            w='100%'
                            mt='7'
                        >
                            <Button
                                flex='1'
                                variant='blue'
                                onClick={openBoard}
                            >
                                Открыть доску
                            </Button>
                            <Button
                                w='50px'
                                h='50px'
                                variant='gray'
                                onClick={setFullscreen}
                            >
                                <Icon
                                    w='5'
                                    h='5'
                                    as={IoExpand}
                                />
                            </Button>
                            <Button w='50px' h='50px'>
                                <Icon w='5' h='5' as={IoGitBranch} />
                            </Button>
                            {/* <Button
                                size='md'
                                colorScheme='blackAlpha'
                                variant='solid'
                                bgColor='apple.blue.light'
                                fontSize='md'
                                leftIcon={<Icon mr='2' w='4' h='4' as={type == 'jira' ? ImTrello : SiJira} />}
                                justifyContent='flex-start'
                                py='5'
                                onClick={openBoard}
                            >
                                Доска
                            </Button> 
                            <Button
                                size='md'
                                colorScheme='blackAlpha'
                                variant='solid'
                                bgColor='black'
                                _hover={{ bg: '#323232' }}
                                leftIcon={<Icon w='5' h='5' as={IoExpand} />}
                                justifyContent='flex-start'
                                onClick={setFullscreen}
                            >
                                Увеличить
                            </Button>
                            <Button
                                size='md'
                                colorScheme='blackAlpha'
                                variant='solid'
                                bgColor='black'
                                leftIcon={<Icon w='5' h='5' as={IoGitBranch} />}
                                justifyContent='flex-start'
                                gridColumn='span 2'
                            >
                                Расставить
                            </Button>*/}
                        </HStack>
                    </ChakraBox>
                    <ChakraBox
                        w='100%'
                        variants={item}
                    >
                        <MenuList
                            name='Исполнители'
                            active={query.user.length}
                            clear={clearUser}
                            variants={item}
                        >
                            {users.map((user, index) => <UserItem id={user.id} name={user.name} img={user.img} isMe={user.isMe} key={index} />)}
                        </MenuList>
                    </ChakraBox>

                    <ChakraBox
                        w='100%'
                        variants={item}
                    >
                        <MenuList
                            name='Тэги'
                            active={query.tag.length}
                            clear={clearTag}
                        >
                            {tags.map((tag, index) => <TagItem id={tag.id} name={tag.name} color={tag.color} key={index} />)}
                        </MenuList>
                    </ChakraBox>

                    <ChakraBox
                        w='100%'
                        variants={item}
                    >
                        <MenuList
                            name='Состояния'
                            active={query.state.length}
                            clear={clearState}
                        >
                            {states.map((state, index) => <StateItem id={state.id} name={state.name} key={index} />)}
                        </MenuList>
                    </ChakraBox>
                </VStack>
            </Box>
            <Flex
                w='14'
                h='100%'
                justifyContent='center'
                alignItems='center'
                zIndex='1000'
            >
                <ChakraBox
                    opacity={1}
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: ready ? 1 : 0.5,
                    }}
                    transition={{
                        duration: 0.2
                    }}
                >
                    <ChakraBox
                        whileHover={{ scale: 1.1 }}
                        onClick={ready && setOpen.toggle}
                        h='40px'

                        initial={{
                            rotate: 0
                        }}

                        animate={{
                            rotate: isOpen ? 0 : 180,
                        }}
                    >
                        <Icon
                            w='10'
                            h='10'
                            as={MdOutlineKeyboardArrowLeft}
                            cursor={ready && 'pointer'}
                        />
                    </ChakraBox>
                </ChakraBox>
            </Flex>
        </ChakraBox >
    );
}

export default BoardStat;