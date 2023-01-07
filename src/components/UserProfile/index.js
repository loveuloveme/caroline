import {
    useDisclosure,
    Flex,
    Text,
    VStack,
    HStack,
} from '@chakra-ui/react';

import Button from '../Button';
import { useSelector } from "react-redux";
import ModalLayout from '../ModalOverlay';
import CarolineService from '../../services/CarolineService';
import UserProfileService from './UserProfileService';

import { SiJira, SiAsana, SiTrello } from 'react-icons/si';
import { useState } from 'react';

const SERVICE = {
    TRELLO: 'TRELLO',
    JIRA: 'JIRA',
    ASANA: 'ASANA'
}

function UserProfile() {
    const { userInfo } = useSelector((state) => state.user);
    const disclosure = useDisclosure(true);

    const [service, setService] = useState(SERVICE.TRELLO);

    return (
        <>
            <Flex
                h='100%'
                alignItems='flex-end'
                justifyContent='flex-end'
                flexDirection='column'
                cursor='pointer'
                onClick={disclosure.onOpen}
                transition='all 0.2s ease'

                position='absolute'
                right='0'
                bottom='0'
                pb='50px'

                _hover={{
                    bgColor: 'rgba(255, 255, 255, 0.01)'
                }}
            >
                <Text color='#ffffff' fontSize='6xl' fontWeight='700' textTransform='uppercase'>user</Text>
                <Text
                    fontSize='8xl'
                    color='rgba(255, 255, 255, 0.1)'
                    fontWeight='600'
                    mt='-30px'
                >
                    {userInfo?.username}
                </Text>
            </Flex>
            <ModalLayout
                isOpen={disclosure.isOpen}
                onClose={disclosure.onClose}
                title='PROFILE'
            >
                <VStack
                    alignItems='flex-start'
                >
                    <HStack
                        justify='flex-start'
                    >
                        {Object.values(SERVICE)
                            .map(serv =>
                                <Text
                                    fontWeight='600'
                                    fontSize='3xl'
                                    cursor='pointer'
                                    color={service === serv ? 'black' : 'gray.300'}
                                    onClick={() => setService(serv)}
                                >
                                    {serv}
                                </Text>
                            )}
                    </HStack>
                    <VStack
                        w='100%'
                        spacing='5'
                    >
                        {service === SERVICE.TRELLO &&
                            <UserProfileService
                                service='trello'
                                fields={['apiKey', 'oAuthToken']}
                                bgColor='caroline.blue'
                                url='https://trello.com/app-key'
                                icon={SiTrello}
                            />
                        }

                        {service === SERVICE.ASANA &&
                            <UserProfileService
                                service='asana'
                                fields={['apiKey', 'oAuthToken']}
                                bgColor='#34495e'
                                url='https://app.asana.com/0/my-apps'
                                icon={SiAsana}
                            />
                        }

                        {service === SERVICE.JIRA &&
                            <UserProfileService
                                service='jira'
                                fields={['host', 'email', 'apiToken']}
                                bgColor='#0052CC'
                                url='https://id.atlassian.com/manage-profile/security/api-tokens'
                                icon={SiJira}
                            />
                        }
                    </VStack>
                </VStack>
                <Button
                    variant='black'
                    w='100%' mt='30px'
                    onClick={() => {
                        CarolineService.logout().then(() => {
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