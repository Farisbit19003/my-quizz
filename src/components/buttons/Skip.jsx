import React from "react";

const Skip = ({ onClick, disabled }) => {
  return (
    <button
      className="p-2 text-lg md:text-2xl font-semibold border-green-400 rounded-md shadow-xl text-green-300 shadow-green-200 transition-transform hover:scale-95 border-2"
      onClick={onClick}
      disabled={disabled}
    >
      Skip Question
    </button>
  );
};

export default Skip;
