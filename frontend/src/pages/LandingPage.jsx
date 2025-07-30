import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ComplaintEase</h1>
        <nav className="space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          <Link to="/register" className="text-gray-600 hover:text-blue-600">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 text-center p-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Effortless Complaint Management
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          ComplaintEase helps users submit and track complaints while enabling admins and agents to resolve them efficiently. Streamline your grievance process with a few clicks.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Easy Complaint Submission</h3>
            <p className="text-gray-600 mt-2">Submit complaints with ease using a user-friendly form interface.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Real-Time Tracking</h3>
            <p className="text-gray-600 mt-2">Track your complaints in real-time and get notified on updates.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Admin & Agent Dashboards</h3>
            <p className="text-gray-600 mt-2">Powerful dashboards to monitor, assign, and resolve complaints quickly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-gray-600 py-4">
        © {new Date().getFullYear()} ComplaintEase. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
