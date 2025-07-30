import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatusBadge from '../components/StatusBadge';

const complaints = [
  {
    id: '101',
    subject: 'Water Leakage',
    category: 'Water',
    status: 'Pending',
    date: '2025-07-29',
  },
  {
    id: '102',
    subject: 'Streetlight Issue',
    category: 'Electricity',
    status: 'In Progress',
    date: '2025-07-28',
  },
  {
    id: '103',
    subject: 'Garbage not collected',
    category: 'Sanitation',
    status: 'Resolved',
    date: '2025-07-27',
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header title="Admin Dashboard" />
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
              {complaints.map((c) => (
                <tr key={c.id} className="border-b text-center">
                  <td className="py-2 px-4">{c.id}</td>
                  <td className="py-2 px-4">{c.subject}</td>
                  <td className="py-2 px-4">{c.category}</td>
                  <td className="py-2 px-4">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="py-2 px-4">{c.date}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      onClick={() => navigate(`/complaints/${c.id}`)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                    >
                      View
                    </button>
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm">
                      Assign
                    </button>
                    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                      Resolve
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

export default AdminDashboard;
