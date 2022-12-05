import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Flex
} from '@chakra-ui/react';

function TextInput({ error, icon, placeholder, containerStyle, titleStyle, errorStyle, onChange, hideError = false, ...rest }) {
    return (
        <Box
            {...containerStyle}
        >
            <Flex justifyContent='space-between' mb='2' hidden={hideError}>
                <Text fontWeight='bold' color='#313131' {...titleStyle}>{placeholder}</Text>
                <Text
                    color='red'
                    opacity={error === 'Required' || !error ? 0 : 1}
                    {...errorStyle}
                >
                    {error || 'a'}
                </Text>
            </Flex>
            <InputGroup size='lg'>
                <InputLeftElement
                    pointerEvents='none'
                    children={icon}
                />
                <Input
                    onChange={onChange}
                    variant='filled'
                    placeholder={placeholder}
                    _placeholder={{ opacity: 0.2, color: 'inherit', fontWeight: 'bold', fontSize: 'sm' }}
                    _focus={{ bgColor: 'white' }}
                    style={{
                        border: error && '2px solid #e95050'
                    }}
                    {...rest}
                />
            </InputGroup>
        </Box>
    );
}

export default TextInput;