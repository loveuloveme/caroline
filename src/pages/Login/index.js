import { Flex, Box, Stack, Link, Heading, Text, Container, Image, useBoolean, HStack } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import FramerBox, { FramerImage, FramerText } from '../../components/FramerElement';
import Logotype from '../../components/Logotype';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { motion, AnimatePresence } from "framer-motion"

import { useAnimation } from "framer-motion"
import { pageVariants, pageTransition } from '../anims';
import { useState } from 'react';
import LoginImage from './LoginImage';
import LoginBackground from './LoginBackground';


export default function Login() {
    const controls = useAnimation();

    const [isContentHover, setContentHover] = useState(false);

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
            >
                <Flex
                    direction='column'
                    zIndex='10'
                    bgColor='white'
                    backdropFilter='blur(5px)'
                    alignItems='center'
                    minW='35%'
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
                        <Logotype fontSize='3xl' />
                    </Flex>
                    <FramerBox
                        left='0%'
                        position='absolute'
                        h='100%'
                        w='100%'
                        bgColor='caroline.blue'
                        zIndex='3'

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
                    >
                    </FramerBox>
                    <Flex
                        direction='column'
                        justifyContent='center'
                        flex='1'
                        px='50px'
                        w='100%'
                    >
                        {isSignUpComponent ? <SignUp /> : <SignIn />}
                    </Flex>
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
                            onClick={changeLayout}
                        >
                            {isSignUpComponent ? 'Есть аккаунт? Войти.' : 'Нет аккаунта? Создать.'}
                        </Link>
                    </Flex>
                </Flex>

                <Flex
                    flex='1'
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='flex-start'
                    position='relative'
                    overflow='hidden'
                    bgColor='#030303'
                    p='12'

                    onMouseEnter={() => setContentHover(true)}
                    onMouseLeave={() => setContentHover(false)}
                >

                    <Box zIndex='10' alignSelf='flex-end'>
                        <Text color='white' fontSize='3xl'>'kærəlɪn</Text>
                    </Box>
                    <Box
                        color='white'
                        zIndex='10'
                    >
                        <Text fontWeight='bold' fontSize='9xl'>
                            <TypeAnimation
                                sequence={[
                                    500,
                                    'КАРОЛИНА',
                                    500,
                                    'CAROLINE',
                                    20000
                                ]}
                                deletionSpeed={2}
                                cursor={false}
                                repeat={Infinity}
                                wrapper='span'
                            />
                        </Text>

                        <FramerText fontSize='2xl'>
                            The name Caroline is of French origin and means "strong." It is the feminine version of Charles, which means "free man."
                        </FramerText>
                    </Box>

                    <LoginBackground isSignUp={isSignUp} />
                    <LoginImage isSignUp={isSignUp} />

                    {/* <Image position='absolute' bottom='0' right='0' h='100%' src={require('../../assets/photos/tears.jpg')}></Image> */}
                </Flex>
            </Container>

        </FramerBox >
    );
}