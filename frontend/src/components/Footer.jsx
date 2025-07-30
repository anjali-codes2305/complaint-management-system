import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold text-blue-600 mb-2">ComplaintEase</h4>
          <p>Your all-in-one platform for complaint management across users, agents, and admins.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
            <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: support@complaintease.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} ComplaintEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
