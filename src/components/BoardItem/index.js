import { Box, Text, Flex } from "@chakra-ui/react";
import ChakraBox from "../FramerElement";
import Button from "../Button";

import { Icon } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import { ImTrello } from "react-icons/im";
import { useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarolineService from "../../services/CarolineService";
import { removeBoard } from "../../store/board/slice";
import { SERVICES } from "../../common/Service";

function BoardItem({ name, service, isEdit, setEdit, boardId }) {
    const dispatch = useDispatch();
    const controls = useAnimation();
    const [isDeleting, setDeleting] = useState(false);

    const navigate = useNavigate();

    const shakeAnimation = useMemo(() => {
        return [0, ...[-1, 1, -1, 1], 0];
    }, [])

    useEffect(() => {
        async function EditOnSequence() {
            controls.start({ scale: 0.97, transition: { duration: 0.1 } });
            await controls.start({ rotate: shakeAnimation, transition: { type: "spring", stiffness: 100, duration: 0.4 } });
        }

        async function EditOffSequence() {
            await controls.start({ scale: 1, transition: { duration: 0.1 } });
        }

        if (isEdit) {
            EditOnSequence();
        } else {
            EditOffSequence();
        }

    }, [isEdit]);

    const remove = () => {
        controls.start({ opacity: 0.6, transition: { duration: 1 } });
        setDeleting(true);

        setTimeout(async () => {
            try {
                await CarolineService.removeBoard(boardId);
                dispatch(removeBoard(boardId));
            } catch {
                setDeleting(false);
                controls.start({ opacity: 1, transition: { duration: 1 } });
            }
        }, 1000);
    };

    const redirect = () => {
        navigate(`/board/${service}/${boardId}`);
    };

    return (
        <ChakraBox
            whileHover={!isEdit && { scale: 1.01 }}
            whileTap={!isEdit && { scale: 0.95 }}
            display='flex'
            bgColor='white'
            px='5'
            pt='5'
            pb='5'
            h='200px'
            alignItems='flex-end'
            justifyContent='space-between'
            borderRadius='lg'
            cursor='pointer'
            overflow='hidden'
            userSelect='none'
            animate={controls}

            pointerEvents={isDeleting && 'none'}

            onClick={!isEdit && !isDeleting && redirect}
        >
            <Flex
                direction='column'
                position='relative'
                justifyContent='space-between'
                h='100%'
                w='100%'
            >
                <Flex
                    justifyContent='space-between'
                >
                    <Flex
                        w='30px'
                        h='30px'
                        bgColor={SERVICES[service].color}
                        //bgGradient='linear(to-r, apple.blue.light, apple.blue.dark)'
                        p='2px'
                        borderRadius='md'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Icon
                            color='white'
                            w='5'
                            h='5'
                            as={SERVICES[service].icon}
                        />
                    </Flex>
                    {(isEdit && !isDeleting) &&
                        <Button
                            w='30px'
                            h='30px'
                            p='0'
                            variant='red'
                            onClick={remove}
                        >
                            <Icon
                                w='5'
                                h='5'
                                as={IoClose}
                            />
                        </Button>
                    }
                    {/* <Text
                            display='block'
                            borderRadius='md'
                            bgColor='#f9f9f9'
                            p='5px 10px 5px 10px'
                            fontSize='sm'
                            color='#636363'
                        >
                            Обновлено
                        </Text> */}
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
            </Flex>
        </ChakraBox >
    );
}

export default BoardItem;