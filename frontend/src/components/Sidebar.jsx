import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const links = {
    user: [
      { name: 'Dashboard', path: '/dashboard/user' },
      { name: 'Submit Complaint', path: '/submit-complaint' },
    ],
    admin: [
      { name: 'Dashboard', path: '/dashboard/admin' },
    ],
    agent: [
      { name: 'Dashboard', path: '/dashboard/agent' },
    ]
  };

  return (
    <aside className="w-64 h-screen bg-gray-100 p-6 border-r hidden md:block">
      <h2 className="text-2xl font-bold mb-6">ComplaintEase</h2>
      <nav className="space-y-4">
        {links[role]?.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'block bg-blue-100 text-blue-600 px-3 py-2 rounded' : 'block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
