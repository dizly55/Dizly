import React from "react";
import Footer from "./Footer"; // ✅ Footer import

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Content */}
      <div className="flex-grow pt-28 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Contact <span className="text-pink-600">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions, feedback, or collaboration ideas? We’d love to hear from you!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in touch</h2>
            <p className="text-gray-600 mb-4">
              You can reach us directly through email or connect with us on our social media platforms.
            </p>
            <p className="text-gray-800 font-medium">📧 Email:</p>
            <p className="text-pink-600 mb-4">support@dizly.com</p>
            <p className="text-gray-800 font-medium">🌐 Socials:</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-pink-600 hover:underline">
                Instagram
              </a>
              <a href="#" className="text-pink-600 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-pink-600 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-pink-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
