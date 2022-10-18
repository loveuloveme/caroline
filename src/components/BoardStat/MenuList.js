import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { IoCloseSharp } from 'react-icons/io5';

function MenuList({ name, children, spacing = '1', active, clear }) {
    return (
        <Box
            w='full'
            bgColor='white'
            px='5'
            py='5'
            borderRadius='xl'
        // shadow='sm'
        >
            <Flex
                mb='3'
                alignItems='center'
                justifyContent='space-between'
                color='apple.black'
            >
                <Heading
                    letterSpacing='normal'
                    fontWeight='bold'
                    fontSize='2xl'
                    mb='2'
                >
                    {name}
                </Heading>
                <Icon
                    w='5'
                    h='5'
                    onClick={() => clear()}
                    transition='all 0.2s ease-in-out'
                    cursor={active && 'pointer'}
                    color={active ? '#2a65f5' : 'gray.200'}
                    as={IoCloseSharp}
                />
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