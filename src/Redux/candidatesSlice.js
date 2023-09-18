import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    candidates: [],
}
const url = 'http://localhost:3001/candidates';
export const getCandidates = createAsyncThunk('candidates/getCandidates', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return rejectWithValue('Unable to fetch users');
  }
});

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCandidates.fulfilled, (state, { payload }) => ({
            ...state,
            candidates: payload,
        }))
    },
});

export default candidatesSlice.reducer;