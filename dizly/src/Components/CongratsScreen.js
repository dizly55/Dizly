// src/components/CongratsScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CongratsScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#E0F7F7] to-[#FDFDFD] p-6">
      <div className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-10 text-center max-w-md animate-fadeIn">
        <h2 className="text-4xl font-bold text-dizly-teal drop-shadow mb-4">
          🎉 Congratulations!
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Your profile has been successfully created.  
          You can now continue to your dashboard.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 rounded-xl bg-dizly-teal text-white font-semibold shadow-md hover:bg-teal-600 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
