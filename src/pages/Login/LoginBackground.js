import { AnimatePresence } from 'framer-motion';
import FramerBox from '../../components/FramerElement';

function Video({ src, poster, ...rest }) {
    return (
        <FramerBox
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            opacity='0.1'
            zIndex='2'
            {...rest}


            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 2
            }}
        >
            <video
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                poster={poster}
                autoPlay loop muted
            >
                <source src={src} type='video/webm' />
            </video>
        </FramerBox>
    );
}

function LoginBackground({ isSignUp, ...rest }) {
    return (
        <AnimatePresence>
            {isSignUp ?
                <Video key='signUp' src={require('../../assets/videos/signupBg.webm')} poster={require('../../assets/photos/posters/signin.jpg')} />
                :
                <Video key='signIn' src={require('../../assets/videos/signinBg.webm')} poster={require('../../assets/photos/posters/signup.jpg')} />
            }
        </AnimatePresence>
    );
}

export default LoginBackground;