import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage"; // dynamic course page
import Contact from "./pages/Contact";

import "./index.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />{" "}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
