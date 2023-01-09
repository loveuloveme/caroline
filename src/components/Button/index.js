import { Text } from "@chakra-ui/react";
import FramerBox from "../FramerElement";


export const VARIANTS = {
    GRAY: 'gray',
    BLUE: 'blue',
    BLACK: 'black',
    WHITE: 'white',
    RED: 'red'
};

const styles = {};

styles[VARIANTS.WHITE] = {
    container: {
        bgColor: 'white',
        _hover: { bg: '#ebedf0' },
        _active: {
            bg: '#dddfe2'
        }
    },
    text: {
        color: 'black'
    }
};

styles[VARIANTS.RED] = {
    container: {
        bgColor: '#ed3c3c',
        _hover: { bg: '#d13b3b' },
        _active: {
            bg: '#e54343'
        }
    },
    text: {
        color: 'white'
    }
};

styles[VARIANTS.GRAY] = {
    container: {
        bgColor: '#e2e2e2',
        _hover: { bg: '#ebedf0' },
        _active: {
            bg: '#dddfe2'
        }
    },
    text: {
        color: 'black'
    }
};

styles[VARIANTS.BLUE] = {
    container: {
        bgColor: 'caroline.blue',
        _hover: { bg: 'apple.blue.light' },
        _active: {
            bg: 'apple.blue.dark'
        }
    },
    text: {
        color: 'white'
    }
};

styles[VARIANTS.BLACK] = {
    container: {
        bgColor: 'apple.black',
        _hover: { bg: 'rgb(32 32 32)' },
        _active: {
            bg: '#3f3f3f'
        }
    },
    text: {
        color: 'white'
    }
};

function Button({ children, variant = VARIANTS.GRAY, ...rest }) {
    return (
        <FramerBox
            as='button'
            // h='40px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            fontSize='14px'
            fontWeight='semibold'
            bg='apple.blue.dark'
            borderColor='#ccd0d5'
            borderRadius='md'
            border='none'

            display='flex'
            justifyContent='center'
            alignItems='center'

            px='35px'
            py='15px'

            {...styles[variant].container}
            {...rest}
            _disabled={{
                cursor: 'not-allowed',
                opacity: 0.7
            }}
        >
            <Text
                display='flex'
                color='white'
                fontSize='md'
                {...styles[variant].text}
            >
                {children}
            </Text>
        </FramerBox>
    );
}

export default Button;