
import React, { useState, useEffect } from "react";
import Question from "./Question";
import ResultMessage from "./ResultMessage";

export default function QuestionCard({
  questionData,
  questionNumber,
  totalQuestions,
  onAnswer,
}) {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(null);

  // 🟢 Reset states when question changes
  useEffect(() => {
    setSelected("");
    setFeedback(null);
  }, [questionData]);

  const handleSelect = (option) => {
    setSelected(option);
    const isCorrect = option === questionData.answer;
    setFeedback(isCorrect ? "correct" : "wrong");

    // parent handles moving to next question
    onAnswer(isCorrect);
  };

  return (
    <div className="p-6 rounded-3xl shadow-2xl 
      bg-white/20 backdrop-blur-xl border border-white/40 
      animate-fadeIn transition-all duration-500 
      w-[95vw] max-w-2xl mx-auto">

      <Question
        text={questionData.question}
        number={questionNumber}
        total={totalQuestions}
      />

      <div className="grid grid-cols-1 gap-3 mt-4">
        {questionData.options.map((option, index) => {
          const isCorrect = option === questionData.answer;

          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={!!feedback}
              className={`py-3 px-5 rounded-xl text-lg font-medium transition-all duration-300 shadow 
                border 
                ${
                  feedback && isCorrect
                    ? "bg-green-500 border-green-600 text-white scale-105"
                    : selected === option && feedback === "wrong"
                    ? "bg-red-500 border-red-600 text-white"
                    : "bg-white/60 border-gray-300 hover:bg-indigo-100"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>

      {feedback && (
        <ResultMessage feedback={feedback} correctAnswer={questionData.answer} />
      )}
    </div>
  );
}





























