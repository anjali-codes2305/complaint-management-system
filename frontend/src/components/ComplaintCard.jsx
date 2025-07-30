import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComplaintCard = ({ complaint }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <h3 className="text-lg font-semibold mb-1">{complaint.subject}</h3>
      <p className="text-sm text-gray-600 mb-2">{complaint.description}</p>
      <span className="text-sm font-medium text-blue-500">{complaint.category}</span>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">{complaint.date}</span>
        <button
          onClick={() => navigate(`/complaints/${complaint.id}`)}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ComplaintCard;
