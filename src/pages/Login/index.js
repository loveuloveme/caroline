import { Flex, Box, Stack, Link, Heading, Text, Container, Image, useBoolean } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import FramerBox, { FramerImage } from '../../components/FramerElement';
import Logotype from '../../components/Logotype';
// import photo from './photo.jpg';
// import photo2 from './photo2.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { useAnimation } from "framer-motion"
import { pageVariants, pageTransition } from '../anims';


export default function Login() {
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

    return (
        <FramerBox
            style={{
                flexDirection: 'column'
            }}
            display='flex'
            minH='100vh'

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
                flexDirection='row-reverse'
                justifyContent='flex-end'
                alignItems='stretch'
                px='0'
            >
                <Flex
                    flex='1'
                    alignItems='flex-end'
                    position='relative'
                    overflow='hidden'
                    bgColor='#030303'
                    p='10'
                >
                    <Box
                        color='white'
                        zIndex='10'
                    >
                        <Text fontWeight='bold' fontSize='9xl'>
                            <TypeAnimation
                                sequence={[
                                    500,
                                    'Caroline',
                                    16000,
                                    'Disorder',
                                    50000
                                ]}
                                repeat={Infinity}
                                wrapper="span"
                                cursor={false}
                            />
                        </Text>
                        <Text fontSize='2xl'>
                            <TypeAnimation
                                sequence={[
                                    5000,
                                    'The name Caroline is of French origin and means "strong." It is the feminine version of Charles, which means "free man."',
                                    5000,
                                    'dɪsɔːʳdəʳ',
                                    2000,
                                    'dɪsɔːʳdəʳ, a disorder is a problem or illness which affects someone\'s mind or body.',
                                    5000,
                                    'is a state of being untidy, badly prepared, or badly organized.',
                                    5000,
                                    'is violence or rioting in public.'
                                ]}
                                repeat={Infinity}
                                wrapper="span"
                                cursor={true}
                            />
                        </Text>
                    </Box>
                    <Box
                        position='absolute'
                        w='75%'
                        h='75%'
                        top='12.5%'
                        left='12.5%'
                        zIndex='0'
                    >
                        <FramerImage
                            animate={{
                                x: [-50, 0],
                                opacity: [0, 1]
                            }}
                            position='absolute'
                            w='60%'
                            h='90%'
                            objectFit='contain'
                            src={require('../../assets/photos/crying.jpg')}
                        />
                        <FramerImage
                            animate={{
                                opacity: [0, 1]
                            }}
                            transition={{
                                delay: 1
                            }}
                            bottom='0'
                            right='0'
                            position='absolute'
                            w='50%'
                            h='80%'
                            objectFit='contain'
                            src={require('../../assets/photos/crying_2.jpg')}
                        />
                    </Box>
                </Flex>
                <Flex
                    direction='column'
                    justifyContent='center'
                    zIndex='10'
                    bgColor='white'
                    backdropFilter='blur(5px)'
                    alignItems='center'
                    minW='35%'
                    position='relative'
                    overflow='hidden'
                    h='100vh'
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
            </Container>

        </FramerBox >
    );
}