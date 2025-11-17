import { Link } from "react-router-dom";

const categories = ["java", "sql", "javascript", "html", "css"];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white px-4">
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-lg animate-fadeIn">
        📚 Select a Subject
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-3xl animate-fadeIn">
        
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className="
              bg-white 
              text-indigo-700 
              py-3 
              rounded-xl 
              text-center 
              font-semibold 
              shadow-lg 
              hover:scale-105 
              hover:bg-indigo-50 
              transition 
              duration-300 
              ease-in-out
            "
          >
            {cat.toUpperCase()}
          </Link>
        ))}

      </div>
    </div>
  );
}





