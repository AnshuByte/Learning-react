import React, { useEffect } from "react";
import { useState } from "react";

const LocalStorageEg = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>YourName : {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default LocalStorageEg;
