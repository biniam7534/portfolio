const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Message = require('./models/Message');

const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('Attempting to connect to MongoDB...');
console.log('URI:', process.env.MONGODB_URI ? 'URI found' : 'URI NOT FOUND');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  serverSelectionTimeoutMS: 5000
})
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('--- MongoDB Connection Warning ---');
    console.error('Note: Could not connect to MongoDB Atlas (likely IP whitelist issue).');
    console.error('THE SERVER WILL STILL WORK: Messages will be saved to "server/backups/messages.json" instead.');
    console.error('----------------------------------');
  });

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is healthy' });
});

app.post('/api/contact', async (req, res) => {
  console.log('Received contact request:', req.body);
  const { first_name, last_name, user_email, user_phone, message } = req.body;

  // Basic validation
  if (!first_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Backup helper function
  const saveToBackup = () => {
    try {
      const backupDir = path.join(__dirname, 'backups');
      if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
      const backupFile = path.join(backupDir, 'messages.json');
      const entry = { date: new Date(), ...req.body };
      fs.appendFileSync(backupFile, JSON.stringify(entry) + '\n');
      console.log('Message saved to local backup file.');
      return true;
    } catch (e) {
      console.error('Backup save failed:', e);
      return false;
    }
  };

  try {
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({
        first_name,
        last_name,
        user_email,
        user_phone,
        message,
      });
      await newMessage.save();
      console.log('Message saved to MongoDB successfully');
      res.status(201).json({ message: 'Message sent and saved successfully!' });
    } else {
      console.warn('Database not connected. Using local backup.');
      if (saveToBackup()) {
        res.status(201).json({ message: 'Message received! (Saved to local backup)' });
      } else {
        res.status(503).json({ error: 'Database and backup both unavailable.' });
      }
    }
  } catch (error) {
    console.error('Error in contact route:', error);
    if (saveToBackup()) {
      res.status(201).json({ message: 'Message received! (Saved to fallback)' });
    } else {
      res.status(500).json({ error: 'Failed to save message.' });
    }
  }
});



