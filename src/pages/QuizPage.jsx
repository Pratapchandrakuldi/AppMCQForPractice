


import { useParams, Link } from "react-router-dom";
import { questionsMap } from "../data/questionsMap";
import QuestionCard from "../components/QuestionCard";
import { useState, useMemo } from "react";

export default function QuizPage() {
  const { cat, sub } = useParams();
  const rawQuestionSet = questionsMap?.[cat]?.[sub] ?? [];

  // Guard: no questions
  if (!rawQuestionSet || rawQuestionSet.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center p-6 bg-gray-100">
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">No questions found</h2>
          <p className="mb-6">This quiz has no questions yet.</p>
          <Link to={`/category/${cat}`} className="px-4 py-2 bg-indigo-600 text-white rounded">
            ← Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  // Optional: shuffle question order once when component mounts
  // const [questions] = useState(() => [...rawQuestionSet].sort(() => Math.random() - 0.5));
  // If you don't want randomized question order, just use:
  const [questions] = useState(() => rawQuestionSet);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Shuffle options once per question using useMemo and current index as dependency
  const currentQuestionWithShuffledOptions = useMemo(() => {
    const q = questions[current];
    // simple Fisher-Yates shuffle to avoid sort() bias
    const options = [...(q.options || [])];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    // return a new object so QuestionCard sees a new questionData when question changes
    return { ...q, options };
  }, [questions, current]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((s) => s + 1);

    // move next after short delay
    setTimeout(() => {
      if (current + 1 < questions.length) setCurrent((c) => c + 1);
      else setDone(true);
    }, 700);
  };

  // Completion UI
  if (done) {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-300 via-indigo-200 to-blue-400 p-6">
        <div className="backdrop-blur-xl bg-white/40 p-10 rounded-3xl shadow-2xl border border-white/30 text-center w-[90%] max-w-xl">
          <h2 className="text-4xl font-extrabold text-indigo-800 drop-shadow">Quiz Completed 🎉</h2>
          <p className="text-2xl mt-3 font-semibold">Score: {score} / {questions.length}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to={`/category/${cat}/${sub}`} className="px-6 py-2 bg-indigo-600 text-white rounded-xl">🔁 Retry</Link>
            <Link to={`/category/${cat}/${sub}`} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl">← Back</Link>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz UI
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 p-6 relative">
      {/* <div className="w-[95%] max-w-3xl backdrop-blur-2xl bg-white/40 rounded-3xl shadow-2xl border border-white/30 p-6 relative"> */}
        <Link
          to={`/category/${cat}/${sub}`}
          className="absolute left-4 top-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow hover:bg-gray-900"
        >
          ← Back
        </Link>

        <QuestionCard
          // pass the pre-shuffled question object (answer remains the same string)
          questionData={currentQuestionWithShuffledOptions}
          questionNumber={current + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      {/* </div> */}
    </div>
  );
}














