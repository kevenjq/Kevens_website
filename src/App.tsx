import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Gem from "./pages/Gem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/educationme " element={<StudyPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/BlogPost" element={<BlogPage />} />
        <Route path="/hidden@goofy->you" element={<Gem />} />
      </Routes>
    </Router>
  );
}

export default App;
