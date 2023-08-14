// import React from "react";
// import Retake from "./buttons/Retake"; // Make sure to provide the correct path

// const QuitQuiz = ({ onRetakeClick }) => {
//   return (
//     <div className="flex font-uub p-2 text-white bg-green-200 gap-3 whitespace-nowrap justify-center items-center h-screen flex-col">
//       <h2 className="text-2xl font-semibold md:text-5xl">Quiz Quitted</h2>
//       <p className="md:text-2xl text-sm font-medium">
//         You've chosen to Quit the quiz. Thank you!
//       </p>
//       <div className="my-2">
//         <Retake onClick={onRetakeClick} />
//       </div>
//     </div>
//   );
// };

// export default QuitQuiz;


import React, { useReducer } from "react";
import Quiz from "./Quiz";

const initialState = {
  retakeClicked: false,
};

const retakeReducer = (state, action) => {
  switch (action.type) {
    case "RETAKE_CLICKED":
      return {
        ...state,
        retakeClicked: true,
      };
    default:
      return state;
  }
};

const QuitQuiz = () => {
  const [state, dispatch] = useReducer(retakeReducer, initialState);

  const handleRetakeClick = () => {
    dispatch({ type: "RETAKE_CLICKED" });
  };

  if (state.retakeClicked) {
        return <Quiz />;
  }

  return (
    <div className="flex font-uub p-2 text-white bg-green-200 gap-3 whitespace-nowrap justify-center items-center h-screen flex-col">
      <h2 className="text-2xl font-semibold md:text-5xl">Quiz Quitted</h2>
      <p className="md:text-2xl text-sm font-medium">
        You've chosen to Quit the quiz. Thank you!
      </p>
      <div className="my-2">
        <button
          className="p-2 text-lg md:text-2xl font-semibold shadow-green-200 rounded-md shadow-xl bg-white text-green-300 border-green-400 transition-transform hover:scale-95 border-2"
          onClick={handleRetakeClick}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default QuitQuiz;
