// src/pages/Upload.js
import React, { useState } from "react";
import Footer from "../Components/Footer"; // ✅ apna Footer import karo (path adjust karlena)

export default function Upload() {
  const [activeCategory, setActiveCategory] = useState("videos");
  const [status, setStatus] = useState("");

  // ✅ Categories list
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

  // ✅ File formats for each category
  const formats = {
    novels: ["PDF", "EPUB", "DOCX"],
    graphics: ["PSD", "AI", "SVG", "PNG", "JPG"],
    images: ["PNG", "JPG", "JPEG", "WEBP"],
    videos: ["MP4", "MOV", "AVI", "MKV"],
    infographics: ["PNG", "JPG", "SVG", "PDF"],
    ebooks: ["PDF", "EPUB", "MOBI"],
    templates: ["PPTX", "DOCX", "XLSX", "PSD", "AI", "FIG"],
    animations: ["MP4", "GIF", "MOV"],
    courses: ["MP4", "ZIP", "PDF"],
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setStatus(`✅ ${activeCategory} uploaded successfully!`);
    setTimeout(() => setStatus(""), 3000);
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

                  {/* Upload Form */}
                  <form onSubmit={handleUpload} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="w-full border rounded-lg px-4 py-2"
                      required
                    />
                    <textarea
                      placeholder="Description"
                      rows="3"
                      className="w-full border rounded-lg px-4 py-2"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Keywords (comma separated)"
                      className="w-full border rounded-lg px-4 py-2"
                      required
                    />

                    {/* ✅ File Type Dropdown */}
                    <select
                      className="w-full border rounded-lg px-4 py-2"
                      required
                    >
                      <option value="">-- Select File Format --</option>
                      {formats[activeCategory].map((fmt) => (
                        <option key={fmt} value={fmt}>
                          {fmt}
                        </option>
                      ))}
                    </select>

                    {/* File Upload */}
                    <div className="flex items-center gap-3">
                      <input type="file" className="w-full" required />
                      <button
                        type="button"
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        📷 Add Thumbnail
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700"
                    >
                      Upload
                    </button>
                  </form>

                  {status && (
                    <p className="mt-4 text-green-600 font-semibold">{status}</p>
                  )}
                </div>
              )
          )}
        </div>
      </div>

      {/* ✅ Footer fixed at bottom */}
      <Footer />
    </div>
  );
}
