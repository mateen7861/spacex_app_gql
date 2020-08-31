import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import LaunchDetails from "./pages/LaunchDetails";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:id" element={<LaunchDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
