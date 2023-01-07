import {
    useDisclosure,
    Flex,
    Icon,
} from '@chakra-ui/react';

import Button from '../Button';
import TextInput from '../TextInput';

import { ImTrello, ImSpinner2 } from 'react-icons/im';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { useState } from 'react';

import { AiFillFileUnknown } from 'react-icons/ai';
import { createBoard, getBoards } from '../../store/board/thunk';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayout from '../ModalOverlay';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { setDefaultAddBoard } from '../../store/board/slice';
import CarolineService from '../../services/CarolineService';

function AddBoard({ buttonVariant }) {
    const dispatch = useDispatch();
    const disclosure = useDisclosure();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [input, setInput] = useState('');
    const handleInputChange = (e) => setInput(e.target.value);

    const submitBoard = async () => {
        setLoading(true);

        try {
            const board = await CarolineService.createBoard(input);
            dispatch(getBoards());
            disclosure.onClose()

        } catch {
            setError(true);
        }

        setLoading(false);
    };

    const icon = useMemo(() => {
        const source = (input.search('trello') !== -1 && ImTrello) || AiFillFileUnknown;
        const color = source === AiFillFileUnknown ? 'gray' : 'caroline.blue';

        return <Icon
            w='5'
            h='5'
            color={color}
            as={source}
        />;
    }, [input]);


    return (
        <>
            <Button fontWeight='500' variant={buttonVariant ?? 'gray'} onClick={disclosure.onOpen}>Добавить доску</Button>
            <ModalLayout
                isOpen={disclosure.isOpen}
                onClose={loading ? null : disclosure.onClose}
                title='ADD BOARD'
            >
                <Flex
                    direction='row'
                    alignItems='flex-end'
                >
                    <TextInput
                        borderRadius='4px'
                        placeholder='URL доски'
                        icon={icon}
                        containerStyle={{ flex: 1 }}
                        error={error && 'Ошибка. Проверьте url и настройки профиля'}
                        onChange={handleInputChange}
                    />
                    <Button
                        ml='2'
                        variant='blue'
                        borderRadius='4px'
                        w='48px'
                        h='48px'
                        disabled={input === '' || loading}
                        onClick={!loading && submitBoard}
                    >
                        <Icon
                            color='white'
                            w='5'
                            h='5'
                            as={loading ? ImSpinner2 : IoCheckmarkSharp}
                        />
                    </Button>
                </Flex>
            </ModalLayout>
        </>
    )
}

export default AddBoard;