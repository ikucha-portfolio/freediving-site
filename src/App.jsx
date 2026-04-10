import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks"; // ←追加
import Footer from "./components/layout/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} /> {/* ←これ！ */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;