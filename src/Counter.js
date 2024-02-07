import React, { useReducer } from "react";

// disptch => state => action =>update count
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
const initialstate = 0;

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
};

export default Counter;
