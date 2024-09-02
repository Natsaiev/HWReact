import styles from "../styles/App.module.css";
import { useState } from "react";
import CitySelector from "./CitySelector";
import CityCard from "./CityCard";
import MathQuiz from "./MathQuiz"

function App() {
  const [city, setCity] = useState();

  function updateCity(newCity) {
    setCity(newCity);
  }

  return (
    <div className={styles.div}>
      <CitySelector updateCity={updateCity} />
      {city ? <CityCard city={city} /> : <h1>Город не выбран</h1>}
      <MathQuiz/>
    </div>

  );
}

export default App;
