// src/Components/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import ContactUs from "./ContactUs";
import Signin from "./Signin";
import SignUp from "./SignUp";
import ProfileSetup from "./ProfileSetup";
import CongratsScreen from "./CongratsScreen";
import Dashboard from "./Dashboard";
import EditProfile from "./EditProfile";
import Upload from "./Upload";
import Explore from "./Explore";
import Tools from "./Tools"; 
import BgRemover from "./BgRemover"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Profile flow */}
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/congrats" element={<CongratsScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        {/* Upload & Explore */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/explore" element={<Explore />} />

        {/* Tools */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/bg-remover" element={<BgRemover />} />
      </Routes>
    </Router>
  );
}

export default App;
