import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMe } from '../../store/user/thunk';

function Auth({ children }) {
    const { userInfo, meFetched, success } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getMe());
    }, []);

    useEffect(() => {
        if (meFetched) {
            if (userInfo) {
                if (location.pathname === '/') {
                    navigate('/home');
                }
            } else {
                if (location.pathname === '/home') {
                    navigate('/');
                }
            }
        }
    }, [meFetched]);

    useEffect(() => {
        dispatch(getMe());
    }, [success])

    return (
        <>
            {meFetched ? children : null}
        </>
    );
}

export default Auth;