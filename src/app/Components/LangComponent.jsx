import { useState } from "react";
import Language from "./Context/Language";

function LangComponent({ children }) {
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Language.Provider value={{ language, setLanguage }}>
        {children}
      </Language.Provider>
    </>
  );
}

export default LangComponent;