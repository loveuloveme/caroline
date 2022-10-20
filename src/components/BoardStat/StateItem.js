import { Box, HStack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useBoard } from "../../pages/Board/context";

function StateItem({ id, name }) {
    const { query, toggleState } = useBoard();

    const selected = useMemo(() => query.state.find(item => item === id), [query.state, id]);

    return (
        <HStack
            w='full'
            spacing='3'
            bgColor={selected ? 'gray.200' : 'white'}
            px='3'
            py='2'
            borderRadius='md'
            cursor='pointer'
            transition='all 0.1s ease-in-out'
            _hover={{
                bgColor: selected ? `` : 'gray.100'
            }}

            onClick={() => toggleState(id)}
        >
            <Box
                w='14px' h='14px'
                borderRadius='full'
                bgColor='apple.black'
            ></Box>
            <Text
                fontSize='md'
                fontWeight='700'
                color='apple.black'
            >
                {name}
            </Text>
        </HStack>
    );
}

export default StateItem;