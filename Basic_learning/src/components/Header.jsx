import React from "react";
import Card from "./Card";

const Header = () => {
  return (
    <>
      <h1>Welcome to the Website!</h1>
      <nav>
        <a href="">Home </a>
        <a href="">About </a>
        <a href="">Contacts </a>
      </nav>
      <Card>
        <h1>this is a Card 1</h1>
      </Card>
      <Card>
        <h1>this is a Card 2</h1>
      </Card>
      <Card>
        <h1>this is a Card 3</h1>
      </Card>
    </>
  );
};

export default Header;
