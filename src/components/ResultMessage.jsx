import React from "react";

export default function ResultMessage({ feedback, correctAnswer }) {
  return (
    <div className="mt-5 text-center animate-fadeIn">
      {feedback === "correct" ? (
        <p className="text-green-700 font-bold text-xl">
          🎉 Correct Answer!
        </p>
      ) : (
        <p className="text-red-700 font-bold text-xl">
          ❌ Wrong!  
          <span className="text-indigo-700">Correct: {correctAnswer}</span>
        </p>
      )}
    </div>
  );
}




















