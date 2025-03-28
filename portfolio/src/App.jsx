// Styles
import "./global.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  );
}

export default App;
