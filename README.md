# Expense Tracker Backend

A RESTful API built with Node.js, Express, and MongoDB that handles authentication and expense management for the Expense Tracker application.

## Features

- 👤 User registration
- 🔐 User login
- 🔑 JWT authentication
- 🔒 Password hashing with bcryptjs
- 🛡️ Protected API routes
- 💰 CRUD operations for expenses
- 🗄️ MongoDB data persistence
- 👥 User-specific expense management

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

---

## Project Structure

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB Atlas (or local MongoDB)

### Clone the repository

```bash
git clone https://github.com/Lordwick5/Expense-Tracker-Backend.git
cd Expense-Tracker-Backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

### Start the server

```bash
npm start
```

or

```bash
node src/index.js
```

The API will be available at:

```
http://localhost:4000
```

---

## API Endpoints

| Method | Endpoint | Description | Authentication |
|---------|----------|-------------|----------------|
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login and receive JWT | ❌ |
| GET | `/api/expenses` | Get all expenses | ✅ |
| POST | `/api/expenses` | Create an expense | ✅ |
| PUT | `/api/expenses/:id` | Update an expense | ✅ |
| DELETE | `/api/expenses/:id` | Delete an expense | ✅ |

Protected routes require:

```
Authorization: Bearer <token>
```

---

## Frontend Repository

The frontend for this API is available here:

https://github.com/Lordwick5/Expense-Tracker-Frontend

---

## Future Improvements

- Refresh token authentication
- Rate limiting
- Request validation middleware
- Logging
- Unit testing
- Docker support
- Swagger/OpenAPI documentation

---

## License

Copyright (c) 2026 Prashant Chaudhary. All rights reserved. 

This project was created for personal and educational purposes. You may view and reference the code for learning purposes, but copying, redistributing, or using it for commercial purposes without permission is not allowed.
