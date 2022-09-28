import { Box, Heading, Flex, VStack, HStack, Avatar, Text, Image } from "@chakra-ui/react";

import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";

function BoardStat({ title, users, tags, states }){
    return (
        <VStack
            w='350px'
            h='full'
            spacing='7'
            pl='7'
            pb='10'
            pt='2'
            pr='7'
            alignItems='flex-start'
            overflow='auto'
            zIndex='1'
        >
            <Box
                mb='4'
                bgColor='gray.100'
                w='full'
                px='5'
                py='5'
                borderRadius='lg'
            >
                <Heading fontSize='2xl' fontFamily='"JetBrains Mono", monospace' color='apple.black'>{title}</Heading>
                <Flex mt='2' alignItems='center'>
                    <Image bgColor='#ffffff' borderRadius='full' src={require('./icons/trello.png')} w='16px' h='16px' mr='7px' />  
                    <Text color='blackAlpha.600'>
                        доска Trello
                    </Text>
                </Flex>
            </Box>

            <MenuList name='Исполнители'>
                {users.map((user, index) => <UserItem name={user.name} img={user.img} key={index} />)}
            </MenuList>

            <MenuList name='Тэги'>
                {tags.map((tag, index) => <TagItem name={tag.name} color={tag.color} key={index} />)}
            </MenuList>

            <MenuList name='Состояния'>
                {states.map((state, index) => <StateItem name={state.name} key={index} />)}
            </MenuList>
            
            <Text color='gray.400'>Сделано <strong>Сергеем Папикяном</strong></Text>
        </VStack>
    );
}

export default BoardStat;