import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    withCredentials: true
});

export const createTokenUser = (email, password) => {
    return http.post('/auth/signup', {
        formFields: [
            {
                id: 'email',
                value: email
            },
            {
                id: 'password',
                value: password
            }
        ]
    });
};

export const loginTokenUser = (email, password) => {
    return http.post('/auth/signin', {
        formFields: [
            {
                id: 'email',
                value: email
            },
            {
                id: 'password',
                value: password
            }
        ]
    });
};

export const createUser = (userId, email, username, fullName) => {
    return http.post('/users', { id: userId, email, username, fullName })
};

export const getUserList = () => {
    return http.get('/users');
};

export const getUser = id => {
    return http.get(`/users/${id}`);
};

export default {
    createTokenUser,
    createUser,
    getUserList,
    getUser,
    loginTokenUser
};