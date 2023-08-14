import React from "react";

const End = ({ onClick }) => {
  return (
    <>
      <div className="flex justify-center my-2 items-center">
        <button
          className="p-2 text-lg md:text-2xl font-semibold shadow-green-200 rounded-md shadow-xl text-green-300 border-green-400 transition-transform hover:scale-95 border-2"
          onClick={onClick}
        >
          End Quiz
        </button>
      </div>
    </>
  );
};

export default End;
