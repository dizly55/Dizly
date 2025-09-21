import React, { useEffect, useState } from "react";
import {
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEdit,
  FaUpload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard"); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userProfile"));
    setUserData(savedData);
  }, []);

  if (!userData) {
    return <p className="p-4">Loading...</p>;
  }

  const {
    name,
    username,
    bio,
    role,
    categories,
    works = [],
    socialLinks = {},
    profilePic,
    followers = 0,
    following = 0,
  } = userData;

  const validWorks = Array.isArray(works)
    ? works.filter(
        (w) => w && w.url && (w.type === "image" || w.type === "video")
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-dizly-bluebg mt-20">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-6 text-dizly-coral">Dizly</h1>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveSection("dashboard")}
              className={`block w-full text-left ${
                activeSection === "dashboard"
                  ? "text-dizly-coral font-semibold"
                  : "text-dizly-text"
              } hover:text-dizly-coral`}
            >
              🏠 Dashboard
            </button>
            <button
              onClick={() => setActiveSection("works")}
              className={`block w-full text-left ${
                activeSection === "works"
                  ? "text-dizly-coral font-semibold"
                  : "text-dizly-text"
              } hover:text-dizly-coral`}
            >
              🎨 My Works
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* ✅ Dashboard Section */}
          {activeSection === "dashboard" && (
            <>
              <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="flex items-center">
                  {/* Profile Picture */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    {profilePic ? (
                      <img
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-dizly-teal flex items-center justify-center text-white text-3xl font-bold">
                        {name ? name.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p className="text-gray-500">@{username}</p>
                    <p className="text-gray-700">{bio}</p>
                    {categories?.length > 0 && (
                      <p className="text-sm text-gray-600 mt-1">
                        {categories.join(", ")}
                      </p>
                    )}

                    {/* Followers / Following / Posts */}
                    <div className="flex gap-8 mt-4">
                      <div className="text-center">
                        <p className="text-lg font-bold">{followers}</p>
                        <p className="text-gray-500 text-sm">Followers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{following}</p>
                        <p className="text-gray-500 text-sm">Following</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">
                          {validWorks.length}{" "}
                          {validWorks.length === 1 ? "Post" : "Posts"}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                      {/* Edit Profile */}
                      <button
                        onClick={() => navigate("/edit-profile")}
                        className="inline-flex items-center bg-dizly-coral text-white px-4 py-1 rounded-lg shadow hover:bg-[#e05555] transition"
                      >
                        <FaEdit className="mr-2" /> Edit Profile
                      </button>

                      {/* Upload */}
                      <button
                        onClick={() => navigate("/upload")}
                        className="inline-flex items-center bg-dizly-teal text-white px-4 py-1 rounded-lg shadow hover:bg-[#009e8c] transition"
                      >
                        <FaUpload className="mr-2" /> Upload
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Posts Section */}
              <section>
                <h3 className="text-xl font-bold mb-4">Posts</h3>
                {validWorks.length === 0 ? (
                  <p className="text-gray-500 text-center text-2xl font-bold">
                    No Posts Yet
                  </p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {validWorks.map((work, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden"
                      >
                        {work.type === "image" && (
                          <img
                            src={work.url}
                            alt={work.title}
                            className="w-full h-48 object-cover"
                          />
                        )}
                        {work.type === "video" && (
                          <video
                            controls
                            className="w-full h-48 object-cover"
                            src={work.url}
                          />
                        )}
                        <div className="p-3">
                          <h4 className="font-semibold">{work.title}</h4>
                          <p className="text-gray-600 text-sm">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

          {/* ✅ My Works Section */}
          {activeSection === "works" && (
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">My Works</h2>
              {validWorks.length === 0 ? (
                <p className="text-gray-500">You have no works uploaded yet.</p>
              ) : (
                <ul className="space-y-2">
                  {validWorks.map((work, i) => (
                    <li key={i} className="p-2 border rounded">
                      {work.title} ({work.type})
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* ✅ Social Links */}
          {activeSection === "dashboard" && role === "Creator" && (
            <section className="mt-8">
              <h3 className="text-lg font-bold mb-2">Social Links</h3>
              <div className="flex gap-4">
                {socialLinks.youtube && (
                  <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
                    <FaYoutube className="text-red-600 text-2xl hover:scale-110 transition" />
                  </a>
                )}
                {socialLinks.tiktok && (
                  <a href={socialLinks.tiktok} target="_blank" rel="noreferrer">
                    <FaTiktok className="text-black text-2xl hover:scale-110 transition" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="text-blue-500 text-2xl hover:scale-110 transition" />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition" />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition" />
                  </a>
                )}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* ✅ Footer at bottom */}
      <Footer />
    </div>
  );
}
