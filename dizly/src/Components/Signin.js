// src/Components/Signin.js
import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google logo import

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Email/Password Signin
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // sirf login flag lagao
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password!");
    }
  };

  // ✅ Google Signin
  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Google Sign-in failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-dizly-teal mb-6">
          Sign In
        </h2>

        {error && (
          <div className="bg-red-500 text-white text-center py-2 rounded mb-4">
            {error}
          </div>
        )}

        {/* Email/Password Form */}
        <form onSubmit={handleSignin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-xl"
          />
          <button
            type="submit"
            className="w-full bg-dizly-teal text-white py-3 rounded-xl font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign-in Button */}
        <button
          onClick={handleGoogleSignin}
          className="w-full mt-4 flex items-center justify-center gap-2 border py-3 rounded-xl hover:bg-gray-50"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
