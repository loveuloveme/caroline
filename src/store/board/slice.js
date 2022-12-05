import { createSlice } from '@reduxjs/toolkit'
import { getBoards } from './thunk';

const initialState = {
    loading: false,
    boards: [],
    error: null,
    success: false
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setEdit(state, action) {
            state.edit = true;
        },
        removeBoard(state, { payload }) {
            state.boards = state.boards.filter(board => board.boardId !== payload);
        }
    },
    extraReducers: {
        [getBoards.pending]: (state) => {
            state.loading = true;
        },
        [getBoards.fulfilled]: (state, { payload }) => {
            state.boards = payload;
            state.loading = false;
        },
        [getBoards.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = true;
        }
    },
});

export const { setEdit, removeBoard } = boardSlice.actions;
export default boardSlice.reducer;