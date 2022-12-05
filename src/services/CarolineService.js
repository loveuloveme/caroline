import axios from 'axios';
import Cookies from 'js-cookie';

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

//https:/.com/app-key
//5b449c749d3b9865efec800c9665974d
//11fcfc2efaddaf0fd6f8a2ef44b57db3d93244fd4f92b88a4919acac05002765

export const getUserList = () => {
    return http.get('/users');
};

export const getUser = id => {
    return http.get(`/users/me`);
};

export const createBoard = url => {
    return http.post(`/boards/?url=${url}&type=trello`);
};

export const getBoards = () => {
    return http.get(`/boards/?type=trello`);
};

export const getBoard = (boardId) => {
    return http.get(`/boards/${boardId}?type=trello`);
};

export const removeBoard = (boardId) => {
    return http.delete(`/boards/${boardId}?type=trello`);
};

export const setTrelloCredentials = (apiKey, oAuthToken) => {
    return http.post(`/credentials/?type=trello`, { apiKey, oAuthToken });
};

export const logout = () => {
    localStorage.setItem('apiKey', '');
    localStorage.setItem('oAuthToken', '');
    return http.post('/auth/signout');
};

export const getBoardCards = (boardId) => {
    return http.get(`/boards/${boardId}/cards/?type=trello`);
};

export const getBoardTags = (boardId) => {
    return http.get(`/boards/${boardId}/tags/?type=trello`);
};

export const getBoardStates = (boardId) => {
    return http.get(`/boards/${boardId}/states/?type=trello`);
};

export const getBoardMembers = (boardId) => {
    return http.get(`/boards/${boardId}/members/?type=trello`);
};

export const getBoardEdges = (boardId, cardId) => {
    return http.get(`/boards/${boardId}/cards/${cardId}/edges/?type=trello`);
};

export default {
    createUser,
    getUserList,
    getUser,
    loginTokenUser,
    createBoard,
    setTrelloCredentials,
    getBoards,
    removeBoard,
    getBoardCards,
    getBoardMembers,
    getBoardStates,
    getBoardTags,
    getBoardEdges,
    getBoard
};