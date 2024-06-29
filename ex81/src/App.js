import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>

          <li>
            <Link to="/about">about</Link>
          </li> 

          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};


export default App;
