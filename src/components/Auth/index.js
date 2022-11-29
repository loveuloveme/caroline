import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMe } from '../../store/user/thunk';

const redirectLogin = ['/login']

function Auth() {
    const { userInfo, userId, success } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMe());
    }, [userId, dispatch]);

    useEffect(() => {
        if (userInfo == null) {
            //navigate('/login');
        } else {
            if (redirectLogin.some(path => path === location.pathname)) {
                //navigate('/');
            }
        }
    }, [userId, userInfo]);

    useEffect(() => {
        if (success) {
            navigate('/');
        }
    }, [success])



    return (
        <></>
    );
}

export default Auth;