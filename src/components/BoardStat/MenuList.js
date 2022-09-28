import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";

function MenuList({name, children}){
    return (
        <Box w='full'>
            <Heading fontWeight='bold' color='apple.black' fontSize='xl' mb='3'>{name}</Heading>
            <VStack
                alignItems='flex-start'
                spacing='2'
            >
                {children}
            </VStack>
        </Box>
    );
}

export default MenuList;