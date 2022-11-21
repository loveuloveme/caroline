import { Stack, Heading, VStack, Icon } from '@chakra-ui/react';
import TextInput from '../TextInput';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Button from '../../../components/Button';
import { useFormik } from 'formik';
import CarolineService from '../../../services/CarolineService';
import ValidationSchema from '../ValidationSchema';
import { registerUser } from '../../../store/user/thunk';
import { useDispatch, useSelector } from 'react-redux';

export default function SignUp() {
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
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
            <VStack
                mb='40px'
                spacing='1'
                alignItems='flex-start'
            >
                <Heading
                    fontSize='7xl'
                    color='black'
                    ml='-5px'
                    textTransform='uppercase'
                >
                    Register
                </Heading>
                {/* <Text color='#9d9d9d'>Стандратная схема</Text> */}
            </VStack>

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
                />
                <TextInput
                    type='text' placeholder='Имя пользователя' icon={<Icon w='5' h='5' as={FaUser} />}
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username}
                />
                <TextInput
                    type='password' placeholder='Пароль' icon={<Icon w='5' h='5' as={MdPassword} />}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />
                <TextInput
                    type='password' placeholder='Повторите пароль' icon={<Icon w='5' h='5' as={MdPassword} />}
                    name='repassword'
                    onChange={formik.handleChange}
                    value={formik.values.repassword}
                    error={formik.errors.repassword}
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