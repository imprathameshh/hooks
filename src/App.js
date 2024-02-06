import React, { useCallback, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

function App() {
  //Define a Hook
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(0);

  //Use Callback Hook
  const Learning = useCallback(() => {
    //Some Operaction
  }, [subtract]); //Subtract is dependency of useCallback

  return (
    <div className="container">
      <h1>Example of useMemo hook</h1>
      {/* Child Compoent  */}
      <ChildA Learning={Learning} />
      <div>
        <h2>{add}</h2>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <br></br>
        <h2>{subtract}</h2>
        <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
      </div>
    </div>
  );
}

export default App;
