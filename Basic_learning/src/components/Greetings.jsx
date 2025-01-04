import React from "react";

const Greetings = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <div>Good morning</div>
  ) : (
    <div>Good afternoon</div>
  );
};

export default Greetings;
