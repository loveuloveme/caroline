import { Flex, Box, Stack, Link, Heading, Text, Container, VStack, Icon, Image, useBoolean } from '@chakra-ui/react';
import TextInput from '../TextInput';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Button from '../../../components/Button';
import FramerBox from '../../../components/FramerElement';
import ValidationSchema from '../ValidationSchema';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/user/thunk';

export default function SignIn() {
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '123123123'
        },
        onSubmit: async values => {
            dispatch(loginUser(values))
        },
        validationSchema: ValidationSchema
    });

    return (
        <>
            <Stack
                w='100%' spacing='5'
            >
                <TextInput
                    name='email' type='email' placeholder='Почта' icon={<Icon w='5' h='5' as={MdEmail} />}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                    disabled={loading}
                />
                <TextInput
                    name='password' type='password' placeholder='Пароль' icon={<Icon w='5' h='5' as={MdPassword} />}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />
            </Stack>
            <Button
                variant='blue'
                mt='60px'
                type='button'
                onClick={formik.handleSubmit}
                disabled={(formik.errors.email || formik.errors.password) || loading}
            >
                Войти
            </Button>
        </>
    );
};