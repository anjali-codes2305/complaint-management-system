import React from 'react';

const StatusBadge = ({ status }) => {
  const statusColor = {
    Pending: 'bg-red-500',
    'In Progress': 'bg-yellow-500',
    Resolved: 'bg-green-500'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-white text-sm ${statusColor[status] || 'bg-gray-400'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
