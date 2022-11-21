import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default userSlice.reducer;