import React from "react";

const Cart = () => {
  const items = ["Earbuds", "power bank", "New SSD", "T-shirt"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2> you have {items.length} in your cart</h2>}
      <h4> Products</h4>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  return <Cart />;
};

export default App;
