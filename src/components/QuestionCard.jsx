
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

  // Reset local state whenever the incoming question changes (use question text as identity)
  useEffect(() => {
    setSelected("");
    setFeedback(null);
  }, [questionData.question]);

  const handleSelect = (option) => {
    if (feedback) return; // guard
    setSelected(option);

    // compare selected option string with the original correct answer string
    const isCorrect = option === questionData.answer;
    setFeedback(isCorrect ? "correct" : "wrong");

    // let parent handle score and progression
    onAnswer(isCorrect);
  };

  return (
    <div className="p-6 rounded-3xl shadow-2xl bg-white/20 backdrop-blur-xl border border-white/40 animate-fadeIn transition-all duration-500 w-[95vw] max-w-2xl mx-auto">
      <Question text={questionData.question} number={questionNumber} total={totalQuestions} />

      <div className="grid grid-cols-1 gap-3 mt-4">
        {questionData.options.map((option, index) => {
          const isCorrectOption = option === questionData.answer;

          return (
            <button
              key={option + "-" + index} // stable-ish key using option text + index
              onClick={() => handleSelect(option)}
              disabled={!!feedback}
              className={`py-3 px-5 rounded-xl text-lg font-medium transition-all duration-300 shadow border text-left
                ${
                  feedback && isCorrectOption
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

      {feedback && <ResultMessage feedback={feedback} correctAnswer={questionData.answer} />}
    </div>
  );
}





































