import React, { useState } from "react";

const LoanCalculator = () => {
  const [category, setCategory] = useState("Wedding Loans");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState();
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const categories = {
    "Wedding Loans": ["Valima", "Furniture", "Valima Food", "Jahez"],
    "Home Construction Loans": ["Structure", "Finishing", "Loan"],
    "Business Startup Loans": ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    "Education Loans": ["University Fees", "Child Fees Loan"],
  };

  const maxLoanAmounts = {
    "Wedding Loans": 500000,
    "Home Construction Loans": 1000000,
    "Business Startup Loans": 1000000,
    "Education Loans": "Based on requirement",
  };

  const handleCalculate = () => {
    if (typeof maxLoanAmounts[category] === "number") {
      const loanAmount = maxLoanAmounts[category] - initialDeposit;
      setEstimatedLoan({
        loanAmount,
        monthlyPayment: (loanAmount / (loanPeriod * 12)).toFixed(2),
      });
    } else {
      setEstimatedLoan("Please contact for education loan requirements.");
    }
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-2  text-blue-800">Loan Calculator</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">Select Category</label>
        <select
          className="w-full mb-4 p-2 border rounded-lg"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory("");
          }}
        >
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-700">Select Subcategory</label>
        <select
          className="w-full mb-4 p-2 border rounded-lg"
          value={subcategory}
          required
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">Select</option>
          {categories[category].map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-700">Initial Deposit</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded-lg"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(Number(e.target.value))}
          required
          
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Loan Period (Years)</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded-lg"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(Number(e.target.value))}
          min={1}
        />

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
      </div>

      {estimatedLoan && (
        <div className="mt-6 w-full max-w-md bg-green-100 border border-green-300 p-4 rounded-lg">
          {typeof estimatedLoan === "string" ? (
            <p className="text-green-800">{estimatedLoan}</p>
          ) : (
            <div>
              <p className="text-sm font-medium text-gray-700">Estimated Loan Amount: PKR {estimatedLoan.loanAmount}</p>
              <p className="text-sm font-medium text-gray-700">Monthly Payment: PKR {estimatedLoan.monthlyPayment}</p>
              {/* <p className="text-sm font-medium text-gray-700">Loan Period: Years {estimatedLoan.loanPeriod}</p> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
