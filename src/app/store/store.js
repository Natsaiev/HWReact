import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/userSlice";

const appReducer = combineReducers({
    mainReducer
});

export const store = configureStore({
    reducer: appReducer
})