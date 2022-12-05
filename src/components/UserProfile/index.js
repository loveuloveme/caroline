import {
    useDisclosure,
    Flex,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import Button from '../Button';
import TextInput from '../TextInput';
import { useDispatch, useSelector } from "react-redux";
import { ImTrello, ImSpinner2 } from 'react-icons/im';
import ModalLayout from '../ModalOverlay';
import { useState } from 'react';
import { setTrelloCredentials } from '../../store/user/thunk';
import { useEffect } from 'react';
import { setDefaultCredentialsState } from '../../store/user/slice';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import CarolineService, { logout } from '../../services/CarolineService';

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

function UserProfile() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
    const disclosure = useDisclosure(true);

    const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
    const [oAuthToken, setOAuthToken] = useState(localStorage.getItem('oAuthToken') || '');
    const [isChanged, setChanged] = useState(false);

    const submit = async () => {
        try {
            await CarolineService.setTrelloCredentials(apiKey, oAuthToken);
            setSuccess(true);
            localStorage.setItem('apiKey', apiKey);
            localStorage.setItem('oAuthToken', oAuthToken);
        } catch {
            setError(true);
        }
    };

    const onChange = handler => {
        return (e) => {
            handler(e.target.value);
            setChanged(true);
            setError(false);
            setSuccess(false);
            setLoading(false);
        }
    }

    return (
        <>
            <Flex
                h='100%'
                alignItems='flex-end'
                justifyContent='center'
                flexDirection='column'
                px='5'
                cursor='pointer'
                onClick={disclosure.onOpen}
                transition='all 0.2s ease'
                _hover={{
                    bgColor: 'rgba(255, 255, 255, 0.1)'
                }}
            >
                <Text color='#818181' fontSize='xs'>профиль</Text>
                <Text
                    fontSize='xl'
                    color='white'
                >
                    {userInfo?.username}
                </Text>
            </Flex>
            <ModalLayout
                isOpen={disclosure.isOpen}
                onClose={loading ? null : disclosure.onClose}
                title='PROFILE'
            >
                <Flex
                    flexDirection='column'
                    px='5'
                    py='2'
                    pb='5'
                    bgColor='caroline.blue' borderRadius='10px'
                    justifyContent='space-between'
                >
                    <Flex
                        mt='3'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Icon
                            color='white'
                            w='10'
                            h='10'
                            as={ImTrello}
                        />
                        <Link color='white' href='https://trello.com/app-key' isExternal>
                            Как получить ключи?
                        </Link>
                    </Flex>
                    <VStack
                        w='100%'
                        spacing='7'
                        mt='5'
                    >
                        <UserProfileInput defaultValue={apiKey} disabled={loading} error={error} placeholder='apiKey' onChange={onChange(setApiKey)} />
                        <UserProfileInput defaultValue={oAuthToken} disabled={loading} error={error} placeholder='oAuthToken' onChange={onChange(setOAuthToken)} />
                    </VStack>
                    {isChanged && !success &&
                        <Button
                            disabled={apiKey === '' || oAuthToken === ''}
                            variant='white'
                            mt='30px'
                            onClick={submit}>
                            {loading ?
                                <Icon
                                    color='caroline.blue'
                                    w='5'
                                    h='5'
                                    as={ImSpinner2}
                                />
                                :
                                'Сохранить'
                            }

                        </Button>
                    }
                </Flex>
                <Button
                    variant='black'
                    w='100%' mt='30px'
                    onClick={() => {
                        logout().then(() => {
                            window.location.assign(document.location.origin);
                        })
                    }}
                >
                    Выйти из профиля
                </Button>
            </ModalLayout>
        </>
    )
}

export default UserProfile;