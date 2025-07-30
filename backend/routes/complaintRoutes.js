import express from 'express';
import Complaint from '../models/complaint.js';

const router = express.Router();

// POST: Submit a complaint
router.post('/', async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(400).json({ error: 'Error submitting complaint', details: err });
  }
});

// GET: Get all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching complaints', details: err });
  }
});

// (Optional) PATCH: Update status of a complaint
router.patch('/:id', async (req, res) => {
  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedComplaint);
  } catch (err) {
    res.status(400).json({ error: 'Error updating complaint', details: err });
  }
});

export default router;
