

import { Link } from "react-router-dom";
import LoanCalculator from "../Components/LoanCalculator";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <div>
      
      <Navbar />
      <div className="min-h-screen bg-gray-50 w-full">
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
              Empower Your Future with Interest-Free Loans
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our loan options tailored for weddings, home construction, businesses, and education.
            </p>
            <Link
              to="/loanrequest"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700"
            >
              Apply Now
            </Link>
          </div>
        </section>

        {/* Loan Categories Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Our Loan Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  Subcategories={category.Subcategories}
                  Maximumloan={category.Maximumloan}
                  Loanperiod={category.Loanperiod}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <LoanCalculator />
        </section>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Wedding Loans",
    Subcategories: "Valima, Furniture, Valima Food, Jahez",
    Maximumloan: "PKR 5 Lakh",
    Loanperiod: "3 Years",
  },
  {
    title: "Home Construction Loans",
    Subcategories: "Structure, Finishing, Loan",
    Maximumloan: "PKR 10 Lakh",
    Loanperiod: "5 Years", 
  },
  {
    title: "Business Startup Loans",
    Subcategories: "Buy Stall, Advance Rent for Shop, Shop Assets, Shop Machinery",
    Maximumloan: "PKR 10 Lakh",
    Loanperiod: "5 Years",
  },
  {
    title: "Education Loans",
    Subcategories: "University Fees, Child Fees Loan",
    Maximumloan: "Based on Requirement",
    Loanperiod: "4 Years",
  },
];

const CategoryCard = ({ title, Subcategories, Maximumloan, Loanperiod }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <h4 className="text-xl font-bold text-blue-600 mb-3">{title}</h4>
    <p className="text-gray-600">
      <span className="font-semibold">Subcategories:</span> {Subcategories}
    </p>
    <p className="text-gray-600">
      <span className="font-semibold">Maximum Loan:</span> {Maximumloan}
    </p>
    <p className="text-gray-600">
      <span className="font-semibold">Loan Period:</span> {Loanperiod}
    </p>
  </div>
);

export default LandingPage;
