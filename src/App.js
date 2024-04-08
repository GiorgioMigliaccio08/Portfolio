import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Banner />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
