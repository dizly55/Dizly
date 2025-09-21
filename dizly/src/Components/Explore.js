// src/Components/Explore.js
import React, { useState } from "react";
import Footer from "../Components/Footer"; 

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("videos");

  const categories = [
    { id: "novels", title: "Novels", desc: "Read or download amazing novels." },
    { id: "graphics", title: "Graphics", desc: "High-quality design graphics." },
    { id: "images", title: "Stock Images", desc: "Free stock images." },
    { id: "videos", title: "Videos", desc: "Short & long form digital videos." },
    { id: "infographics", title: "Infographics", desc: "Data-driven visual content." },
    { id: "ebooks", title: "E-books", desc: "Educational & self-help books." },
    { id: "templates", title: "Templates", desc: "Ready-to-use design & presentation templates." },
    { id: "animations", title: "Animations", desc: "Fun and professional animated graphics." },
    { id: "courses", title: "Courses", desc: "Learn new skills through video tutorials." },
  ];

  // ✅ sab empty rakha hai
  const sampleContent = {
    novels: [],
    graphics: [],
    images: [],
    videos: [],
    infographics: [],
    ebooks: [],
    templates: [],
    animations: [],
    courses: [],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow mt-24 px-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-lg shadow-md font-medium transition ${
                activeCategory === cat.id
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-700 hover:bg-pink-400 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {categories.map(
            (cat) =>
              activeCategory === cat.id && (
                <div key={cat.id}>
                  <h2 className="text-2xl font-bold mb-2">{cat.title}</h2>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>

                  {/* ✅ Ab sirf No content available yet. show hoga */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sampleContent[cat.id]?.length > 0 ? (
                      sampleContent[cat.id].map((item, i) => (
                        <div
                          key={i}
                          className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-pink-50"
                        >
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                          <button className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600">
                            {item.file}
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No content available yet.</p>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
