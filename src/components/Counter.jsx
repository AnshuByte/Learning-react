import React from "react";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment the Count</button>
    </div>
  );
};

export default Counter;
