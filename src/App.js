import React, { createContext } from "react";
import ChildA from "./compoents/ChildA";

// Define context
export const nameData = createContext();
export const genderData = createContext();

function App() {
  //Define variable
  const name = "Swami";
  const gender = "Male";

  return (
    <div className="container">
      <h1>Example of useContext hook</h1>
      <nameData.Provider value={name}>
        <genderData.Provider value={gender}>
          <ChildA />
        </genderData.Provider>
      </nameData.Provider>
    </div>
  );
}

export default App;
