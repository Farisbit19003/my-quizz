import React, { useEffect, useReducer, useState } from "react";
import questions from "./questions";
import { initialState, quizReducer } from "./reducers";
import Timer from "./Timer";
import Question from "./Question";
import Results from "./Result";
import QuitQuiz from "./QuitQuiz";
import Skip from "./buttons/Skip";
import Quit from "./buttons/Quit";
import End from "./buttons/End";
import Modal from "./Modal";

const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestionIndex, answers, skippedQuestions } = state;
  const [quizQuitted, setQuizQuitted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  //SHOW MODAL FIRST
  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem("hasSeenInstructions");
    if (!hasSeenInstructions) {
      setShowModal(true);
    }
  }, []);
  //QUIT QUIZ
  const handleQuitQuiz = () => {
    setQuizQuitted(true);
  };
  //TIMER
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (state.timer > 0) {
        dispatch({ type: "TICK" });
      } else {
        dispatch({ type: "TIMER_END" });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [state.timer]);
  //SKIP
  const handleSkip = () => {
    dispatch({
      type: "SKIP_QUESTION",
      payload: { questionIndex: currentQuestionIndex },
    });
  };
  //END
  const handleEndQuiz = () => {
    dispatch({ type: "END_QUIZ" });
  };
  //ANSWERS
  const handleAnswer = (selectedOption, skip = false) => {
    dispatch({
      type: "NEXT_QUESTION",
      payload: { questionIndex: currentQuestionIndex, selectedOption },
    });
  };
  //RETAKE
  const handleRetakeQuiz = () => {
    dispatch({ type: "RETAKE_QUIZ" });
  };
  //CURRENT QUESTIONS
  const currentQuestion = questions[currentQuestionIndex];
  //ARRAY OF WRONG ANSWERS
  const wrongAnswers = [];
  //ARRAY OF CORRECT ANSWERS
  const correctAnswers = [];
  //STORE THEM IN THEIR RESPECTIVE ARRAYS
  answers.forEach((answer) => {
    const question = questions[answer.questionIndex];
    if (question.correctAnswer === answer.selectedOption) {
      correctAnswers.push({
        question: question.question,
        selectedOption: answer.selectedOption,
      });
    } else {
      wrongAnswers.push({
        question: question.question,
        selectedOption: answer.selectedOption,
        correctOption: question.correctAnswer,
      });
    }
  });

  return (
    <>
      {/* SHOW MODAL */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <div className="flex flex-col h-full">
        {/* QUIT QUIZ */}
        {quizQuitted ? (
          <QuitQuiz onRetakeClick={handleRetakeQuiz} />
        ) : (
          <>
            <h1 className="flex my-2 text-green-300 font-uub items-center justify-center font-semibold text-3xl md:text-5xl ">
              Quiz App
            </h1>
            {currentQuestionIndex < questions.length ? (
              <>
                {/* TIMER */}
                <Timer timer={state.timer} />
                {/* QUESTIONS */}
                <Question
                  question={currentQuestion.question}
                  options={currentQuestion.options}
                  handleAnswer={handleAnswer}
                />
                {/* END BUTTON */}
                <End onClick={handleEndQuiz} />
                <>
                  <div className=" mx-8 md:mx-16 my-2 flex justify-between text-lg items-center font-uub">
                    {/* SKIP BUTTON */}
                    {!quizQuitted && state.timer > 0 && (
                      <Skip
                        onClick={handleSkip}
                        disabled={skippedQuestions.includes(
                          currentQuestionIndex
                        )}
                      />
                    )}
                    {/* QUIT BUTTON */}
                    {!quizQuitted &&
                      currentQuestionIndex < questions.length &&
                      state.timer > 0 && <Quit onClick={handleQuitQuiz} />}
                  </div>
                </>
              </>
            ) : (
              <>
                {/* RESULTS */}
                <Results
                  correctAnswers={correctAnswers}
                  wrongAnswers={wrongAnswers}
                  questions={questions}
                  skippedQuestions={skippedQuestions}
                  onRetakeClick={handleRetakeQuiz}
                  totalMarks={state.totalMarks}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
