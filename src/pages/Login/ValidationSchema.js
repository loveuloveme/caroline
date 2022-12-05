import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Коротко')
        .max(50, 'Чересчур')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(2, 'Коротко')
        .max(50, 'Чересчур')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            "Слишком просто"
        )
        .required('Обязательное поле'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
    email: Yup.string().email('Это не почта').required('Обязательное поле'),
});

export default ValidationSchema;