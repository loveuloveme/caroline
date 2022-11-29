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
        const user = await CarolineService.createUser(email, password, username);
        if (user.data.status !== 'OK') throw user.data;

        return user.data.user;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});

export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = await CarolineService.loginTokenUser(email, password);
        localStorage.setItem('user-id', user.data.user.id);
        console.log(user);
        return await CarolineService.getUser(user.data.user.id).data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});