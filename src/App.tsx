import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="font-sketch">
      <Header />
      <Hero />
      <About />
      <div className="bg-background h-screen"></div>
    </div>
  );
}

export default App;
