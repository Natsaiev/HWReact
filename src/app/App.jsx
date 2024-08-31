import "./App.css";
import { useState } from "react";
import { CitySelectors} from "./Components";
import { CityCard } from "./Components";



function App () {
    const [chosenCity, setChosenCity] = useState(citiesData[0]);

    const handleCityFromChild = (city) => {
        setChosenCity(city);
    };
return(
    <div className="App">
      < CitySelector passCityToParent={handleCityFromChild} />
      < CityCard city={chosenCity} />
    </div>
)
}
export default App;