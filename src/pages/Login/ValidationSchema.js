import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Коротко')
        .max(50, 'Чересчур')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Коротко')
        .max(50, 'Чересчур')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Слишком просто"
        )
        .required('Required'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email('Это не почта').required('Required'),
});

export default ValidationSchema;