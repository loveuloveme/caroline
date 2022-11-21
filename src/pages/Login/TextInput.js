import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Flex
} from '@chakra-ui/react';

function TextInput({ error, icon, placeholder, ...rest }) {
    return (
        <Box>
            <Flex justifyContent='space-between' mb='2'>
                <Text fontWeight='bold' color='#313131'>{placeholder}</Text>
                <Text
                    color='red'
                    opacity={error === 'Required' || !error ? 0 : 1}
                >
                    {error || 'a'}
                </Text>
            </Flex>
            <InputGroup size='lg'>
                <InputLeftElement
                    pointerEvents='none'
                    children={icon}
                />
                <Input variant='filled' placeholder={placeholder} {...rest} _placeholder={{ opacity: 0.2, color: 'inherit', fontWeight: 'bold', fontSize: 'sm' }} />
            </InputGroup>
        </Box>
    );
}

export default TextInput;