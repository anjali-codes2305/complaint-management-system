import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  complaintText: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;
