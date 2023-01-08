import { Box, Text, Image, Flex, Heading, VStack, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import AddBoard from "../AddBoard";

import { Icon } from '@chakra-ui/react';
import { ImSpinner8 } from "react-icons/im";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

function NothingItem({ error, loading, ...rest }) {
    return (
        <Flex {...rest} bgColor='white' overflow='hidden' justify='center' alignItems='center' h='600px' borderRadius='sm'>
            {loading ?
                <Icon
                    animation={`${spin} infinite 1s linear`}
                    color='caroline.blue'
                    w='60px'
                    h='60px'
                    as={ImSpinner8}
                />
                :
                <VStack
                    flex='0 0 50%'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    spacing='5'
                >
                    <Box>
                        <Heading fontSize='6xl' color='apple.black'>Досок нет</Heading>
                        <Text mt='2' textAlign='center'>Добавьте вашу первую доску</Text>
                    </Box >
                    <AddBoard buttonVariant='gray' />
                </VStack >

            }
        </Flex >
    );
}

export default NothingItem;