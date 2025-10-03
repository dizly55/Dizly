// src/Components/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const [active, setActive] = useState("creator");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const items = [
    { title: "Novels", desc: "Read or download amazing novels." },
    { title: "Graphics", desc: "High-quality design graphics." },
    { title: "Stock Images", desc: "Free stock images." },
    { title: "Videos", desc: "Short & long form digital videos." },
    { title: "Infographics", desc: "Data-driven visual content." },
    { title: "E-books", desc: "Educational & self-help books." },
    { title: "Templates", desc: "Ready-to-use design & presentation templates." },
    { title: "Animations", desc: "Fun and professional animated graphics." },
    { title: "Courses", desc: "Learn new skills through video tutorials." },
  ];

  return (
    <div className="bg-dizly-bluebg min-h-screen flex flex-col">
      {/* Hero */}
      <div className="pt-28 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-dizly-teal">
          Welcome to{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-dizly-teal to-dizly-coral">
            Dizly
          </span>
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-dizly-coral tracking-wide">
          Discover. Create. Grow.
        </h2>

        <p className="mt-3 text-lg md:text-xl text-dizly-text opacity-80 max-w-2xl mx-auto leading-relaxed">
          Dizly — Where Digital Imagination Lives and{" "}
          <span className="font-semibold text-dizly-teal">
            Vibes Meet Creativity
          </span>
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {/* Creator Button */}
          <button
            onClick={() => {
              setActive("creator");
              navigate("/signup?role=creator");
            }}
            className={`px-6 py-3 font-semibold rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              active === "creator"
                ? "bg-dizly-teal text-white"
                : "bg-white text-dizly-teal hover:bg-dizly-teal hover:text-white"
            }`}
          >
            Get Started as a Creator
          </button>

          {/* Explore Tools Button */}
          <button
            onClick={() => navigate("/tools")}
            className="px-6 py-3 font-semibold rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white text-dizly-teal hover:bg-dizly-teal hover:text-white"
          >
            Explore Tools
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="mt-20 text-center px-4 flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold text-dizly-teal mb-2">
          All Your Digital Favorites
        </h2>
        <p className="text-dizly-text opacity-80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore a wide variety of digital products curated just for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`p-6 rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:scale-105 ${
                selected === index
                  ? "border-2 border-dizly-teal shadow-[0_0_20px_rgba(0,200,150,0.5)] bg-dizly-teal"
                  : "hover:shadow-2xl bg-dizly-teal"
              }`}
            >
              <h3 className="font-bold text-xl mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;  