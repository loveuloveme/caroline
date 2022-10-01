import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { useBoard } from "../../pages/BoardContext";

function StateItem({ id, name }){
    const { query, toggleState } = useBoard();
    const selected = query.state.find(item => item === id);
    
    return (
        <HStack
            onClick={() => toggleState(id)}

            w='full'
            spacing='3'
            bgColor={ selected ? 'gray.200' : 'gray.50' }
            px='3'
            py='2'
            borderRadius='md'
            cursor='pointer'

            _hover={{
                bgColor: selected ? `` : `gray.100`
            }}
        >
            <Box w='14px' h='14px' borderRadius='full' bgColor='apple.black'></Box>
            <Text fontSize='md' fontWeight='600' color='apple.black'>{name}</Text>
        </HStack>
    );
}

export default StateItem;