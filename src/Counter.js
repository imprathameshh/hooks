import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  //Destructure of an array
  const [count, Increment, Decerment] = useCounter();

  return (
    <div>
      <h1>Example of useCustome hook.</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decerment}>Decerment</button>
      </div>
    </div>
  );
};

export default Counter;
