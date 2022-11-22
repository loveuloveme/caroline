import { AnimatePresence } from 'framer-motion';
import { FramerImage } from '../../components/FramerElement';

function Image({ ...rest }) {
    return (
        <FramerImage
            position='absolute'
            top='0'
            right='0'
            h='100%'
            objectFit='contain'


            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 2
            }}

            {...rest}
        />
    );
}

function LoginImage({ isSignUp }) {
    return (
        <AnimatePresence>
            {isSignUp ?
                <Image key='signUp' src={require('../../assets/photos/loginsignup.jpg')} />
                :
                <Image key='signIn' src={require('../../assets/photos/loginsignin.jpg')} />
            }
        </AnimatePresence>
    );
}

export default LoginImage;