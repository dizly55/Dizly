// src/Components/Tools.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Tools() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Background Remover",
      desc: "Remove image backgrounds instantly for free.",
      path: "/tools/bg-remover",
      color: "from-pink-400 to-red-400",
      icon: "🪄",
    },
    // future tools add karna ho toh yahan likhna hai 👇
    // {
    //   title: "AI Image Generator",
    //   desc: "Generate stunning images with AI.",
    //   path: "/tools/ai-image",
    //   color: "from-blue-400 to-indigo-500",
    //   icon: "🎨",
    // },
  ];

  return (
    <div className="bg-dizly-bluebg min-h-screen flex flex-col items-center pt-28 pb-16 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dizly-teal to-dizly-coral text-center">
        Explore Our Tools
      </h1>
      <p className="mt-3 text-base md:text-lg text-dizly-text opacity-80 text-center max-w-2xl">
        Simple, free and creative tools to make your digital journey easier 
      </p>

      {/* Tools Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => navigate(tool.path)}
            className="cursor-pointer bg-white p-8 rounded-3xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-center border border-gray-100"
          >
            {/* Icon in gradient circle */}
            <div
              className={`mx-auto w-20 h-20 flex items-center justify-center rounded-full text-4xl text-white bg-gradient-to-r ${tool.color}`}
            >
              {tool.icon}
            </div>

            {/* Title */}
            <h2 className="mt-6 text-2xl font-bold text-dizly-teal">
              {tool.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm">{tool.desc}</p>

            {/* Explore Button */}
            <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-dizly-teal to-dizly-coral text-white font-semibold shadow-md hover:shadow-xl transition duration-300">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
