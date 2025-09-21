import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link import

export default function Footer() {
  return (
    <footer className="bg-dizly-bluebg text-dizly-text py-10 shadow-inner rounded-t-3xl mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        {/* Logo & Styled Description */}
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dizly-teal to-dizly-coral mb-2">
            Dizly
          </h1>
          <p className="text-dizly-text text-sm md:text-base italic tracking-wide leading-relaxed">
            Dizly is your go-to hub for creating, sharing, and discovering{" "}
            <span className="font-semibold text-dizly-teal">dope digital products</span>
            —where your creativity meets the vibe! ✨
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Explore More</h2>
          <ul>
            <li className="mb-1 hover:text-dizly-coral cursor-pointer transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-1 hover:text-dizly-coral cursor-pointer transition-colors">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="mb-1 hover:text-dizly-coral cursor-pointer transition-colors">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-1 hover:text-dizly-coral cursor-pointer transition-colors">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links & Stylish Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect with us</h2>
          <div className="flex gap-3 mb-4 text-dizly-teal text-lg">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              className="hover:text-dizly-coral transition-colors"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              className="hover:text-dizly-coral transition-colors"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              className="hover:text-dizly-coral transition-colors"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          {/* Stylish Newsletter Section */}
          <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-3">
            <h3 className="font-bold text-dizly-teal text-lg">Subscribe to our newsletter</h3>
            <p className="text-dizly-text text-sm">
              Get the latest digital products and updates straight to your inbox.
            </p>
            <div className="flex w-full mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dizly-teal"
              />
              <button
                className="bg-[#014D4D] text-white px-6 py-2 rounded-r-2xl hover:bg-dizly-teal transition-colors duration-300 font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-dizly-text">
        &copy; {new Date().getFullYear()} Dizly. All rights reserved.
      </div>
    </footer>
  );
}
