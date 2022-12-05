import { createAsyncThunk } from '@reduxjs/toolkit'
import CarolineService from '../../services/CarolineService'


export const getMe = createAsyncThunk('user/me', async (_, { rejectWithValue }) => {
    try {
        const user = await CarolineService.getUser();
        return user.data;
    } catch (error) {
        console.log(error);
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
        if (user.data.status !== 'OK') throw user.data;
        return await CarolineService.getUser().data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});