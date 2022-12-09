import { createAsyncThunk } from '@reduxjs/toolkit'
import CarolineService from '../../services/CarolineService'

export const getBoards = createAsyncThunk('board/all', async (_, { rejectWithValue }) => {
    try {
        const boards = await CarolineService.getBoards();
        return boards.data;
    } catch (error) {
        return rejectWithValue({
            response: error.response.data,
            status: error.status
        });
    }
});