import React, { useState } from "react";


const Register = () => {

 
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="mb-4">
          <label
           
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
          
          
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter your CNIC"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
        
           
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
        
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
