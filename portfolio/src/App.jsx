// Styles
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Education />
                <Project />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
