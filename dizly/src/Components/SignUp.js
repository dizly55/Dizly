import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-dizly-teal mb-6">
          Create an Account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dizly-teal"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dizly-teal"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dizly-teal"
          />

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full bg-[#014D4D] text-white font-bold py-2 rounded-xl border border-[#014D4D] hover:bg-white hover:text-[#014D4D] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl hover:bg-gray-100 transition duration-300"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-dizly-teal font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
