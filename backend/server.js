import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import complaintRoutes from './routes/complaintRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/complaints', complaintRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('✅ Backend is working with MongoDB!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
});

