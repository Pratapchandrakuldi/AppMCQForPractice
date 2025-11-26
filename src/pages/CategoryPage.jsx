import { Link, useParams, useNavigate } from "react-router-dom";

const subCategories = {
  java: ["jspOops","oops", "dsa"],
  sql: ["basics","dql", "dml"],
  javascript: ["basics", "dom"],
  html: ["basics","attributes","tags"],
  css: ["basics","flex_grid"],
};

export default function CategoryPage() {
  const { cat } = useParams();
  const navigate = useNavigate();

  const list = subCategories[cat];

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      
      {/* Glass card container */}
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-lg border border-white/30">
        
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-white/30 text-indigo-700 font-semibold rounded-xl shadow hover:bg-white/40 transition"
        >
          ⬅ Back
        </button>

        <h2 className="text-3xl font-extrabold text-white drop-shadow mb-6 text-center">
          Select <span className="capitalize">{cat}</span> Topic
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {list.map((sub) => (
            <Link
              key={sub}
              to={`/category/${cat}/${sub}`}
              className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow hover:scale-105 hover:bg-indigo-50 transition-all text-center"
            >
              {sub.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


















