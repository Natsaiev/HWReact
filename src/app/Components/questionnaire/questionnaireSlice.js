import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0,
    questions: [{
        id: 0,
        title: "In the movie 'Inception', Dom Cobb is an expert in a technique called 'extraction', where he steals valuable secrets from within a person's subconscious.",
        chosen: null,
        correct: "true"
    }, 
    {
        id: 1,
        title: "In 'The Matrix', the blue pill allows Neo to escape the Matrix and discover the real world.",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 2,
        title: "In 'Jurassic Park', the dinosaurs are brought back to life using frog DNA to fill in the gaps in the genetic code.",
        chosen: null,
        correct: "true"
    }, 
    {
        id: 3,
        title: "In 'Star Wars', the Death Star was destroyed by Luke Skywalker using his Jedi mind powers.",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 4,
        title: "In 'The Lord of the Rings', Frodo's journey to destroy the One Ring begins in Rivendell.",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 5,
        title: "In 'The Avengers', Iron Man sacrifices himself by snapping his fingers with the Infinity Gauntlet to defeat Thanos.",
        chosen: null,
        correct: "true"
    }, 
    ]
}

export const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState,
    reducers: {
        pickAnswer(state, action) {
            state.questions[action.payload.id].chosen = action.payload.option;
        },
        sendChoices(state) {
            state.result = 0;
            state.questions.forEach(question => question.chosen === question.correct ? state.result += 1 : state.result += 0 );
        },
    }
})

export default questionnaireSlice.reducer;
export const { pickAnswer, sendChoices } = questionnaireSlice.actions;