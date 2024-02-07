import { useState } from "react";

const useCounter = () => {
  //Define State
  const [count, setCount] = useState(0); //Define Function

  //Define Function
  function Increment() {
    setCount(count + 1);
  }
  function Decerment() {
    setCount(count - 1);
  }
  return [count, Increment, Decerment];
};

export default useCounter;
