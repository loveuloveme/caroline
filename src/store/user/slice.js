import { createSlice } from '@reduxjs/toolkit'
import { registerUser, getMe, loginUser } from './thunk';

const userId = localStorage.getItem('user-id')
    ? localStorage.getItem('user-id')
    : null;

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
    userId
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = true;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.userInfo = payload;
            state.loading = false;
            state.success = true;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.userInfo = payload;
            state.loading = false;
            state.success = true;
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getMe.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getMe.fulfilled]: (state, { payload }) => {
            state.userInfo = payload;
            state.loading = false;
            state.success = true;
        },
        [getMe.rejected]: (state, { payload }) => {
            state.loading = false
            // state.error = payload
        },
    },
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;