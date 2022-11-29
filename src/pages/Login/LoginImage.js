import { Flex, Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import FramerBox, { FramerImage } from '../../components/FramerElement';

function Image({ src, ...rest }) {
    return (
        <FramerBox
            display='flex'
            justifyContent='flex-end'
            top='0'
            right='0'
            position='absolute'
            w='100%'
            h='100%'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 2
            }}

            {...rest}
        >
            <Box
                h='100%' zIndex='8'
                flex='1'
                bg='linear-gradient(90deg, transparent, rgb(0, 0,0, 0.6) 50%, black 100%)'
            ></Box>
            <FramerImage
                h='100%'
                objectFit='contain'
                src={src}
            />
        </FramerBox>
    );
}

function LoginImage({ isSignUp, ...rest }) {
    return (
        <AnimatePresence>
            {isSignUp ?
                <Image key='signUp' src={require('../../assets/photos/login_signup.jpg')} {...rest} />
                :
                <Image key='signIn' src={require('../../assets/photos/login_signin.jpg')} {...rest} />
            }
        </AnimatePresence>
    );
}

export default LoginImage;