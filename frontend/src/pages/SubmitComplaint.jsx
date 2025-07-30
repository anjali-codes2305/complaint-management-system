import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


const SubmitComplaint = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint submitted:', formData);
    alert('Complaint submitted successfully!');
  };

  return (
    <>
      <Header />

      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Submit a Complaint</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">-- Select Category --</option>
                <option value="Electricity">Electricity</option>
                <option value="Water">Water</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Attachment (optional)</label>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                className="w-full mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubmitComplaint;
