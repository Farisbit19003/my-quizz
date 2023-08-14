import React from "react";

const Retake = ({ onClick }) => {
  return (
    <button
      className="p-2 text-lg md:text-2xl font-semibold shadow-green-200 rounded-md shadow-xl bg-white text-green-300 border-green-400 transition-transform hover:scale-95 border-2"
      onClick={onClick}
    >
      Retake Quiz
    </button>
  );
};

export default Retake;
