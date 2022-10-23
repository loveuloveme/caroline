import { Box, Text } from "@chakra-ui/react";


export const VARIANTS = {
    GRAY: 'gray',
    BLUE: 'blue',
    BLACK: 'black'
};

const styles = {};

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
        bgColor: 'apple.blue.dark',
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
        <Box
            as='button'
            // h='40px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            fontSize='14px'
            fontWeight='semibold'
            bg='apple.blue.dark'
            borderColor='#ccd0d5'
            borderRadius='lg'
            border='none'

            display='flex'
            justifyContent='center'
            alignItems='center'

            px='15px'
            py='15px'

            {...styles[variant].container}
            {...rest}
        // _focus={{
        //     boxShadow:
        //         '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        // }}
        >
            {/* <Flex
                mr='3'
            >
                {icon}
            </Flex> */}
            <Text
                display='flex'
                color='white'
                fontSize='md'
                {...styles[variant].text}
            >
                {children}
            </Text>
        </Box>
    );
}

export default Button;