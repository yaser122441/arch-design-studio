import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EnglishMain from "./components/LTR/EnglishMain";
import ArabicMain from "./components/RLT/ArabicMain";

function App() {
  return (
    <>
      <EnglishMain dir={"ltr"} />
      <ArabicMain dir={"rtl"} />
    </>
  );
}

export default App;
