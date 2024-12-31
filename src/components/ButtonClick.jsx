import React from "react";
const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("Clicked");
        console.log("hi");
      }}
    >
      Click
    </button>
  );
};
const ButtonClick = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default ButtonClick;
