import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { hex } from 'color-convert';
import { useEffect, useState } from "react";
import { useBoard } from "../../pages/BoardContext";

function TagItem({ id, color = '#000000', name = 'no name' }){
    const { query, toggleTag } = useBoard();
    const selected = query.tag.find(item => item === id);
    
    return (
        <HStack
            onClick={() => toggleTag(id)}

            w='full'
            spacing='3'
            bgColor={ selected ? 'gray.200' : 'gray.50' }
            px='2'
            py='2'
            borderRadius='md'
            cursor='pointer'
            
            _hover={{
                bgColor: selected ? `` : `gray.100`
            }}
        >
            <Box
                w='18px' h='18px' bgColor={color} borderRadius='full'
                border='2px solid #ffffff'
            ></Box>
            <Text
                color='apple.black'
                fontSize='md'
                fontWeight='600'
            >
                {name}
            </Text>
        </HStack>
    );
}

export default TagItem;