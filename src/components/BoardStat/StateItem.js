import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";

function StateItem({ name }){
    return (
        <HStack
            w='full'
            spacing='3'
            bgColor='gray.100'
            px='3'
            py='2'
            borderRadius='md'
            cursor='pointer'

            _hover={{
                bgColor: `gray.200`
            }}
        >
            <Box w='14px' h='14px' borderRadius='full' bgColor='blackAlpha.400'></Box>
            <Text fontSize='md' fontWeight='600'>{name}</Text>
        </HStack>
    );
}

export default StateItem;