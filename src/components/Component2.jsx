import React from "react";

const Component2 = ({ count, onClickHandeler }) => {
  const handleClick = () => {
    onClickHandeler();
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick} style={{ margin: "10px" }}>
        Incriment
      </button>
    </div>
  );
};

export default Component2;
