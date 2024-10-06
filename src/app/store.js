import { configureStore } from "@reduxjs/toolkit";
import QuoteReducer from "../features/quote/quoteSlice";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
    quotes: QuoteReducer,
});

export const store = configureStore({
    reducer: mainReducer,
});