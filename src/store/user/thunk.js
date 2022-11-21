import { createAsyncThunk } from '@reduxjs/toolkit'
import CarolineService from '../../services/CarolineService'


export const registerUser = createAsyncThunk('user/register', async ({ email, password, username }, { rejectWithValue }) => {
    try {
        console.log(email, password);
        const tokenUser = await CarolineService.createTokenUser(email, password);
        console.log(tokenUser);
        if (tokenUser.data.status !== 'OK') throw new Error(tokenUser.data.status);

        const user = await CarolineService.createUser(tokenUser.data.user.id, email, username, username);
        console.log(user);
        localStorage.setItem('userToken', user.userToken);

        return user;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
}
)