import { Flex, Box, Stack, Link, Heading, Text, Container, Image, useBoolean, VStack } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import FramerBox, { FramerImage, FramerText } from '../../components/FramerElement';
import Logotype from '../../components/Logotype';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { motion, AnimatePresence } from "framer-motion"

import { useAnimation } from "framer-motion"
import { pageVariants, pageTransition } from '../anims';
import { useEffect, useState } from 'react';
import LoginImage from './LoginImage';
import LoginBackground from './LoginBackground';
import { useSelector } from 'react-redux';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { loading, success, error } = useSelector((state) => state.user);

    const navigate = useNavigate();

    const controls = useAnimation();
    const [isSignUp, setSignUp] = useBoolean(true);
    const [isSignUpComponent, setSignUpComponent] = useBoolean(true);

    const changeLayout = () => {
        setSignUp.toggle();

        (async () => {
            await controls.start('hidden');
            setSignUpComponent.toggle();

            if (isSignUp) {
                await controls.start('visibleRight');
            } else {
                await controls.start('visibleLeft');
            }

        })();
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        }
    }, [success])

    return (
        <FramerBox
            style={{
                flexDirection: 'column'
            }}
            h='100%'
            display='flex'

            initial='initial'
            animate='in'
            exit='out'

            variants={pageVariants}
            transition={pageTransition}
        >
            <Container
                flex='1'
                h='100%'
                maxW='100%'

                display='flex'
                flexDirection='row'
                justifyContent='flex-end'
                alignItems='stretch'
                px='0'
                position='relative'
            >

                <Flex
                    minW='450px'
                    w='35%'
                    position='relative'
                    overflow='hidden'
                >
                    <FramerBox
                        zIndex='11'
                        top='0'
                        left='0'
                        position='absolute'
                        h='100%'
                        w='100%'
                        bgColor='caroline.blue'
                        variants={{
                            hidden: {
                                left: '0%',
                                transition: {
                                    duration: 0.5,
                                }
                            },
                            visibleRight: {
                                left: '100%',
                                transition: {
                                    duration: 0.5,
                                }
                            },
                            visibleLeft: {
                                left: '-100%',
                                transition: {
                                    duration: 0.5,
                                }
                            }
                        }}
                        initial='visibleLeft'
                        animate={controls}
                    />
                    <Flex
                        direction='column'
                        zIndex='10'
                        bgColor='white'
                        backdropFilter='blur(5px)'
                        alignItems='center'
                        w='100%'
                        position='relative'
                        overflow='hidden'
                        h='100%'
                        overflowY='auto'
                    >
                        <Flex
                            p='50px 50px'
                            w='100%'
                            display='flex'
                            pt='8'
                        >
                            <Logotype fontWeight='600' fontSize='3xl' to='/' />
                        </Flex>
                        <FramerBox
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            flex='1'
                            px='50px'
                            w='100%'
                        >
                            <Box
                                mb='40px'
                                position='relative'
                            >
                                <Heading
                                    fontSize='7xl'
                                    color='black'
                                    ml='-5px'
                                    textTransform='uppercase'
                                >
                                    {isSignUpComponent ? 'Register' : 'Login'}
                                </Heading>

                            </Box>
                            {error !== null &&
                                <Alert status='error' mb='30px'>
                                    <AlertIcon />
                                    Проверьте данные.
                                </Alert>
                            }
                            {isSignUpComponent ? <SignUp /> : <SignIn />}
                        </FramerBox>
                        <Flex
                            w='100%'
                            py='50px'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Link
                                color='caroline.blue'
                                fontWeight='600'
                                fontSize='lg'
                                pointerEvents={!loading}
                                transition='opacity 0.5s ease'
                                opacity={loading ? 0 : 1}
                                onClick={loading ? null : changeLayout}
                            >
                                {isSignUpComponent ? 'Есть аккаунт? Войти.' : 'Нет аккаунта? Создать.'}
                            </Link>
                        </Flex>

                        <Box
                            flex='0 0 10px'
                            w='100%'
                            position='relative'
                            bgColor='transparent'
                        >
                            <FramerBox
                                position='absolute'

                                variants={{
                                    enter: {
                                        width: '100%',
                                        opacity: 0,
                                        transition: {
                                            opacity: {
                                                delay: 2
                                            },
                                            duration: 1,
                                        }
                                    },
                                    animate: {
                                        width: ['0%', '50%'],
                                        opacity: 1,
                                        transition: {
                                            duration: 5,
                                            opacity: {
                                                duration: 0
                                            }
                                        }
                                    }
                                }}

                                animate={loading ? 'animate' : 'enter'}
                                transition={{
                                    duration: 5,
                                }}
                                w='50%'
                                h='100%'
                                bgColor='caroline.blue'
                            />
                        </Box>
                    </Flex>
                </Flex>

                <Flex
                    flex='1'
                    flexDirection='row'
                    position='relative'
                    overflow='hidden'
                    bgColor='#000000'
                    p='12'

                    alignItems='center'
                >
                    <FramerText
                        animate={{
                            y: [50, 0],
                            lineHeight: [1.2, 1.1],
                            opacity: success ? 0 : [0, 1],
                            transition: {
                                duration: 0.5
                            }
                        }}
                        fontSize='6xl' lineHeight='1.1' zIndex='10' color='white' flex='0 0 70%'>
                        Web-сервис графового отображение задач для систем управления проектами
                    </FramerText>
                    <Text ml='auto' alignSelf='flex-start' zIndex='10' color='white' fontSize='3xl'>'kærəlɪn</Text>

                    <Flex
                        position='absolute'
                        top='0' left='0' w='100%' h='100%'
                    >
                        <LoginBackground hide={success} isSignUp={isSignUp} flex='1' />
                        <LoginImage hide={success} isSignUp={isSignUp} zIndex='8' />
                    </Flex>
                </Flex>
            </Container>

        </FramerBox >
    );
}