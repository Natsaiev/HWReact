import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/quotes");
        return response.data["quotes"][Math.floor(Math.random() * response.data.quotes.length)];
    } catch (error) {
        throw new Error(error);
    }
});