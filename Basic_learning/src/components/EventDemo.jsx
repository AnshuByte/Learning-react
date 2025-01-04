import React from "react";
import { useState } from "react";

const EventDemo = () => {
  const [message, setMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState("Copy Text !!!");
  const [mouseHover, setMouseHover] = useState("Hover over This Text");
  const [OnHoverStyle, setOnHOverStyle] = useState({});

  const onClickHandle = () => {
    setMessage("Button Clicked");
  };
  const handleCopy = () => {
    setCopyMessage("Text Copied !!!");
  };
  const handleMouseEnter = () => {
    setOnHOverStyle({ backgroundColor: "lightBlue", color: "Black" });
    setMouseHover("You are Hovering Over the Text !!!");
  };
  const handleMouseLeave = () => {
    setOnHOverStyle({});
    setMouseHover("You Left Come Back !!!");
  };

  return (
    <div>
      <p>This is the test Message : {message}</p>
      <button onClick={onClickHandle}>Click Here</button>

      {/* OnCopy */}
      <p onCopy={handleCopy}>{copyMessage}</p>
      <p
        style={OnHoverStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {mouseHover}
      </p>
    </div>
  );
};

export default EventDemo;
