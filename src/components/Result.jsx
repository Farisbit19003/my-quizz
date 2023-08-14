import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Retake from "./buttons/Retake";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4 flex flex-col">
      <button
        className="bg-white text-green-300 border-2 border-green-400 w-full text-xl  px-2 py-1 rounded-md  flex items-center"
        onClick={toggleDropdown}
      >
        {title}
        <FiChevronDown
          className={`flex text-3xl justify-end items-center ml-auto  transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="mt-2 flex flex-col gap-2 md:text-lg">
          {items.map((item, index) => (
            <li className=" flex p-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Results = ({
  correctAnswers,
  wrongAnswers,
  skippedQuestions,
  questions,
  totalMarks,
  onRetakeClick,
}) => {
  const correctItems = correctAnswers.map((answer) => (
    <div
      className="flex flex-col text-green-500 border-2 border-green-400 shadow-lg w-full p-1"
      key={answer.question}
    >
      <span className="font-semibold">{answer.question}</span>
      <p>
        You selected:
        <span className="ml-2 font-semibold ">{answer.selectedOption}</span>
      </p>
    </div>
  ));

  const wrongItems = wrongAnswers.map((answer) => (
    <div
      className="flex flex-col text-red-500 border-2 border-red-400 w-full p-1"
      key={answer.question}
    >
      <span className="font-semibold">{answer.question} </span>
      <p className="text-red-500">
        You selected:{" "}
        <span className="font-semibold">{answer.selectedOption}</span>
      </p>
      <p className="text-green-500">
        {" "}
        Correct:<span className="font-semibold"> {answer.correctOption}</span>
      </p>
    </div>
  ));

  const skippedItems = skippedQuestions.map((questionIndex) => (
    <div
      className="flex flex-col text-blue-500 border-2 border-blue-400 w-full p-1"
      key={questionIndex}
    >
      {questions[questionIndex].question}
    </div>
  ));

  return (
    <>
      <div className="p-2 m-2">
        <h2 className="flex justify-center items-center text-lg text-green-300 md:text-3xl">
          Quiz Results
        </h2>
        <h3 className="flex justify-start text-green-300 items-center text-xl font-bold">
          Total Marks: {totalMarks}
        </h3>

        <Dropdown title="Correct Answers" items={correctItems} />
        <Dropdown title="Wrong Answers" items={wrongItems} />
        <Dropdown title="Skipped Questions" items={skippedItems} />
        <div className="my-2">
          <Retake onClick={onRetakeClick} />
        </div>
      </div>
    </>
  );
};

export default Results;
