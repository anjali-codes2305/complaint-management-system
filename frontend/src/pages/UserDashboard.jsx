import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ComplaintCard from '../components/ComplaintCard';
import Footer from '../components/Footer';

const UserDashboard = () => {
  // Dummy complaint data for now (replace later with real state or props)
  const complaints = [
    {
      id: 1,
      title: "Water Leakage",
      description: "Pipe burst in block A",
      status: "Pending",
      date: "2025-07-30"
    },
    {
      id: 2,
      title: "Electricity Issue",
      description: "Frequent power cuts on 2nd floor",
      status: "Resolved",
      date: "2025-07-28"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Welcome, Anjali 👋</h2>
            <p className="mb-4">Track your complaints and submit new ones easily.</p>

            <Link to="/submit-complaint">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                Submit New Complaint
              </button>
            </Link>
          </div>

          {/* Complaints List */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Recent Complaints</h3>

            {complaints.length > 0 ? (
              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <ComplaintCard key={complaint.id} complaint={complaint} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-gray-500">No complaints submitted yet.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default UserDashboard;
