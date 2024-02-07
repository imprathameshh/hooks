import React, { useState } from "react";

function App() {
  //Define useState Hook
  const [count, setCount] = useState(12);

  //Define Function
  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Example of useState hook.</h1>
      <h3>Count is {count}</h3>
      <button onClick={updateCount}>Add Count</button>
    </>
  );
}

export default App;
