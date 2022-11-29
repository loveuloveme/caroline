import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import FramerBox from '../../components/FramerElement';

function Video({ children, poster, ...rest }) {
    return (
        <FramerBox
            h='100%'
            opacity='0'
            zIndex='2'
            position='relative'
            {...rest}

            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3, transition: { delay: 1, duration: 2 } }}
            exit={{ opacity: 0 }}
        // transition={{
        //     duration: 2
        // }}

        >
            <video
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                poster={poster}
                autoPlay={true}
                loop={true}
                controls={false}
                playsInline
                muted
            >
                {children}
            </video>
        </FramerBox>
    );
}

function LoginBackground({ isSignUp, ...rest }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {!isSignUp ?
                <Video key='signUp' poster={require('../../assets/photos/posters/signin.jpg')}>
                    <source src={require('../../assets/videos/signinBg.webm')} type='video/webm' />
                    <source src={require('../../assets/videos/signinBg.mp4')} type='video/mp4' />
                </Video>
                :
                <Video key='signIn' src={require('../../assets/videos/signinBg.webm')} poster={require('../../assets/photos/posters/signup.jpg')}>
                    <source src={require('../../assets/videos/signinBg.webm')} type='video/webm' />
                    <source src={require('../../assets/videos/signinBg.mp4')} type='video/mp4' />
                </Video>
            }
        </AnimatePresence>
    );
}

export default LoginBackground;