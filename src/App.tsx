import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Gem from "./pages/Gem";
import Fourofour from "./pages/Fourofour";

import OverlayTransition from "./assets/overls.svg?react";

function App() {
  return (
    <>
      <div id="theme-svg-container">
        <OverlayTransition
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Posts" element={<BlogPage />} />

          <Route path="/hidden@goofy->you" element={<Gem />} />
          <Route path="/404" element={<Fourofour/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
