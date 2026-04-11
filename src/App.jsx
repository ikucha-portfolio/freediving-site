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

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f5f3ef] min-h-screen">

      <ScrollToTop />
      <Header />

      {/* ★ここ追加（超重要） */}
      <main className="pt-20 md:pt-24">
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

export default App;