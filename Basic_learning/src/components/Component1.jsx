import React from "react";

const Component1 = ({ count, onClickHandeler }) => {
  const handleClick = () => {
    onClickHandeler();
  };
  return (
    <div>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
};

export default Component1;
