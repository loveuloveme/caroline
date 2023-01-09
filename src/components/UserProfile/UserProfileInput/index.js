import {
    Flex,
    Icon,
} from '@chakra-ui/react';
import TextInput from '../../TextInput';

function UserProfileInput({ defaultValue, disabled, error, placeholder, onChange, icon, ...rest }) {
    return (
        <Flex
            direction='row'
            alignItems='flex-end'
            w='100%'
            {...rest}
        >
            <TextInput
                borderRadius='4px'
                placeholder={placeholder}
                icon={<Icon
                    color='caroline.blue'
                    w='5'
                    h='5'
                    as={icon}
                />}
                containerStyle={{ flex: 1 }}
                titleStyle={{ color: 'white', textTransform: 'capitalize' }}
                errorStyle={{ color: 'white' }}
                error={error && 'Ошибка. Что-то пошло не так'}
                disabled={disabled}
                onChange={onChange}
                defaultValue={defaultValue}
            />
        </Flex>
    );
}

export default UserProfileInput;