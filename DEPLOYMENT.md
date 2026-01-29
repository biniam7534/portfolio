# Portfolio Deployment Guide

Follow these steps to deploy your portfolio with a working backend and database.

## 1. Database: MongoDB Atlas
Since you're using MongoDB, you need a cloud database.
1. Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a **Free Shared Cluster**.
3. In **Network Access**, add `0.0.0.0/0` (allow all IPs for now).
4. In **Database Access**, create a user and password.
5. Get your **Connection String** (it looks like `mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio`).

---

## 2. Backend: Render (or Railway)
1. Go to [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the following:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add **Environment Variables**:
   - `MONGODB_URI`: (Your MongoDB Atlas string from Step 1)
   - `PORT`: `5000`
6. Copy your Backend URL (e.g., `https://portfolio-backend.onrender.com`).

---

## 3. Frontend: Vercel
1. Go to [Vercel](https://vercel.com/).
2. Create a new **Project** and connect your GitHub repository.
3. Set the following:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
4. Add **Environment Variables**:
   - `VITE_API_BASE_URL`: (Your Backend URL from Step 2)
5. Deploy!

---

## Important Notes:
- **CORS**: The backend is currently configured to allow all origins (`app.use(cors())`). This is good for setup but you can restrict it to your Vercel URL later in `server/index.js`.
- **Environment Variables**: Never commit your real `.env` files to GitHub. I have updated the `.gitignore` to protect them.
