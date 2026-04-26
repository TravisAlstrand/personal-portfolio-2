import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-sketch">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
