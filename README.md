# Subscription Tracker🚀

This is the pure backend project of **Subscription Tracker App**, which helps users track and manage all their subscriptions in one place — complete with automated email reminders.

---

## ✨ Features

✅ **User Authentication**
- Sign up, sign in, and sign out securely using JWT & bcrypt
- Secure password hashing with bcrypt

✅ **Subscription Management**
- Users can add, view, update, and delete their subscriptions (like Netflix, Spotify, etc.)
- Each subscription includes name, amount, and renewal date.

✅ **Email Workflows**
- Automatically sends reminder emails to users **before their subscription renewals.**
- Helps users avoid missed payments and stay on top of their finances.

✅ **Security & Rate Limiting**
- Integrated with Arcjet for bot detection and rate limiting.
- Prevents abuse and protects your API.

✅ **Deployed on Render**
- Live and scalable deployment using Render connected to MongoDB Atlas.

---

## 🚀 Tech Stack

- ⚙️ **Node.js + Express** — API server
- 🗄 **MongoDB + Mongoose** — stores users & subscriptions
- 🔐 **JWT + bcrypt** — authentication & password security
- 📧 **Nodemailer / Resend (or your provider)** — sends automated emails
- 🛡 **Arcjet** — bot protection and rate limiting
- 🚀 **Render** — deployment

---

## ⚙️ Environment Setup

Create a `.env` file in your project root:

```env
PORT=3000

# Database
URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/subscription_tracker

# JWT secrets
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Arcjet
ARCJET_KEY=arc_live_xxxxxxxxxx

# Email provider
EMAIL_USER=youremail@example.com
EMAIL_PASS=your-email-password-or-app-password

# Environment
NODE_ENV=development
