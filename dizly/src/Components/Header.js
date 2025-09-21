import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setUser(JSON.parse(saved));
    }

    const handleStorageChange = () => {
      const updated = localStorage.getItem("userProfile");
      setUser(updated ? JSON.parse(updated) : null);
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-dizly-teal text-white h-20 shadow-lg z-50">
      <div className="grid grid-cols-3 items-center h-full px-10">
        {/* Logo - Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            <Link to="/">Dizly</Link>
          </h1>
        </div>

        {/* Navbar - Center */}
        <nav className="flex justify-center">
          <ul className="flex gap-6 md:gap-10 text-lg font-semibold whitespace-nowrap">
            <li>
              <Link to="/" className="hover:text-dizly-yellow">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-dizly-yellow">Blog</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-dizly-yellow">About</Link>
            </li>
            <li>
              <Link to="/tools" className="hover:text-dizly-yellow">Tools</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-dizly-yellow">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex justify-end gap-4 relative">
          {!user ? (
            <>
              <Link to="/signin">
                <button className="px-6 py-2 border-2 border-white rounded-full font-bold shadow-md hover:shadow-xl hover:bg-white hover:text-dizly-teal transition">
                  Signin
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-2 bg-[#014D4D] text-white rounded-full font-bold shadow-md hover:shadow-xl hover:bg-white hover:text-[#014D4D] transition">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-dizly-yellow shadow-md"
              >
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-bold text-dizly-teal text-lg">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-xl shadow-lg py-2 w-44 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-pink-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/edit-profile"
                    className="block px-4 py-2 hover:bg-pink-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
