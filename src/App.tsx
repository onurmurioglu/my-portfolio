import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/components.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
