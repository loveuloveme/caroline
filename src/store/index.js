import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import boardReducer from './board/slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer
    }
});

export default store