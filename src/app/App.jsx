import ButtonComponent from "./Components/ButtonComponent";
import LangComponent from "./Components/LangComponent";
import TextComponent from "./Components/TextComponent";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <LangComponent>
        <TextComponent />
        <ButtonComponent />
      </LangComponent>
    </div>
  );
}

export default App;