
import { useParams, Link } from "react-router-dom";
import { questionsMap } from "../data/questionsMap";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";

export default function QuizPage() {
  const { cat, sub } = useParams();
  const questionSet = questionsMap[cat][sub];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setTimeout(() => {
      if (current + 1 < questionSet.length) setCurrent(current + 1);
      else setDone(true);
    }, 800);
  };

  // ⭐ Completion Page UI
  if (done)
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-300 via-indigo-200 to-blue-400 p-6">
        <div className="backdrop-blur-xl bg-white/40 p-10 rounded-3xl shadow-2xl border border-white/30 text-center w-[90%] max-w-xl">
          <h2 className="text-4xl font-extrabold text-indigo-800 drop-shadow">
            Quiz Completed 🎉
          </h2>

          <p className="text-2xl mt-3 font-semibold">
            Score: {score} / {questionSet.length}
          </p>

          <Link
            to={`/category/${cat}/${sub}`}
            className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform"
          >
            🔙 Back to {sub.toUpperCase()}
          </Link>
        </div>
      </div>
    );

  // ⭐ Quiz Active Page UI
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 p-6">

      {/* Glass frame */}
      {/* <div className="w-[95%] max-w-3xl backdrop-blur-2xl bg-white/40 rounded-3xl shadow-2xl border border-white/30 p-6 relative"> */}

        {/* Back Button */}
        {/* <Link
          to={`/category/${cat}/${sub}`}
          className="absolute left-4 top-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow hover:bg-gray-900 hover:scale-105 transition-transform"
        >
          ← Back
        </Link> */}

        <QuestionCard
          questionData={questionSet[current]}
          questionNumber={current + 1}
          totalQuestions={questionSet.length}
          onAnswer={handleAnswer}
        />
      {/* </div> */}
    </div>
  );
}





















