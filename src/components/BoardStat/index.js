import { Flex, VStack, Text, Box, useBoolean, HStack } from "@chakra-ui/react";
import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";
import { useBoard } from "../../pages/Board/context";
import { Icon } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoExpand, IoGitBranch } from 'react-icons/io5';
import Logotype from "../Logotype";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import FramerBox from "../FramerElement";
import Button, { VARIANTS } from "../Button";

const barVariants = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
    hidden: {
        opacity: 0,
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

const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
}

function BoardStat({ url, title, users, tags, states, handle }) {
    const { query, clearUser, clearTag, clearState } = useBoard();

    const [isOpen, setOpen] = useBoolean(true);
    const [isReady, setReady] = useBoolean(true);

    const controls = useAnimation();

    const openBoard = () => {
        window.open(url);
    };

    const setFullscreen = () => {
        handle.enter();
    };

    useEffect(() => {
        controls.start('visible');
    }, []);

    useEffect(() => {
        controls.start(isOpen ? 'slideOpen' : 'slideHidden');
    }, [isOpen]);

    return (
        <FramerBox
            display='flex'
            position='absolute'
            left='30px'
            h='100%'

            variants={barVariants}
            animate={controls}
            initial='hidden'
            exit='slideHidden'

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
                    <Logotype fontSize='3xl' />
                    <FramerBox
                        bgColor='white'
                        px='5'
                        py='5'
                        borderRadius='xl'

                        variants={itemVariants}
                        w='100%'
                    >
                        <Text mb='10px' fontSize='lg' fontWeight='600' color='#b3b3b3'>Доска</Text>
                        <Text
                            lineHeight='50px'
                            letterSpacing='tighter'
                            fontSize='5xl'
                            fontWeight='700'
                            color='black'
                        >
                            {title}
                        </Text>
                        <HStack
                            w='100%'
                            mt='7'
                        >
                            <Button
                                flex='1'
                                variant={VARIANTS.BLUE}
                                onClick={openBoard}
                            >
                                Открыть доску
                            </Button>
                            <Button
                                w='50px'
                                h='50px'
                                onClick={setFullscreen}
                            >
                                <Icon
                                    w='5'
                                    h='5'
                                    as={IoExpand}
                                />
                            </Button>
                            {/* <Button
                                w='50px'
                                h='50px'
                            >
                                <Icon
                                    w='5'
                                    h='5'
                                    as={IoGitBranch}
                                />
                            </Button> */}
                        </HStack>
                    </FramerBox>
                    <FramerBox
                        w='100%'
                        variants={itemVariants}
                    >
                        <MenuList
                            name='Исполнители'
                            active={query.user.length}
                            clear={clearUser}
                            variants={itemVariants}
                        >
                            {users.map((user, index) => <UserItem id={user.id} name={user.name} img={user.img} isMe={user.isMe} key={index} />)}
                        </MenuList>
                    </FramerBox>

                    <FramerBox
                        w='100%'
                        variants={itemVariants}
                    >
                        <MenuList
                            name='Тэги'
                            active={query.tag.length}
                            clear={clearTag}
                        >
                            {tags.map((tag, index) => <TagItem id={tag.id} name={tag.name} color={tag.color} key={index} />)}
                        </MenuList>
                    </FramerBox>

                    <FramerBox
                        w='100%'
                        variants={itemVariants}
                    >
                        <MenuList
                            name='Состояния'
                            active={query.state.length}
                            clear={clearState}
                        >
                            {states.map((state, index) => <StateItem id={state.id} name={state.name} key={index} />)}
                        </MenuList>
                    </FramerBox>
                </VStack>
            </Box>
            <Flex
                w='14'
                h='100%'
                justifyContent='center'
                alignItems='center'
                zIndex='1000'
            >
                <FramerBox
                    opacity={1}
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: isReady ? 1 : 0.5,
                    }}
                    transition={{
                        duration: 0.2
                    }}
                >
                    <FramerBox
                        whileHover={{ scale: 1.1 }}
                        onClick={isReady ? setOpen.toggle : undefined}
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
                            cursor={isReady && 'pointer'}
                        />
                    </FramerBox>
                </FramerBox>
            </Flex>
        </FramerBox >
    );
}

export default BoardStat;