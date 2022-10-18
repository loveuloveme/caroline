import { HStack, Avatar, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useBoard } from "../../pages/Board/context";

function UserItem({ id, name, img, isMe = false }) {

    const { query, toggleUser } = useBoard();
    const selected = useMemo(() => query.user.find(item => item === id), [query.user, id]);

    return (
        <HStack
            onClick={() => toggleUser(id)}

            w='full'
            spacing='3'
            bgColor={selected ? 'gray.100' : 'white'}
            px='2'
            py='2'
            borderRadius='md'
            cursor='pointer'
            alignItems='center'

            transition='all 0.1s ease-in-out'

            _hover={{
                bgColor: selected ? `` : `gray.100`
            }}
        >
            <Avatar size='sm' name={name} src={img} />
            <Text color='apple.black' fontSize='md' fontWeight='700'>{name}</Text>
            {
                isMe &&
                <Text
                    color='gray.400'
                    marginLeft='auto !important'
                    marginRight='5px !important'
                    fontSize='sm'
                >
                    вы
                </Text>
            }
        </HStack >
    );
}

export default UserItem;