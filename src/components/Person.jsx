import React from "react";

// cost Person = ({age,name,section}) // prop Destructuring(it hep us to stop using prop. multiple time)
const Person = (props) => {
  return (
    <>
      <h1>
        my age is {props.age} . my name is {props.name} and my section is{" "}
        {props.section}
      </h1>
    </>
  );
};

export default Person;
