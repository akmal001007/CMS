import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
