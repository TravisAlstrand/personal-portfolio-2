import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sketch">
      <Header />
      <Hero />
      <div className="bg-background h-screen"></div>
      <div className="bg-background h-screen"></div>
    </div>
  );
}

export default App;
