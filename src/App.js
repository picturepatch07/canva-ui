import "./App.css";
import Hero from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import TrySection from "./components/WantToTrySection/WantToTrySection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrySection />
    </div>
  );
}

export default App;
