import React, { useState } from 'react'
import Navbar from '../Components/Navbar';


const AdminDashboard = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Ali Ahmad",
      category: "Wedding Loans",
      city: "Karachi",
      status: "Pending",
    },
    {
      id: 2,
      name: "Rao Usman",
      category: "Home Construction Loans",
      city: "Lahore",
      status: "Approved",
    },
    {
      id: 3,
      name: "Ali Khan",
      category: "Business Startup Loans",
      city: "Islamabad",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Fatima Ahmed",
      category: "Education Loans",
      city: "Faisalabad",
      status: "In Review",
    },
    {
      id: 5,
      name: "Muhammad Rashid",
      category: "Education Loans",
      city: "Rawalpindi",
      status: "Approved",
    },
    {
      id: 6,
      name: "Ayesha Malik",
      category: " Home Construction Loans",
      city: "Multan",
      status: "Pending",
    },
    {
      id: 7,
      name: "Hassan Raza",
      category: " Home Construction Loans",
      city: "Gujranwala",
      status: "In Review",
    },
    {
      id: 8,
      name: "Zainab Hussain",
      category: "Wedding Loans",
      city: "Peshawar",
      status: "Approved",
    },
    {
      id: 9,
      name: "Omar Farooq",
      category: "Home Construction Loans",
      city: "Quetta",
      status: "Rejected",
    },
    {
      id: 10,
      name: "Nadia Chaudhry",
      category: "Education Loans",
      city: "Sialkot",
      status: "Pending",
    }
   
  ]);
  const [filter, setFilter] = useState("");

  const handleStatusUpdate = (id, status) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  const filteredApplications = filter
    ? applications.filter((app) =>
        app.city.toLowerCase().includes(filter.toLowerCase())
      )
    : applications;

  return (
    <div>
<Navbar/>
    
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-500">Admin Panel</h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Filter by city"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-1/3 p-2 border rounded-lg"
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id}>
                <td className="border p-2 text-center">{app.id}</td>
                <td className="border p-2">{app.name}</td>
                <td className="border p-2">{app.category}</td>
                <td className="border p-2">{app.city}</td>
                <td className="border p-2">{app.status}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleStatusUpdate(app.id, "Approved")}
                    className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(app.id, "Rejected")}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard