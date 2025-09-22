import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
// import { Eye, EyeOff } from "lucide-react"; // icons

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div onClick={window.scroll(0,0)} className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
      <div className="w-[90%] md:w-[400px] bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Form */}
        {isLogin ? (
          <form className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            {/* Password with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Register
            </button>
          </form>
        )}

        {/* Switch Link */}
        <div className="text-center text-sm text-gray-500 mt-5">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-pink-600 hover:underline"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-pink-600 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
