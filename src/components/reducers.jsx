import questions from "./questions";
// Initial state for the quiz
export const initialState = {
  currentQuestionIndex: 0,
  answers: [],
  skippedQuestions: [],
  timer: 20,
  totalMarks: 0,
};

// reducers.js

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      const question = questions[action.payload.questionIndex];
      const isCorrect =
        question.correctAnswer === action.payload.selectedOption;
      const marks = isCorrect ? 5 : 0;
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: [...state.answers, { ...action.payload, marks }],
        totalMarks: state.totalMarks + marks, // Update totalMarks
      };
    case "SKIP_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        skippedQuestions: [
          ...state.skippedQuestions,
          action.payload.questionIndex,
        ],
      };
    case "END_QUIZ":
      return {
        ...state,
        currentQuestionIndex: questions.length,
      };
    case "TICK":
      return {
        ...state,
        timer: state.timer - 1,
      };
      case "TIMER_END":
      return {
        ...state,
        currentQuestionIndex: questions.length,
      };
    case "RETAKE_QUIZ":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
