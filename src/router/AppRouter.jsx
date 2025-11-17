import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import QuizPage from "../pages/QuizPage";

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:cat" element={<CategoryPage />} />
        <Route path="/category/:cat/:sub" element={<SubCategoryPage />} />
        <Route path="/quiz/:cat/:sub" element={<QuizPage />} />
      </Routes>
   
  );
}
