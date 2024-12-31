import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState("Anshu");
  const incriment = () => {
    return setCount(count + "Gupta");
  };
  const decriment = () => {
    setCount((prevCount) =>
      prevCount.endsWith("Gupta") ? prevCount.slice(0, -5) : prevCount
    );
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incriment}>add 1</button>
      <button onClick={decriment}>subtract 1</button>
    </div>
  );
};

export default UseState;
