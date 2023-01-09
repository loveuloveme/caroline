import React from 'react';
import { Flex, Icon, VStack, Link, Button } from '@chakra-ui/react';
import UserProfileInput from '../UserProfileInput';
import { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { useEffect } from 'react';
import CarolineService from '../../../services/CarolineService';

const UserProfileService = (props) => {
    const { service, fields, submitRequest, url, icon, ...rest } = props;

    const [input, setInput] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isChanged, setChanged] = useState(false);


    useEffect(() => {
        let serviceData = {};

        try {
            serviceData = JSON.parse(localStorage.getItem(service));
        } catch { }

        setInput({});

        fields.forEach(field => {
            setInput(prev => {
                return {
                    ...prev,
                    [field]: serviceData?.[field] || ''
                }
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields, service]);

    const submit = async () => {
        try {
            await CarolineService.setCredentials(service, input);
            setSuccess(true);
            localStorage.setItem(service, JSON.stringify(input));
        } catch (e) {
            setError(true);
        }
    };

    const setFormChanged = () => {
        setChanged(true);
        setError(false);
        setSuccess(false);
        setLoading(false);
    }

    return (
        <Flex
            w='100%'
            flexDirection='column'
            px='5'
            py='2'
            pb='5'
            borderRadius='5px'
            justifyContent='space-between'

            transition='all 1s ease'
            {...rest}
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
                    as={icon}
                />
                <Link color='white' href={url} isExternal>
                    Как получить ключи?
                </Link>
            </Flex>
            <VStack
                w='100%'
                spacing='5'
                mt='5'
            >
                {fields.map(field =>
                    <UserProfileInput
                        defaultValue={input[field]}
                        key={field}
                        icon={icon}
                        disabled={loading}
                        error={error}
                        placeholder={field}
                        onChange={(e) => {
                            setFormChanged();

                            setInput(prev => ({
                                ...prev,
                                [field]: e.target.value
                            }));
                        }}
                    />
                )};
            </VStack>
            {isChanged && !success &&
                <Button
                    disabled={Object.values(input).some(field => field === '')}
                    colorScheme='gray'
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
    );
};

export default UserProfileService;