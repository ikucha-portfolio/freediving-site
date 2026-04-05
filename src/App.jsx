import Header from "./components/Header";
import Courses from "./pages/Courses";
import Home from "./pages/Home"; // ← 追加
import About from "./pages/About";
import Price from "./pages/Price";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;