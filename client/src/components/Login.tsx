import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginModal = ({ onClose, onOpenSignUp, toast }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access login function from context

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        login(response.data.token); // Store the token in context
        onClose(); // Close modal on successful login
        toast.success("Login successful!");
      } else {
        toast.error(response.data.error || "Login failed.");
      }
    } catch (error) {
      console.log(error, 'error')
      toast.error(error.response.data.error || "An error occurred during login.");
    }
  };

  return (
    <div className="fixed inset-0 flex z-50 justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Guitar Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/Icons/loginEntryPointPost.webp"
            alt="Guitar Logo"
            className="h-12 w-12"
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-lg font-semibold mb-4">
          Help us become one of the safest places to buy and sell
        </h3>

        {/* Input Fields */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button onClick={handleClick} className="w-full bg-teal-900 text-white font-semibold rounded-md py-2 hover:bg-teal-800 transition">
          Sign In
        </button>

        {/* Sign-Up Link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer font-semibold"
            onClick={onOpenSignUp}
          >
            Sign Up
          </span>
        </p>

        {/* Privacy Message */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          All your personal details are safe with us. <br />
          If you continue, you are accepting{" "}
          <span className="text-blue-500 cursor-pointer">
            OLX Terms and Conditions and Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

