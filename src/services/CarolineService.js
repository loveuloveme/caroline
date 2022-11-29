import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    withCredentials: true
});

export const createUser = (email, password, username) => {
    return http.post('/auth/signup', {
        formFields: [
            {
                id: 'email',
                value: email
            },
            {
                id: 'password',
                value: password
            },
            {
                id: 'username',
                value: username
            },
            {
                id: 'fullname',
                value: 'John Doe'
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


export const getUserList = () => {
    return http.get('/users');
};

export const getUser = id => {
    return http.get(`/users/${id}`);
};

export default {
    createUser,
    getUserList,
    getUser,
    loginTokenUser
};