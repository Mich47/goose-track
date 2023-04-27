import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goose-track-api-3uhn.onrender.com/api';

export const getTasksOfMonth = createAsyncThunk('month/tasks', async ( date, thunkAPI) => {
    try {
        const {data} = await axios.get('/tasks', date)
        console.log(data)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})