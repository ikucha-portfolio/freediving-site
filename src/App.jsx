import Header from "./components/Header";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact"; // ←追加
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} /> {/* 修正 */}
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} /> {/* 追加 */}
      </Routes>
    </div>
  );
}

export default App;