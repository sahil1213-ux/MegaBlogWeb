import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducers/AuthSlice";

const store = configureStore({
    reducer: combineReducers({
        auth: AuthSlice,
    }),
});

export default store;