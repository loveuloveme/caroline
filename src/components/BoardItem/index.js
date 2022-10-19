import { Box, Text, Flex, Image, useBoolean } from "@chakra-ui/react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import InnerText from "./InnerText";

import trelloImg from './assets/trello.png';
import jiraImg from './assets/jira.png';
import ChakraBox from "../ChakraBox";

function BoardItem({ name, type }) {
    const [hover, setHover] = useBoolean(false);

    return (
        <Link to='/board'>
            <ChakraBox
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                display='flex'
                bgColor='white'
                px='5'
                pt='5'
                pb='5'

                // h='100%'
                h='200px'

                alignItems='flex-end'
                justifyContent='space-between'
                borderRadius='lg'
                cursor='pointer'
                overflow='hidden'

                // shadow='sm'

                // transition='all 0.2s'
                // outline='2px solid'
                // outlineColor={hover ? '#e2e2e2' : 'white'}

                userSelect='none'

            // onMouseEnter={setHover.on}
            // onMouseLeave={setHover.off}
            >
                <Flex
                    direction='column'
                    // alignItems='center'
                    position='relative'
                    justifyContent='space-between'
                    h='100%'
                    w='100%'
                >
                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Image
                            bgColor='apple.blue.light'
                            bgGradient='linear(to-r, apple.blue.light, apple.blue.dark)'
                            w='30px'
                            p='5px'
                            borderRadius='md'
                            src={type === 'jira' ? jiraImg : trelloImg}
                        />
                        <Text
                            display='block'
                            borderRadius='md'
                            bgColor='#f9f9f9'
                            p='5px 10px 5px 10px'
                            fontSize='sm'
                            color='#636363'
                        >
                            Обновлено
                        </Text>
                    </Flex>
                    <Box>
                        <Text
                            fontWeight='600'
                            color='#929292'
                            mb='4px'
                        >
                            Доска
                        </Text>
                        <Text
                            fontWeight='bold'
                            noOfLines='2'
                            lineHeight='10'
                            fontSize='3xl'
                            letterSpacing='tighter'
                        >
                            {name}
                        </Text>
                    </Box>
                    {/* <InnerText mt='3' active={hover} /> */}
                </Flex>
            </ChakraBox>
        </Link>
    );
}

export default BoardItem;