import { useDispatch } from "react-redux";
import { Question } from "./Question/Question";
import { Result } from "./Components/Result";
import { sendChoices } from "./Components/questionnaire/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  return <div  className="App">
    <h1 style={{ textAlign: "center" }}>Film quiz </h1>
    <Result />
    <Question />
    <button className="submitQuiz" onClick={() => dispatch(sendChoices())}>Submit</button>
  </div>;
}

export default App;