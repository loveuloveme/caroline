import { createSlice } from '@reduxjs/toolkit'
import { registerUser, getMe, loginUser, setTrelloCredentials } from './thunk';

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
    meFetched: false
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
            state.meFetched = true;
        },
        [getMe.rejected]: (state, { payload }) => {
            state.loading = false
            state.meFetched = true;
            // state.error = payload
        }
    },
});

export const { setLoading, clearCredentialsError, setDefaultCredentialsState } = userSlice.actions;
export default userSlice.reducer;