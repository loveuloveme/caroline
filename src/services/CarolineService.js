import axios from 'axios';
import { SERVICE } from '../common/Service';

class CarolineService {
    constructor() {
        this.http = axios.create({
            baseURL: process.env.REACT_APP_API_ENDPOINT,
            withCredentials: true
        });
    }

    createUser(email, password, username) {
        return this.http.post('/auth/signup', {
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
                }
            ]
        });
    };

    loginTokenUser(email, password) {
        return this.http.post('/auth/signin', {
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

    getUserList() {
        return this.http.get('/users');
    };

    getUser(id) {
        return this.http.get(`/users/me`);
    };

    createBoard(url, type = 'trello') {
        return this.http.post(`/boards?url=${url}&type=${type}`);
    };

    getBoards(type = 'trello') {
        return this.http.get(`/boards?type=${type}`);
    };

    getBoard(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}?type=${type}`);
    };

    removeBoard(boardId, type = 'trello') {
        return this.http.delete(`/boards/${boardId}?type=${type}`);
    };

    setCredentials(service, params) {
        return this.http.post(`/credentials?type=${service}`, params);
    };

    logout() {

        Object.values(SERVICE).forEach(service => localStorage.removeItem(service))
        return this.http.post('/auth/signout');
    };

    getBoardCards(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}/cards?type=${type}`);
    };

    getBoardTags(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}/tags?type=${type}`);
    };

    getBoardStates(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}/states?type=${type}`);
    };

    getBoardMembers(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}/members?type=${type}`);
    };

    getBoardEdges(boardId, type = 'trello') {
        return this.http.get(`/boards/${boardId}/edges?type=${type}`);
    };
}

export default new CarolineService();