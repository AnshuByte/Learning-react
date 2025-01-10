import { useState } from "react";
import Switcher from "./components/Switcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switcher />
      <h1>Hi</h1>
    </>
  );
}

export default App;
