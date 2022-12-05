import { Box } from '@chakra-ui/react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import FramerBox from '../../components/FramerElement';

function Video({ hide, fadeIn, children, poster, ...rest }) {
    const controls = useAnimation();

    useEffect(() => {
        async function sequence() {
            await controls.start({ opacity: 0, transition: { delay: 0, duration: 1 } });
            await controls.start({ opacity: 0.3, transition: { delay: 0.5, duration: 1 } });
        }

        sequence();
    }, [fadeIn]);

    return (
        <FramerBox
            h='100%'
            opacity='0'
            zIndex='2'
            position='relative'
            {...rest}

            animate={controls}
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
                preload="none"
            >
                {children}
            </video>
        </FramerBox>
    );
}

function LoginBackground({ hide, isSignUp, ...rest }) {
    return (
        <Video hide={hide} fadeIn={isSignUp} poster={require('../../assets/photos/posters/signin.jpg')}>
            <source src={require('../../assets/videos/background.webm')} type='video/webm' />

        </Video>
    );
}

export default LoginBackground;