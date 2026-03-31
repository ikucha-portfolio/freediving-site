import Header from "./components/Header";
import Courses from "./pages/Courses";
import Home from "./pages/Home"; // ← 追加

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
　 <Route path="/" element={<Home />} />        {/* ← 追加 */}
  <Route path="/course" element={<Courses />} />
</Routes>
    </>
  );
}

export default App;