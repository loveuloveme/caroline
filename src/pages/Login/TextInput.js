import {
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';

function TextInput({ icon, ...rest }) {
    return (
        <Box>
            <FormLabel fontWeight='bold' color='#313131'>{rest.placeholder}</FormLabel>
            <InputGroup size='lg'>
                <InputLeftElement
                    pointerEvents='none'
                    children={icon}
                />
                <Input variant='filled' {...rest} _placeholder={{ opacity: 0.2, color: 'inherit', fontWeight: 'bold', fontFamily: 'monospace' }} />
            </InputGroup>
        </Box>
    );
}

export default TextInput;