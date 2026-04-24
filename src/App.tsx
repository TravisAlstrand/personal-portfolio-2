import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-background h-screen"></div>
      <div className="bg-background h-screen"></div>
    </>
  );
}

export default App;
