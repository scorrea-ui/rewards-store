import React from "react";
const ButtonPoints = ({ handler, amount, className }) => {
  return (
    <button
      className={`c-btn ${className}`}
      onClick={() => handler(parseInt(amount))}
    >
      {amount}
    </button>
  );
};

export default ButtonPoints;
