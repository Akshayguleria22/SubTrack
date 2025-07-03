# Subscription Tracker Backend 🚀

This is the backend API for the **Subscription Tracker App**, helping users manage and track all their subscriptions in one place.

---

## ✨ Features
✅ **User Authentication**
- Sign up, sign in, and sign out securely using JWT & bcrypt
- Arcjet integration for bot detection and rate limiting

✅ **Subscription Management**
- Users can add new subscriptions (like Netflix, Spotify, etc.)
- Fetch all their subscriptions
- Update or delete subscriptions

✅ **Security**
- Uses Arcjet for advanced bot protection and rate limiting
- Encrypted passwords (bcrypt)
- JSON Web Tokens (JWT) for secure sessions

✅ **Deployed on Render**
- Runs on Render for easy deployment and scalability
- Connected to MongoDB Atlas for database storage

---

## 🚀 Tech Stack
- **Node.js + Express** — for building REST APIs
- **MongoDB + Mongoose** — for storing user & subscription data
- **JWT & bcrypt** — for authentication and password security
- **Arcjet** — for bot detection & rate limiting
- **Render** — for deployment

---

## ⚙️ Environment Setup

Create a `.env` file in your root directory:

```env
PORT=3000

# MongoDB
URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/subscription_tracker

# JWT secrets
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Arcjet
ARCJET_KEY=arc_live_xxxxxxxxxx

# Node environment
```
NODE_ENV=development
🔥 Getting Started
🚀 Clone the repo
bash
Copy
Edit
git clone https://github.com/yourusername/subscription-tracker.git
cd subscription-tracker
📦 Install dependencies
bash
Copy
Edit
npm install
▶️ Run locally
bash
Copy
Edit
npm run dev
API will be live at:

arduino
Copy
Edit
http://localhost:3000
🔐 Authentication Endpoints
➡️ Sign up
POST /api/v1/auth/sign-up

json
Copy
Edit
{
  "name": "Akshay",
  "email": "akshay@example.com",
  "password": "password123"
}
➡️ Sign in
POST /api/v1/auth/sign-in

json
Copy
Edit
{
  "email": "akshay@example.com",
  "password": "password123"
}
Returns a JWT token.

➡️ Sign out
POST /api/v1/auth/sign-out

Revokes sessions & logs out.

📜 Subscriptions API
➕ Add subscription
POST /api/v1/subscription

json
Copy
Edit
{
  "name": "Netflix",
  "amount": 499,
  "renewalDate": "2025-08-01"
}
🗂 View all subscriptions
GET /api/v1/subscription

✏️ Update subscription
PATCH /api/v1/subscription/:id

🗑 Delete subscription
DELETE /api/v1/subscription/:id

✅ All subscription routes require:

makefile
Copy
Edit
Authorization: Bearer <jwt_token>
🛡 Arcjet Protection
Blocks bots & scrapers.

Limits requests (rate limiting) for fair use.

🚀 Deployment
✅ Deployed on Render.
Just push to your GitHub repo, connect on Render, and Render takes care of deployments with automatic restarts on code change.
🚀 Future Enhancements
Payment reminders & email notifications

Analytics dashboard for monthly spending

Multi-user household plans

Stripe integration
