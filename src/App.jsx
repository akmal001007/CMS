import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default App;
