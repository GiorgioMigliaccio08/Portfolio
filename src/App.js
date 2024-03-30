import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Project";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Banner />
        <AboutMe />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
