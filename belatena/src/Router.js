import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Main from './components/Main/Main'
// import About from "./Pages/About/About";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing;
