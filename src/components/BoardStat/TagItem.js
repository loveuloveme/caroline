import { Box, HStack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useBoard } from "../../pages/Board/context";

function TagItem({ id, color = '#000000', name = 'Tag' }) {
    const { query, toggleTag } = useBoard();

    const selected = useMemo(() => query.tag.find(item => item === id), [query.tag, id]);

    return (
        <HStack
            onClick={() => toggleTag(id)}
            w='full'
            spacing='3'
            bgColor={selected ? color : 'white'}
            px='2'
            py='2'
            borderRadius='md'
            cursor='pointer'

            transition='all 0.1s ease-in-out'

            _hover={{
                bgColor: selected ? `` : `gray.100`
            }}
        >
            <Box
                w='18px' h='18px' bgColor={color} borderRadius='full'
                border='2px solid #ffffff'
            ></Box>
            <Text
                color={selected ? 'white' : 'apple.black'}
                fontSize='md'
                fontWeight='700'
            >
                {name}
            </Text>
        </HStack>
    );
}

export default TagItem;