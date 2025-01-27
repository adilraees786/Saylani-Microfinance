import React, { useState } from "react";

const passwordreset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Simulate password reset process
    setTimeout(() => {
      setSuccessMessage("Your password has been successfully reset.");
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>

        <form onSubmit={handlePasswordReset}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full mb-4 p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full mb-4 p-2 border rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            placeholder="Enter new password"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full mb-4 p-2 border rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm new password"
          />

          {errorMessage && (
            <p className="text-sm text-red-600 mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Reset Password
          </button>

          {successMessage && (
            <p className="text-sm text-green-600 mt-4 text-center">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default passwordreset;