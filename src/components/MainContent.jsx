import React from "react";
import { FaBeer } from "react-icons/fa";
const MainContent = () => {
  return (
    <>
      <div
        style={{
          color: "Red",
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>"Main Content"</h2>
        <FaBeer size={30} color="blue" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius
          reiciendis tempora corporis, aut ab doloremque inventore ullam natus
          minus quidem, nisi quas dignissimos accusantium consectetur voluptatem
          in nostrum alias!
        </p>
      </div>
    </>
  );
};

export default MainContent;
