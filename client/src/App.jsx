import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
