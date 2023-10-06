import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    candidates: [],
    recentSearches: JSON.parse(localStorage.getItem('recentSearches')) ?? [],
}
const url = 'https://torre.ai/api/entities/_search';
const options = {"query": "Yo", "limit": 10};
export const getCandidates = createAsyncThunk('candidates/getCandidates', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(url, options);
    console.log(response.data.results)
    return response.data.results;
  } catch (err) {
    return rejectWithValue('Unable to fetch users');
  }
});

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {
        addRecentSearch: (state, { payload }) => {
          const result = state.candidates.find((candidate) => candidate.ardaId === payload);
          if(result) {
            const uniqueRecentSearches = new Set(state.recentSearches.map((search) => search.ardaId));
            if(!uniqueRecentSearches.has(result.ardaId)) {
              uniqueRecentSearches.add(result.ardaId);
              const updatedRecentSearches = [...uniqueRecentSearches].slice(0, 10);
              const newSearch = updatedRecentSearches.map((id) => state.candidates.find((candidate) => candidate.ardaId === id));
              localStorage.setItem('recentSearches', JSON.stringify(newSearch))
              return {
                ...state,
                recentSearches: [...newSearch],
              };
            }
            
          }
          return state;
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