import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Content */}
      <div className="flex-grow pt-28 px-6 max-w-5xl mx-auto">
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-pink-600">Dizly</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Dizly — a free and open platform where users can explore,
            read, and download digital content, while creators can upload their
            own work and start earning.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
            🚀 What We Offer
          </h2>
          <p className="text-gray-700 text-center mb-10">
            At Dizly, our mission is to empower both learners and creators.
            Here’s what you’ll find on our platform:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">📚 Novels</h3>
              <p className="text-gray-600">Read or download amazing novels.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">🎨 Graphics</h3>
              <p className="text-gray-600">High-quality design graphics.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">🖼 Stock Images</h3>
              <p className="text-gray-600">Free stock images for everyone.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">🎥 Videos</h3>
              <p className="text-gray-600">Short & long form digital videos.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">📊 Infographics</h3>
              <p className="text-gray-600">Data-driven visual content.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">📖 E-books</h3>
              <p className="text-gray-600">Educational & self-help books.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">📑 Templates</h3>
              <p className="text-gray-600">
                Ready-to-use design & presentation templates.
              </p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">✨ Animations</h3>
              <p className="text-gray-600">
                Fun and professional animated graphics.
              </p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm md:col-span-2">
              <h3 className="font-semibold text-pink-500 text-lg">🎓 Courses</h3>
              <p className="text-gray-600">
                Learn new skills through video tutorials.
              </p>
            </div>
          </div>
        </div>

        {/* Free Tools Section */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
            🛠 Premium-Level Free Tools
          </h2>
          <p className="text-gray-700 text-center mb-10">
            Dizly also provides <span className="font-semibold">free tools</span> 
            that work like premium software — helping you create faster and smarter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">🖼 Background Remover</h3>
              <p className="text-gray-600">Remove image backgrounds instantly — free forever.</p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">🎨 Color Picker</h3>
              <p className="text-gray-600">Find and copy the perfect colors for your designs.</p>
            </div>
            
            <div className="bg-gray-50 border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-pink-500 text-lg">📐 Design Utilities</h3>
              <p className="text-gray-600">Helpful design tools to speed up your workflow.</p>
            </div>
          </div>
        </div>

        {/* Why Dizly Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-50 to-pink-100 p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
            🎯 Why Dizly?
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            The best part? All of these categories are free to access for users,
            while creators can upload their content and start earning.{" "}
            <span className="font-semibold text-pink-600">
              Dizly is more than just a platform
            </span>{" "}
            — it’s a community where creativity meets opportunity.
          </p>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
