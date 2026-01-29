const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Message = require('./models/Message');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is healthy' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { first_name, last_name, user_email, user_phone, message } = req.body;

    const newMessage = new Message({
      first_name,
      last_name,
      user_email,
      user_phone,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

