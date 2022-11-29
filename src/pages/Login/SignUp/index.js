import { Stack, Heading, VStack, Icon } from '@chakra-ui/react';
import TextInput from '../TextInput';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Button from '../../../components/Button';
import { useFormik } from 'formik';
import ValidationSchema from '../ValidationSchema';
import { registerUser } from '../../../store/user/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../store/user/slice';

export default function SignUp() {
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            fullName: '',
            password: '',
            repassword: ''
        },
        onSubmit: async values => {
            dispatch(registerUser(values))
        },
        validationSchema: ValidationSchema
    });

    return (
        <>
            <Stack
                w='100%' spacing='5'
            >
                <TextInput
                    name='email'
                    type='email'
                    placeholder='Почта'
                    icon={<Icon w='5' h='5' as={MdEmail} />}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}

                    disabled={loading}
                />
                <TextInput
                    type='text' placeholder='Имя пользователя' icon={<Icon w='5' h='5' as={FaUser} />}
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username}

                    disabled={loading}
                />
                <TextInput
                    type='password' placeholder='Пароль' icon={<Icon w='5' h='5' as={MdPassword} />}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}

                    disabled={loading}
                />
                <TextInput
                    type='password' placeholder='Повторите пароль' icon={<Icon w='5' h='5' as={MdPassword} />}
                    name='repassword'
                    onChange={formik.handleChange}
                    value={formik.values.repassword}
                    error={formik.errors.repassword}

                    disabled={loading}
                />
            </Stack>
            <Button
                variant='black'
                mt='60px'
                onClick={formik.handleSubmit}
                disabled={formik.errors.email || formik.errors.username || formik.errors.password || formik.errors.repassword || loading}
            >
                Зарегистрироваться
            </Button>
        </>
    );
};