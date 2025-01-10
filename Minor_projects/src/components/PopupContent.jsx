import React from "react";
import { createPortal } from "react-dom";

// This is to inject in the #root
// const PopupContent = ({ copied }) => {
//   return (
//     <section>
//       {copied && (
//         <div style={{ position: "absolute", bottom: "3rem" }}>
//           Copied to ClipBoard
//         </div>
//       )}
//     </section>
//   );
// };

// To directly attach to th body
const PopupContent = ({ copied }) => {
  // add CreatePortal
  return createPortal(
    <section>
      {copied && (
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            backgroundColor: "white",
            padding: "10px",
            color: "black",
            borderRadius: "5px",
          }}
        >
          Copied to ClipBoard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
