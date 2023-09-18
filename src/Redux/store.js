import { configureStore } from "@reduxjs/toolkit";
import candidatesReducer from './candidatesSlice';

const store = configureStore({
    reducer: {
        candidates: candidatesReducer,
    },
});

export default store;