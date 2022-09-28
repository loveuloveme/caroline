import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";

function UserItem({ name, img }){
    return (
        <HStack
            w='full'
            spacing='3'
            bgColor='gray.100'
            px='2'
            py='2'
            borderRadius='md'
            cursor='pointer'

            _hover={{
                bgColor: `gray.200`
            }}
        >
            <Avatar size='xs' name={name} src={img} />
            <Text color='apple.black' fontSize='md' fontWeight='600'>{name}</Text>
        </HStack>
    );
}

export default UserItem;