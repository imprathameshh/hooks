import React, { useState, useMemo } from "react";
import "./index.css";

function App() {
  //Define State
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);

  //Usememo Function
  const multiplication = useMemo(
    function multiply() {
      console.log("compoent mount");
      return addition * 10;
    },
    [addition]
  );

  return (
    <div className="container">
      <h1>Example of useMemo hook.</h1>
      <div>
        <h2>Open console log</h2>
        <h3>Multiplication by 10 * {multiplication}</h3>
        <button onClick={() => setAddition(addition + 1)}>Addition</button>
        <h3>{addition}</h3>
        <button onClick={() => setSubtraction(subtraction - 1)}>
          Subtraction
        </button>
        <h3>{subtraction}</h3>
      </div>
    </div>
  );
}

export default App;
