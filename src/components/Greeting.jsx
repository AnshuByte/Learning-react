import React from "react";

const Greeting = () => {
  let abc = "Jhon";
  let dateTime = new Date();
  return (
    <>
      <h1>Greeting from {abc}</h1>
      <p>Time is {dateTime.getFullYear()}</p>
    </>
  );
};
export default Greeting;
