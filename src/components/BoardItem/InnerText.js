import { Text } from "@chakra-ui/react";

function InnerText({ active, ...rest }) {
    return (
        <Text
            fontSize='2xl'
            fontWeight='black'
            color={active ? 'apple.blue.light' : '#e3e3e3'}
            transition='all 0.4s ease, top 0.4s ease'
            {...rest}
        >
            TRELLO
        </Text>
    );
}

export default InnerText;