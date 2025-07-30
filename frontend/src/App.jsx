import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/AgentDashboard";
import AuthCard from "./pages/AuthCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/submit-complaint" element={<SubmitComplaint />} />
        <Route path="/complaints/:id" element={<ComplaintDetails />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/agent" element={<AgentDashboard />} />
        <Route path="/auth" element={<AuthCard />} />
      </Routes>
    </div>
  );
}

export default App;
