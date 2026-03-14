// src/App.js
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import AiMachineLearningPage from "./pages/AiMachineLearningPage";
import WebDevPage from "./pages/WebDevPage";
import CyberSecurityPage from "./pages/CyberSecurityPage";
import UIUXPage from "./pages/UIUXPage";
import GraphicDesigning from "./pages/GraphicDesigning";
import DataScience from "./pages/DataScience";
import Enroll from "./pages/Enroll";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  // 🔹 Reveal animation logic
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />

        {/* Individual Course Pages */}
        <Route
          path="/courses/ai-machine-learning"
          element={<AiMachineLearningPage />}
        />
        <Route path="/courses/web-development" element={<WebDevPage />} />
        <Route path="/courses/cybersecurity" element={<CyberSecurityPage />} />
        <Route path="/courses/ui-ux-design" element={<UIUXPage />} />
        <Route
          path="/courses/graphic-designing"
          element={<GraphicDesigning />}
        />
        <Route path="/courses/data-science" element={<DataScience />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>

      {/* WhatsApp Float */}
      <a
        href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in your services."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <Footer />
    </HashRouter>
  );
}

export default App;
