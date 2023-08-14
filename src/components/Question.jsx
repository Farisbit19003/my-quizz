import React from "react";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <>
    <div className="flex flex-col p-4 font-uub">
    <p className="flex my-2 p-3 rounded-md bg-green-200 text-green-500 font-semibold text-lg md:text-2xl shadow-lg">{question}</p>
      <ul className="p-2 bg-white list-inside list-disc border-2 shadow border-green-500 font-uub  mt-2">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswer(option)}
            className="cursor-pointer rounded-md bg-green-200 text-green-500 shadow-lg m-2 font-medium  p-2 md:text-xl transition-transform hover:scale-95"
          >
           {option} 
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Question;
