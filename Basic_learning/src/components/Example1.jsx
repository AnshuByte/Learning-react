import React, { useState } from "react";

const Example1 = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );
  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };
  return (
    <div>
      <h1>Random No : {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate Random No.</button>
    </div>
  );
};

export default Example1;
