import { Flex, VStack, Heading, Text, Box, Button, SimpleGrid, useBoolean } from "@chakra-ui/react";
import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";
import { useBoard } from "../../pages/Board/context";
import { Icon } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoExpand, IoGitBranch } from 'react-icons/io5';
import { ImTrello } from 'react-icons/im';
import Logotype from "../Logotype";

import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useEffect } from "react";

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


function BoardStat({ title, users, tags, states, handle, onChange }) {
    const { query, clearUser, clearTag, clearState } = useBoard();

    const [isOpen, setOpen] = useBoolean(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen.on();
        }, 1500)
    }, [])

    useEffect(() => {
        onChange(isOpen);
    }, [isOpen, onChange])

    const openBoard = () => {
        window.open('https://trello.com');
    };

    const setFullscreen = () => {
        handle.enter();
    };

    return (
        <ChakraBox
            display='flex'
            position='absolute'
            left='-350px'
            h='100%'

            animate={{
                left: isOpen ? '30px' : '-350px'
            }}

            transition={{ ease: 'anticipate', type: 'spring', bounce: '0.30' }}
        >
            <Box
                w='340px'
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
                    <Logotype />
                    <Box
                        bgColor='white'
                        px='5'
                        py='5'
                        borderRadius='xl'
                    >
                        <Text fontFamily='"Comfortaa", cursive' fontSize='lg' fontWeight='600' color='#b3b3b3' mb='2'>Доска</Text>
                        <Heading
                            fontFamily='"Comfortaa", cursive'
                            letterSpacing='normal'
                            fontSize='4xl'
                            fontWeight='700'
                            color='black'
                            className='last-colored'
                        >
                            {title}
                        </Heading>
                        <SimpleGrid
                            w='100%'
                            columns={2}
                            spacing={2}
                            mt='7'
                        >
                            <Button
                                size='md'
                                colorScheme='blackAlpha'
                                variant='solid'
                                bgColor='black'
                                leftIcon={<Icon w='5' h='5' as={ImTrello} />}
                                justifyContent='flex-start'
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
                            </Button>
                        </SimpleGrid>
                    </Box>
                    <MenuList
                        name='Исполнители'
                        active={query.user.length}
                        clear={clearUser}
                    >
                        {users.map((user, index) => <UserItem id={user.id} name={user.name} img={user.img} isMe={user.isMe} key={index} />)}
                    </MenuList>

                    <MenuList
                        name='Тэги'
                        active={query.tag.length}
                        clear={clearTag}
                    >
                        {tags.map((tag, index) => <TagItem id={tag.id} name={tag.name} color={tag.color} key={index} />)}
                    </MenuList>

                    <MenuList
                        name='Состояния'
                        active={query.state.length}
                        clear={clearState}
                    >
                        {states.map((state, index) => <StateItem id={state.id} name={state.name} key={index} />)}
                    </MenuList>
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
                    whileHover={{ scale: 1.1 }}
                    onClick={setOpen.toggle}
                    h='40px'
                    animate={{
                        rotate: isOpen ? 0 : 180,
                    }}
                >
                    <Icon
                        w='10'
                        h='10'
                        as={MdOutlineKeyboardArrowLeft}
                        cursor='pointer'
                    />
                </ChakraBox>
            </Flex>
        </ChakraBox>
    );
}

export default BoardStat;