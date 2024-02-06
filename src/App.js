import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //Define Hook
  const [count, setCount] = useState(12);

  //Use effect
  useEffect(() => {
    console.log("component mounted");
  }, []);

  //Define Function
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Example of useEffect hook.</h1>
      <h3>Count is {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
