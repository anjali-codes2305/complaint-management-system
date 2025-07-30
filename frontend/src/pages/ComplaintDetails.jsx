import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatusBadge from "../components/StatusBadge";
import ChatBox from "../components/ChatBox"; // if it's a floating component

const ComplaintDetails = () => {
  // Dummy data (will be dynamic later)
  const complaint = {
    title: "Internet Not Working",
    name: "Anjali Agarwal",
    email: "anjali@example.com",
    type: "Internet",
    description: "The internet has not been working since yesterday in Block B.",
    status: "Pending",
    submittedAt: "2025-07-28 10:45 AM",
    assignedTo: "Agent Rohit Kumar"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="p-6 flex justify-center">
          <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Complaint Details</h1>

            <div className="space-y-4 text-gray-700">
              <div><strong>Title:</strong> {complaint.title}</div>
              <div><strong>Complainant:</strong> {complaint.name}</div>
              <div><strong>Email:</strong> {complaint.email}</div>
              <div><strong>Type:</strong> {complaint.type}</div>
              <div>
                <strong>Description:</strong>
                <p className="mt-1 ml-4">{complaint.description}</p>
              </div>
              <div><strong>Submitted At:</strong> {complaint.submittedAt}</div>
              <div>
                <strong>Status:</strong>{" "}
                <StatusBadge status={complaint.status} />
              </div>
              <div><strong>Assigned Agent:</strong> {complaint.assignedTo}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional floating chatbox */}
      <ChatBox />
    </div>
  );
};

export default ComplaintDetails;
