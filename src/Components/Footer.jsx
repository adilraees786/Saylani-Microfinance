import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-1 text-center">
    <p>&copy; 2025 Saylani Microfinance App. All rights reserved.</p>
    <div className="flex justify-center space-x-2 mt-1">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
    </div>
  </footer>
  )
}

export default Footer;