import React from "react";
import "./index.css";
import CopyInput from "./components/CopyInput";
const Cart = () => {
  const items = ["Earbuds", "power bank", "New SSD", "T-shirt"];
  const styles = {
    color: "blue",
    backgroundColor: "#BCC4DB",
    padding: "10px",
  };
  return (
    <div>
      <h1
        style={{
          color: "white",
          backgroundColor: "#BCC4DB",
          padding: "10px",
        }}
      >
        Cart 🛒
      </h1>
      {items.length > 0 && <h2> you have {items.length} in your cart</h2>}
      <h4 style={styles}> Products</h4>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Cart />
      <CopyInput />
    </div>
  );
};

export default App;
