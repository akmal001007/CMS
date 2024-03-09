import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Login />
    </div>
  );
}

export default App;
