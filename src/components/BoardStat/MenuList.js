import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';

function MenuList({name, children, spacing = '1', active, clear }){
    return (
        <Box w='full'>
            <Flex
                mb='3'
                alignItems='center'
                justifyContent='space-between'
                color='apple.black'
            >
                <Heading fontWeight='bold' fontSize='md'>{name}</Heading>
                <Text
                    cursor={ active && 'pointer' }
                    color={ active ? '#2a65f5' : 'gray.200' }
                    fontWeight='bold'
                    fontSize='sm'
                    transition='all 0.2s ease-in-out'

                    onClick={() => clear()}
                >
                    сбросить
                </Text>
            </Flex>
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