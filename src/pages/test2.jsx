import React from "react";

const test2 = () => {
  return (
    <div>
      <div class="relative   w-screen h-screen">
        <div
          class="absolute text-white"
          style={{
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          Content goes here
        </div>
      </div>
    </div>
  );
};

export default test2;
