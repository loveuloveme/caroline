import { Text, Flex } from "@chakra-ui/react";

function AddBoard() {
    return (
        <Flex
            borderRadius='lg'
            cursor='pointer'

            justifyContent='center'
            alignItems='center'
            bgColor='black'

            onClick={() => window.open('https://www.youtube.com/shorts/Cze8K-h9MA4')}
        >
            <Text
                fontWeight='500'
                fontSize='xl'
                color='white'
            >
                Добавить доску
            </Text>
        </Flex>
    );
}

export default AddBoard;