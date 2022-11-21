import { createAsyncThunk } from '@reduxjs/toolkit'
import CarolineService from '../../services/CarolineService'


export const getMe = createAsyncThunk('user/me', async (_, { rejectWithValue }) => {
    try {
        const user = await CarolineService.getUser(localStorage.getItem('user-id'));
        if (Array.isArray(user.data)) throw new Error('Not loggined');
        return user.data;
    } catch (error) {
        console.log(error);
        localStorage.setItem('user-id', '');
        return rejectWithValue(error)
    }
});

export const registerUser = createAsyncThunk('user/register', async ({ email, password, username }, { rejectWithValue }) => {
    try {
        const tokenUser = await CarolineService.createTokenUser(email, password);
        if (tokenUser.data.status !== 'OK') throw new Error(tokenUser.data.status);

        const user = await CarolineService.createUser(tokenUser.data.user.id, email, username, username);

        localStorage.setItem('user-id', user.data.id)
        return user.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});

export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = await CarolineService.loginTokenUser(email, password);
        localStorage.setItem('user-id', user.data.id);
        return user.data.user;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});