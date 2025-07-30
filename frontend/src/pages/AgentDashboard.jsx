import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const assignedComplaints = [
  {
    id: '201',
    subject: 'Broken streetlight',
    category: 'Electricity',
    status: 'In Progress',
    date: '2025-07-29',
  },
  {
    id: '202',
    subject: 'Water Tank Overflow',
    category: 'Water',
    status: 'Pending',
    date: '2025-07-28',
  },
];

const AgentDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="p-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Agent Dashboard</h1>

        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Subject</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignedComplaints.map((c) => (
                <tr key={c.id} className="border-b text-center">
                  <td className="py-2 px-4">{c.id}</td>
                  <td className="py-2 px-4">{c.subject}</td>
                  <td className="py-2 px-4">{c.category}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        c.status === 'Resolved'
                          ? 'bg-green-500'
                          : c.status === 'In Progress'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{c.date}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      onClick={() => navigate(`/complaints/${c.id}`)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                    >
                      View
                    </button>
                    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                      Mark Resolved
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AgentDashboard;
