import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import ContactUs from "./ContactUs";
import Signin from "./Signin";   // 👈 Signin page
import SignUp from "./SignUp";   // 👈 SignUp page (ye missing tha)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/signin" element={<Signin />} />   {/* 👈 Signin route */}
        <Route path="/signUp" element={<SignUp />} />   {/* 👈 SignUp route */}
      </Routes>
    </Router>
  );
}

export default App;
