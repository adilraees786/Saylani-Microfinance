import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


 const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login logic for demonstration purposes
    if (email === "user@example.com" && password === "password") {
      navigate("/landingpage"); // Redirect to the dashboard on success
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h1>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password? <a href="/resetpass" className="text-blue-500 hover:underline">Reset it here</a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;