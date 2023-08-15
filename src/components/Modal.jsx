import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="z-10 p-6 bg-white  rounded-lg shadow-lg">
        <h2 className="text-xl font-uub text-green-500 font-semibold mb-4">
          Quiz Instructions
        </h2>
        <ul className="list-disc pl-6">
          <li>Each question carries 5 marks.</li>
          <li>If you don't know the answer, you can skip it.</li>
          <li>Skips are unanswerable.</li>
          <li>You can quit at any time.</li>
          <li>If you click on any answer, it will automatically goes on to next.</li>
          <li>You can end the quiz at any time.</li>
          <li>There is no negative marking.</li>
        </ul>
        <button
          className="mt-4 px-4 bottom-0 py-2 bg-green-500 font-Mono font-semibold transition-transform hover:scale-95 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
