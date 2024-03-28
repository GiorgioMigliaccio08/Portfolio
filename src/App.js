import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Banner />
        <AboutMe />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
