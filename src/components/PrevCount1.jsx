import React from "react";
import { useState } from "react";
const PrevCount1 = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const increment = () => {
    setCount((PrevCount) => PrevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>PrevCount Increment</button>
    </div>
  );
};

export default PrevCount1;
