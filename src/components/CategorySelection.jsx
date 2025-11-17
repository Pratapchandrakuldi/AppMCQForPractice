import { Link, useParams } from "react-router-dom";

export default function SubCategoryPage() {
  const { cat, sub } = useParams();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100 text-center">
      <h2 className="text-3xl font-bold mb-4">
        {cat.toUpperCase()} → {sub.toUpperCase()}
      </h2>

      <Link
        to={`/quiz/${cat}/${sub}`}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
      >
        Start Quiz 🚀
      </Link>
    </div>
  );
}







