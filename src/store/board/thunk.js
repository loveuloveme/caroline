import { createAsyncThunk } from '@reduxjs/toolkit'
import CarolineService from '../../services/CarolineService'

export const getBoards = createAsyncThunk('board/all', async (_, { rejectWithValue }) => {
    try {
        const boards = await CarolineService.getBoards();
        return boards.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
});