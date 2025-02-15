import { BrowserRouter as Router, Routes, Route } from "react-router-dom";                                                                                          
import AdminDashboard from "./Pages/AdminDashboard";
import LoanRequest from "./Pages/LoanRequest"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoanCalculator from "./Components/LoanCalculator";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Resetpass from "./Pages/Resetpass";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/loanrequest" element={<LoanRequest/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="loanCalculator/" element={<LoanCalculator/>} />
        <Route path="resetpass/" element={<Resetpass/>} />

      </Routes>
     
      <Footer/>
    </Router>
  );
}

export default App;



