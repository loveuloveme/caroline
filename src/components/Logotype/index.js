import { Heading, Flex } from "@chakra-ui/react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Icon } from '@chakra-ui/react';
import { GiShirtButton } from 'react-icons/gi';

function Logotype({ size = '3xl', color = '#285dec', text = 'CAROLINE' }) {
    return (
        <Link to="/">
            <Flex
                //bgGradient='linear(to-r, #ff4e50, #f9d423)'
                //bgColor='black'
                py='1'
                justifyContent='center'
                alignItems='center'
                borderRadius='0px'
            >

                <Heading
                    fontWeight='700'
                    letterSpacing='widest'
                    fontSize={size}
                    zIndex='10'
                    color={color}
                    mt='-3px'
                // ml='2'
                // bgGradient='linear(to-r, #de6161, #2657eb)'
                // bgClip='text'
                >
                    {text}
                </Heading>
            </Flex>
        </Link>
    );
}

export default Logotype;