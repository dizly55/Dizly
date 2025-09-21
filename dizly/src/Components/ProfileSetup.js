// src/components/ProfileSetup.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ProfileSetup() {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [categories, setCategories] = useState([]);
  const [website, setWebsite] = useState("");
  const [works, setWorks] = useState([{ title: "", link: "" }]);
  const [socials, setSocials] = useState({
    youtube: "",
    tiktok: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });
  const [visibility, setVisibility] = useState("public");
  const [notifications, setNotifications] = useState(true);

  const categoryOptions = [
    "Novels",
    "Graphics",
    "Stock Images",
    "Videos",
    "Infographics",
    "E-books",
    "Templates",
    "Animations",
    "Courses",
  ];

  // ✅ Load profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const data = JSON.parse(saved);
      setProfilePic(data.profilePic || null);
      setName(data.name || "");
      setUsername(data.username || "");
      setBio(data.bio || "");
      setRole(data.role || "");
      setCategories(data.categories || []);
      setWebsite(data.website || "");
      setWorks(
        data.works && data.works.length > 0 ? data.works : [{ title: "", link: "" }]
      );
      setSocials({
        youtube: data.socials?.youtube || "",
        tiktok: data.socials?.tiktok || "",
        twitter: data.socials?.twitter || "",
        facebook: data.socials?.facebook || "",
        linkedin: data.socials?.linkedin || "",
        instagram: data.socials?.instagram || "",
      });
      setVisibility(data.visibility || "public");
      setNotifications(data.notifications ?? true);
    }
  }, []);

  // ✅ Handle profile picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleCategory = (cat) => {
    if (categories.includes(cat)) {
      setCategories(categories.filter((c) => c !== cat));
    } else {
      setCategories([...categories, cat]);
    }
  };

  const handleWorkChange = (index, field, value) => {
    const updated = [...works];
    updated[index][field] = value;
    setWorks(updated);
  };

  const addWorkField = () => {
    setWorks([...works, { title: "", link: "" }]);
  };

  // ✅ Save profile in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      profilePic,
      name,
      username,
      bio,
      role,
      categories,
      website,
      works,
      socials,
      visibility,
      notifications,
    };
    localStorage.setItem("userProfile", JSON.stringify(profileData));

    // ✅ Mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect to dashboard (not edit profile page)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7F7] to-[#FDFDFD] flex justify-center p-6">
      <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-3xl mt-20 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-dizly-teal drop-shadow-md mb-8">
          Setup Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <p className="mb-3 font-semibold text-gray-700">Profile Picture</p>
            <label className="cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-dizly-teal flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Upload</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-xl bg-white/50"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-xl bg-white/50"
              required
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Bio <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Write a short bio about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 border rounded-xl bg-white/50"
              rows="3"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Role</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setRole("creator")}
                className={`px-4 py-2 rounded-xl border ${
                  role === "creator"
                    ? "bg-dizly-teal text-white"
                    : "bg-white/60 text-dizly-teal"
                }`}
              >
                Creator
              </button>
              <button
                type="button"
                onClick={() => setRole("viewer")}
                className={`px-4 py-2 rounded-xl border ${
                  role === "viewer"
                    ? "bg-dizly-teal text-white"
                    : "bg-white/60 text-dizly-teal"
                }`}
              >
                Viewer
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Select Categories
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categoryOptions.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={categories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Website</label>
            <input
              type="url"
              placeholder="https://example.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full p-3 border rounded-xl bg-white/50"
            />
          </div>

          {/* Works */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Works</label>
            {works.map((work, index) => (
              <div key={index} className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Work Title"
                  value={work.title}
                  onChange={(e) =>
                    handleWorkChange(index, "title", e.target.value)
                  }
                  className="w-1/3 p-3 border rounded-xl bg-white/50"
                />
                <input
                  type="url"
                  placeholder="Work Link"
                  value={work.link}
                  onChange={(e) =>
                    handleWorkChange(index, "link", e.target.value)
                  }
                  className="w-2/3 p-3 border rounded-xl bg-white/50"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addWorkField}
              className="px-4 py-2 bg-dizly-teal text-white rounded-xl hover:bg-teal-600"
            >
              + Add Work
            </button>
          </div>

          {/* Social Media Links */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Social Media Links
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <FaYoutube className="text-red-500" />
                <input
                  type="url"
                  placeholder="YouTube"
                  value={socials.youtube}
                  onChange={(e) =>
                    setSocials({ ...socials, youtube: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaTiktok className="text-black" />
                <input
                  type="url"
                  placeholder="TikTok"
                  value={socials.tiktok}
                  onChange={(e) =>
                    setSocials({ ...socials, tiktok: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaTwitter className="text-sky-500" />
                <input
                  type="url"
                  placeholder="Twitter"
                  value={socials.twitter}
                  onChange={(e) =>
                    setSocials({ ...socials, twitter: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaFacebook className="text-blue-600" />
                <input
                  type="url"
                  placeholder="Facebook"
                  value={socials.facebook}
                  onChange={(e) =>
                    setSocials({ ...socials, facebook: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-blue-700" />
                <input
                  type="url"
                  placeholder="LinkedIn"
                  value={socials.linkedin}
                  onChange={(e) =>
                    setSocials({ ...socials, linkedin: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram className="text-pink-500" />
                <input
                  type="url"
                  placeholder="Instagram"
                  value={socials.instagram}
                  onChange={(e) =>
                    setSocials({ ...socials, instagram: e.target.value })
                  }
                  className="p-3 border rounded-xl bg-white/50 flex-1"
                />
              </div>
            </div>
          </div>

          {/* Save */}
          <button
            type="submit"
            className="w-full text-white py-3 rounded-xl transition"
            style={{ backgroundColor: "#014D4D", transition: "all 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#026666")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#014D4D")
            }
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
