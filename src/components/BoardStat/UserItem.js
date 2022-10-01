import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { useBoard } from "../../pages/BoardContext";

function UserItem({ id, name, img, isMe = false }){

    const { query, toggleUser } = useBoard();
    const selected = query.user.find(item => item === id);

    return (
        <HStack
            onClick={() => toggleUser(id)}

            w='full'
            spacing='3'
            bgColor={ selected ? 'gray.200' : 'gray.50' }
            px='2'
            py='2'
            borderRadius='md'
            cursor='pointer'
            alignItems='center'

            _hover={{
                bgColor: selected ? `` : `gray.100`
            }}
        >
            <Avatar size='sm' name={name} src={img} />
            <Text color='apple.black' fontSize='md' fontWeight='600'>{name}</Text>
            {isMe && <Text color='gray.400' marginLeft='auto !important' marginRight='5px !important' fontSize='md'>вы</Text>}
        </HStack>
    );
}

export default UserItem;