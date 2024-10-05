import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./Components/questionnaire/questionnaireSlice"

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer
    }
})