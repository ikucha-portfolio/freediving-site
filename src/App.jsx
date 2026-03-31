import Header from "./components/Header";
import Courses from "./pages/Courses";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
  <Route path="/course" element={<Courses />} />
</Routes>
    </>
  );
}

export default App;