# 💼 Job Portal Project

A full-stack **Job Portal Web Application** built with **React** (frontend) and **Node.js + Express + MongoDB** (backend). It supports user/recruiter roles, job listings, and job applications with JWT-based authentication.

---

## 🚀 Features

- 🔐 **User Authentication** — Register & Login with JWT tokens
- 👥 **Role-Based Access** — Separate roles for `user` (job seeker) and `recruiter`
- 📋 **Job Listings** — Recruiters can post jobs; users can browse them
- 📝 **Job Applications** — Users can apply for jobs
- 🛡️ **Protected Routes** — Middleware-based route protection
- 🌐 **REST API** — Clean API structure with Express.js

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| React 19 | UI framework |
| React Scripts | Build tooling (CRA) |

### Backend
| Technology | Description |
|------------|-------------|
| Node.js | Runtime environment |
| Express.js 5 | Web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| bcrypt | Password hashing |
| jsonwebtoken | JWT authentication |
| dotenv | Environment variables |
| nodemon | Dev auto-reload |
| CORS | Cross-origin resource sharing |

---

## 📁 Project Structure

```
job-portal/
├── backend/
│   ├── config/
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT auth middleware
│   ├── models/
│   │   ├── User.js               # User schema (name, email, password, role)
│   │   ├── Job.js                # Job schema
│   │   └── Application.js        # Job application schema
│   ├── routes/
│   │   ├── auth.js               # Register & Login routes
│   │   ├── job.js                # Job CRUD routes
│   │   └── application.js        # Application routes
│   ├── server.js                 # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (running locally on port 27017)
- npm

---

### 🔧 Backend Setup

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Create a .env file and add your environment variables
# (see Environment Variables section below)

# Start the backend server
node server.js

# OR with auto-reload (nodemon)
npx nodemon server.js
```

The backend will run at: **http://localhost:5000**

---

### 🎨 Frontend Setup

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will run at: **http://localhost:3000**

---

## 🌍 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jobportal
JWT_SECRET=your_secret_key_here
```

> ⚠️ **Never commit your `.env` file** — it's already listed in `.gitignore`.

---

## 📡 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

#### Register Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

#### Login Body
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Job Routes — `/api/jobs`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all jobs |
| POST | `/api/jobs` | Post a new job (recruiter) |
| GET | `/api/jobs/:id` | Get a specific job |
| DELETE | `/api/jobs/:id` | Delete a job |

---

### Application Routes — `/api/applications`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/applications` | Apply for a job |
| GET | `/api/applications` | Get all applications |

---

## 👤 User Roles

| Role | Permissions |
|------|-------------|
| `user` | Browse jobs, apply for jobs |
| `recruiter` | Post jobs, view applications |

---

## 🔒 Authentication

This project uses **JWT (JSON Web Tokens)** for authentication.

1. After login, a token is returned in the response.
2. Include the token in the `Authorization` header for protected routes:

```
Authorization: Bearer <your_token>
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Chaman Kumar Singh**  
GitHub: [@chamankumarsingh](https://github.com/chamankumarsingh)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
