import React from "react";

const Timer = ({ timer }) => {
  const formattedTime = formatTime(timer);
  const isLast10Minutes = timer <= 600; //WHEN LAST 10 MINUTES

  return (
    <div className="flex justify-end items-center my-2">
      <h2
        className={`font-uub  ${
          isLast10Minutes
            ? "text-red-700 animate-pulse  delay-500 border-red-700"
            : "text-green-300 border-green-400"
        } font-medium text-lg  border-2 p-2 flex items-center align-middle mr-2`}
      >
        Time Remaining:
        <span className="font-mono mx-2 text-lg md:text-2xl ">
          {formattedTime}
        </span>
      </h2>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60); // Calculate the whole minutes by dividing the total seconds by 60 and taking the floor
  const secondsLeft = seconds % 60; // Calculate the remaining seconds after calculating the minutes
  // padStart adds leading '0' if it's less than 2 digits
  return `${minutes.toString().padStart(2, "0")}:${secondsLeft
    .toString()
    .padStart(2, "0")}`;
};

export default Timer;
