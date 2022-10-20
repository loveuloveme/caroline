import { Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Logotype({ color = '#285dec', ...rest }) {
    return (
        <Link to="/">
            <Flex
                py='1'
                justifyContent='center'
                alignItems='center'
                borderRadius='0px'
            >

                <Text
                    fontWeight='bold'
                    zIndex='10'
                    color={color}

                    {...rest}
                >
                    CAROLINE
                </Text>
            </Flex>
        </Link>
    );
}

export default Logotype;