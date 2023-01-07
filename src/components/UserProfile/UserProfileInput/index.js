import {
    useDisclosure,
    Flex,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import { ImTrello, ImSpinner2 } from 'react-icons/im';
import TextInput from '../../TextInput';

function UserProfileInput({ defaultValue, disabled, error, placeholder, onChange, ...rest }) {
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
                    as={ImTrello}
                />}
                containerStyle={{ flex: 1 }}
                titleStyle={{ color: 'white' }}
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