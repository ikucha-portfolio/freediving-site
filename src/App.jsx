import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Footer from "./components/layout/Footer";

import { Routes, Route, useLocation } from "react-router-dom"; // ←ここ追加

function App() {
  const location = useLocation();

  const isHeroPage =
    location.pathname === "/" ||
    location.pathname === "/about";

  return (
    <div className="bg-[#f5f3ef] min-h-screen">

      <ScrollToTop />
      <Header />

      <main className={isHeroPage ? "" : "pt-20 md:pt-24"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App; // ←これも忘れず