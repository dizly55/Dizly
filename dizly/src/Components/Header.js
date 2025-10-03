import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-dizly-teal text-white h-20 shadow-lg z-50">
      <div className="grid grid-cols-3 items-center h-full px-10">

        {/* Logo - Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            <Link to="/">Dizly</Link>
          </h1>
        </div>

        {/* Navbar - Center */}
        <nav className="flex justify-center">
          <ul className="flex gap-6 md:gap-10 text-lg font-semibold whitespace-nowrap">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-dizly-yellow">
              <Link to="/">Home</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-dizly-yellow transition-all duration-300 hover:w-full rounded"></span>
            </li>
            <li className="relative cursor-pointer transition-all duration-300 hover:text-dizly-yellow">
              <Link to="/blog">Blog</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-dizly-yellow transition-all duration-300 hover:w-full rounded"></span>
            </li>
            <li className="relative cursor-pointer transition-all duration-300 hover:text-dizly-yellow">
              <Link to="/about">About</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-dizly-yellow transition-all duration-300 hover:w-full rounded"></span>
            </li>
            <li className="relative cursor-pointer transition-all duration-300 hover:text-dizly-yellow">
              <Link to="/contact-us">Contact Us</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-dizly-yellow transition-all duration-300 hover:w-full rounded"></span>
            </li>
            <li className="relative cursor-pointer transition-all duration-300 hover:text-dizly-yellow">
              <Link to="/affiliate">Become an Affiliate</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-dizly-yellow transition-all duration-300 hover:w-full rounded"></span>
            </li>
          </ul>
        </nav>

        {/* Signin / Signup Buttons - Right */}
        <div className="flex justify-end gap-4">
          <Link to="/signin">
            <button className="px-6 py-2 border-2 border-white rounded-full font-bold shadow-md hover:shadow-xl hover:bg-white hover:text-dizly-teal transform transition-all duration-300 hover:-translate-y-1">
              Signin
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-[#014D4D] text-white rounded-full font-bold shadow-md hover:shadow-xl hover:bg-white hover:text-[#014D4D] transform transition-all duration-300 hover:-translate-y-1">
              Signup
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}
