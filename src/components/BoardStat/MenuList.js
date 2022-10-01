import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';

function MenuList({name, children, spacing = '1', icon }){
    return (
        <Box w='full'>
            <HStack mb='3' alignItems='center' color='apple.black'>
                <Heading fontWeight='bold' fontSize='md'>{name}</Heading>
            </HStack>
            <VStack
                alignItems='flex-start'
                spacing={spacing}
            >
                {children}
            </VStack>
        </Box>
    );
}

export default MenuList;