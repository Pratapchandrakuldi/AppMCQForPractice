
import { Link, useParams } from "react-router-dom";

export default function SubCategoryPage() {
  const { cat, sub } = useParams();

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-green-300 via-emerald-200 to-green-400 p-6">

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/40 p-10 rounded-3xl shadow-2xl border border-white/30 text-center w-[90%] max-w-xl">

        <h2 className="text-4xl font-extrabold mb-6 text-green-800 drop-shadow">
          {cat.toUpperCase()} → {sub.toUpperCase()}
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-4">

          {/* Start Quiz */}
          <Link
            to={`/quiz/${cat}/${sub}`}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-200"
          >
            Start Quiz 🚀
          </Link>

          {/* Back to Topic List */}
          <Link
            to={`/category/${cat}`}
            className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform duration-200"
          >
            ← Back to Topics
          </Link>

          {/* Back to Subjects */}
          <Link
            to="/"
            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
          >
            ← Back to Subjects
          </Link>

        </div>
      </div>
    </div>
  );
}




















