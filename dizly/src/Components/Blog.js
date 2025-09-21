import React from "react";
import Footer from "./Footer"; // ✅ Footer import

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Content */}
      <div className="flex-grow pt-28 px-6 max-w-5xl mx-auto">
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Introducing <span className="text-pink-600">Dizly</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A next-generation platform where creativity meets opportunity.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Published on September 13, 2025 · 6 min read
          </p>
        </div>

        {/* Blog Content */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-10 leading-relaxed text-lg text-gray-800">
          <p className="mb-6">
            Dizly is not just another platform—it’s a{" "}
            <span className="font-semibold">complete ecosystem</span> for
            creativity, innovation, and growth. Built with the vision of
            becoming the world’s most unique platform, Dizly empowers creators
            to share their digital work and start growing while users enjoy
            completely free access.
          </p>

          <p className="mb-6">
            At Dizly, you can explore a wide variety of content. From{" "}
            <strong>novels</strong> to <strong>graphics</strong>,{" "}
            <strong>stock images</strong>, <strong>videos</strong>,{" "}
            <strong>infographics</strong>, <strong>ebooks</strong>,{" "}
            <strong>templates</strong>, <strong>animations</strong>, and{" "}
            <strong>courses</strong> — everything is available in one single
            hub.
          </p>

          {/* Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10">
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

          {/* ✅ Tools Section */}
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-2xl shadow-md my-10">
            <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
              🚀 Premium-Level Tools — Completely Free
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Dizly also provides <span className="font-semibold">free tools</span> that are usually{" "}
              <span className="text-pink-600">paid on other platforms</span>.
              From AI-powered background removers to design editors, everything
              is <strong>100% free</strong> for our users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-pink-500">🪄 Background Remover</h3>
                <p className="text-gray-600">Remove image backgrounds instantly.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-pink-500">✍️ AI Content Generator</h3>
                <p className="text-gray-600">Write blogs, posts, and more using AI.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-pink-500">🎨 Design Studio</h3>
                <p className="text-gray-600">Create professional-level designs online.</p>
              </div>
            </div>
          </div>

          {/* Highlighted Section */}
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-xl my-8">
            <p className="italic text-pink-700 text-lg font-medium">
              “Dizly is both a free platform and a growth opportunity — a place
              where creativity turns into real progress.”
            </p>
          </div>

          <p className="mb-6">
            Users can freely access all these categories, while creators have
            the chance to grow by uploading their work.
          </p>

          <p className="mt-10 font-bold text-pink-600 text-2xl text-center">
            Dizly is more than a platform. It’s a movement to empower creators,
            learners, and dreamers — all in one place.
          </p>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
