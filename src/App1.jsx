import React from "react";
import { useState } from "react";
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";

const App1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Component2 count={count} onClickHandeler={() => setCount(count + 1)} />
      <Component1 count={count} onClickHandeler={() => setCount(count - 1)} />
    </div>
  );
};

export default App1;
