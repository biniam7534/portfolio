---
description: How to test the contact form and database connection
---

1. Make sure you have **MongoDB** installed and running on your machine.
2. Start the backend server:
   ```bash
   cd server
   npm install
   npm run dev
   ```
3. Start the frontend client:
   ```bash
   cd client
   npm run dev
   ```
4. Fill out the contact form on the website and click "Send Message".
5. Check the backend terminal for a "Connected to MongoDB" message.
6. You can verify the data in MongoDB using a tool like MongoDB Compass or by adding a GET route to the backend.
