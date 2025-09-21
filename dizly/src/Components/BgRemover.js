import React, { useState } from "react";

// ✅ Backend API ka base URL
// Localhost pe run karte waqt ye hoga http://127.0.0.1:8000
// Deploy hone ke baad .env me REACT_APP_API_URL set kar dena
const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

export default function BgRemover() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // File upload handle
  const handleUpload = (e) => {
    setFiles(Array.from(e.target.files));
    setResults([]);
  };

  // Background remove request
  const handleRemoveBg = async () => {
    if (files.length === 0) return alert("Please upload image(s)");
    setLoading(true);
    const newResults = [];

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch(`${API_BASE}/remove-bg`, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(
            `BG remove failed: ${res.status} ${res.statusText} ${txt}`
          );
        }

        const blob = await res.blob();
        newResults.push({
          name: file.name,
          originalUrl: URL.createObjectURL(file),
          noBgUrl: URL.createObjectURL(blob),
        });
      } catch (err) {
        console.error("❌ Error:", err);
        alert(`Error removing BG for ${file.name}: ${err.message}`);
      }
    }

    setResults(newResults);
    setLoading(false);
  };

  return (
    <div className="pt-24 px-6 md:px-16 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#006666] tracking-tight">
        Remove background of any image for free
      </h1>

      {/* File Upload */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          className="block w-full md:w-96 text-sm text-gray-500
                     file:mr-4 file:py-3 file:px-6
                     file:rounded-full file:border-0
                     file:text-base file:font-semibold
                     file:bg-[#006666] file:text-white
                     hover:file:bg-teal-500
                     cursor-pointer transition"
        />

        {files.length > 0 && (
          <button
            onClick={handleRemoveBg}
            className={`px-12 py-3 rounded-full font-bold text-white text-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#006666] hover:bg-teal-500"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Remove Background"}
          </button>
        )}
      </div>

      {/* Results */}
      <div className="flex flex-col gap-12">
        {results.map((img) => (
          <div
            key={img.name}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl border border-gray-200"
          >
            {/* Original */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="font-semibold text-lg mb-3">Original</h2>
              <img
                src={img.originalUrl}
                alt={`Original ${img.name}`}
                className="max-h-64 object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Background Removed */}
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-lg mb-3">Background Removed</h2>
              <img
                src={img.noBgUrl}
                alt={`No BG ${img.name}`}
                className="max-h-64 object-contain rounded-xl shadow-md"
              />
              <a
                href={img.noBgUrl}
                download={img.name.replace(/\..+$/, "_no-bg.png")}
                className="mt-4 px-10 py-3 bg-[#006666] text-white font-bold rounded-full hover:bg-teal-500 transition text-lg"
              >
                Download HD
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
