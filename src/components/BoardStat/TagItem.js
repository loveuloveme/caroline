import { Box, Heading, Flex, VStack, HStack, Avatar, Text } from "@chakra-ui/react";
import { hex } from 'color-convert';
import { useEffect, useState } from "react";

function TagItem({ color = '#000000', name = 'no name' }){
    const [useLight, setUseLight] = useState(true);
    const [colorRgb, setColorRgb] = useState([0, 0, 0]);

    useEffect(() => {
        const [red, green, blue] = hex.rgb(color);

        setColorRgb([red, green, blue]);
        setUseLight(true);
    }, [color])
    
    return (
        <HStack
            w='full'
            spacing='3'
            bgColor={`rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, 1)`}
            px='3'
            py='2'
            borderRadius='md'
            cursor='pointer'

            _hover={{
                bgColor: `rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, 0.9)`
            }}
        >
            <Box
                w='18px' h='18px' bgColor={color} borderRadius='full'
                border='2px solid #ffffff'
            ></Box>
            <Text
                color={useLight ? '#ffffff' : '#000000'}
                fontSize='md'
                fontWeight='600'
            >
                {name}
            </Text>
        </HStack>
    );
}

export default TagItem;