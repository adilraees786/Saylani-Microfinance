
import React, { useState } from "react";
import Navbar from "../Components/Navbar";

 const LoanRequest = () => {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        cnic: "",
        email: "",
        address: "",
        phone: "",
      });
      const [guarantors, setGuarantors] = useState([
        { name: "", email: "", cnic: "", location: "" },
        { name: "", email: "", cnic: "", location: "" },
      ]);
      const [documents, setDocuments] = useState(null);
    
      const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleGuarantorChange = (index, e) => {
        const { name, value } = e.target;
        setGuarantors((prev) => {
          const updated = [...prev];
          updated[index][name] = value;
          return updated;
        });
      };
    
      const handleDocumentUpload = (e) => {
        setDocuments(e.target.files[0]);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to backend)
        console.log({ personalInfo, guarantors, documents });
      };
    
      return (
        <div>
<Navbar/>
        

        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Loan Application</h1>
    
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
          >
            {/* Personal Information */}
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            {Object.keys(personalInfo).map((key) => (
              <div className="mb-4" key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="text"
                  name={key}
                  value={personalInfo[key]}
                  onChange={handlePersonalInfoChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            ))}
    
            {/* Guarantors Information */}
            <h2 className="text-lg font-semibold mb-4">Guarantors Information</h2>
            {guarantors.map((guarantor, index) => (
              <div key={index} className="mb-6 border p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Guarantor {index + 1}
                </h3>
                {Object.keys(guarantor).map((key) => (
                  <div className="mb-2" key={key}>
                    <label className="block text-sm text-gray-700 mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={guarantor[key]}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
    
            {/* Document Upload */}
            <h2 className="text-lg font-semibold mb-4">Documents</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Statement/Salary Sheet (Optional)
              </label>
              <input
                type="file"
                onChange={handleDocumentUpload}
                className="w-full p-2 border rounded-lg"
              />
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit Application
            </button>
          </form>
        </div>
        </div>
      );
    };

export default LoanRequest;