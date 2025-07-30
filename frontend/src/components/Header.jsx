import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <Link to="/login" className="text-white underline hover:text-gray-200">Logout</Link>
    </header>
  );
};

export default Header;
