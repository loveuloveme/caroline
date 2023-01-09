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
import { useState } from 'react';
import { SERVICE, SERVICES } from '../../common/Service';
import FramerBox from '../FramerElement';


function UserProfile() {
    const { userInfo } = useSelector((state) => state.user);
    const disclosure = useDisclosure(true);

    const [service, setService] = useState(SERVICE.TRELLO);

    return (
        <>
            <FramerBox
                display='flex'
                h='100%'
                alignItems='flex-end'
                justifyContent='flex-end'
                flexDirection='column'
                cursor='pointer'
                onClick={disclosure.onOpen}
                transition='all 0.2s ease'

                // position='absolute'
                // right='0'
                // bottom='0'
                opacity={0.5}

                whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                }}
            >
                <Text color='#ffffff' fontSize='6xl' fontWeight='700' textTransform='uppercase'>user</Text>
                <Text
                    fontSize='9xl'
                    color='rgba(255, 255, 255, 1)'
                    fontWeight='600'
                    mt='-30px'
                    lineHeight='1'
                >
                    {userInfo?.username}
                </Text>
            </FramerBox>
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
                                    {serv.toUpperCase()}
                                </Text>
                            )}
                    </HStack>
                    <VStack
                        w='100%'
                        spacing='5'
                    >
                        <UserProfileService
                            service={service}
                            fields={SERVICES[service].credential.fields}
                            bgColor={SERVICES[service].color}
                            url={SERVICES[service].credential.url}
                            icon={SERVICES[service].icon}
                        />
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