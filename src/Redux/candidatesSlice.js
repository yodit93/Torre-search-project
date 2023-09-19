import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    candidates: [],
    recentSearches: [],
}
const url = 'http://localhost:3000/candidates';
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
    reducers: {
        addRecentSearch: (state, { payload }) => {
          const result = state.candidates.find((candidate) => candidate.id === payload);
          if (result) {
            return {
              ...state,
              recentSearches: [result, ...state.recentSearches].slice(0, 10),
            };
          }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCandidates.fulfilled, (state, { payload }) => ({
            ...state,
            candidates: payload,
        }))
    },
});
export const { addRecentSearch } = candidatesSlice.actions;
export default candidatesSlice.reducer;