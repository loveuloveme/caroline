import { Box, Heading, Flex, VStack, HStack, Avatar, Text, Image } from "@chakra-ui/react";
import { CgHashtag, CgUserlane, CgMenuBoxed } from 'react-icons/cg';

import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";
import { useBoard } from "../../pages/BoardContext";

function LogotypeSection(){
    return (
        <Flex
            w='full'
            alignItems='center'
            mb='2'
        >
            <Heading
                fontWeight='700'
                letterSpacing='tight'
                fontSize='3xl'
                zIndex='10'
                color='apple.black'
                // ml='2'
                bgGradient='linear(to-r, #ff4e50, #f9d423)'
                bgClip='text'
            >
                CAROLINE
            </Heading>
        </Flex>
    );
}

function BoardStat({ title, users, tags, states }){
    const data = useBoard();

    return (
        <VStack
            w='350px'
            h='full'
            spacing='7'
            px='7'
            pb='10'
            pt='10'
            alignItems='flex-start'
            overflow='auto'
            zIndex='10'
            position='absolute'
            left='0'
            top='0'
            bgColor='whiteAlpha.500'
            style={{
                backdropFilter: 'blur(10px)'
            }}
        >
            <LogotypeSection />
            <Box
                w='full'
                px='0'
            >
                <Heading fontFamily="'JetBrains Mono', monospace" letterSpacing='tighter' fontSize='5xl' fontWeight='bold' color='apple.black'>
                    {title}
                </Heading>
                <Flex mt='2' alignItems='center' mb='2' fontFamily="'JetBrains Mono', monospace">
                    <Image bgColor='#ffffff' borderRadius='sm' src={require('./icons/trello.png')} w='15px' h='15px' mr='8px' />  
                    <Text fontSize='md' color='gray.400'>
                        доска Trello
                    </Text>
                </Flex> 
            </Box>

            <MenuList name='Исполнители' icon={CgUserlane}>
                {users.map((user, index) => <UserItem id={user.id} name={user.name} img={user.img} isMe={user.isMe} key={index} />)}
            </MenuList>

            <MenuList name='Тэги' icon={CgHashtag}>
                {tags.map((tag, index) => <TagItem id={tag.id} name={tag.name} color={tag.color} key={index} />)}
            </MenuList>

            <MenuList name='Состояния' icon={CgMenuBoxed}>
                {states.map((state, index) => <StateItem id={state.id} name={state.name} key={index} />)}
            </MenuList>
        </VStack>
    );
}

export default BoardStat;