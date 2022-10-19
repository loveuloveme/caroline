import { Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Logotype({ size = 'xl', color = '#285dec', text = 'CAROLINE' }) {
    return (
        <Link to="/">
            <Flex
                py='1'
                justifyContent='center'
                alignItems='center'
                borderRadius='0px'
            >

                <Text
                    fontSize={size}
                    fontWeight='bold'
                    zIndex='10'
                    color={color}
                >
                    {text}
                </Text>
            </Flex>
        </Link>
    );
}

export default Logotype;