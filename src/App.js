import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  //Set State
  const [name, setName] = useState("Swami");

  //Define useRef hook
  const reElement = useRef("");

  //Reset Btn
  const Reset = () => {
    setName("");
    reElement.current.focus();
  };

  //Orange Color Background
  const BgOrange = () => {
    reElement.current.style.background = "orange";
  };
  return (
    <div className="container">
      <h1>Example of useRef hook.</h1>
      <input
        ref={reElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={BgOrange}>Be Orange</button>
    </div>
  );
}

export default App;
