# 🚀 Resource Management System – Backend

## 📖 Overview
This is the **backend server** for the Resource Management System.  
It provides user authentication (Admin & User), resource management APIs, and role-based access control.

---

🔗 Live Links

Backend Deployment: https://masai-repo.onrender.com

## ✨ Features
- User Authentication (Login, JWT-based)
- Role-based Access (Admin/User)
- CRUD APIs for Resources
- Secure Password Handling
- Deployed with Render

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT + bcrypt
- **Deployment:** Render

---

## 📂 Folder Structure
backend/
│── src/
│ ├── controllers/ # Request handlers
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── middleware/ # Auth middlewares
│ └── server.js # Entry point
│
├── .env.example # Example environment variables
├── package.json
└── README.md


## ⚙️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/resource-management-backend.git
   cd backend
Install dependencies:

npm install
Add environment variables in .env:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Start the server:

npm run dev
📌 API Documentation
Endpoint	Method	Access	Description
/api/auth/login	POST	Public	Login user and return JWT token
/api/resources	GET	User	Get all resources
/api/resources	POST	Admin	Add new resource
/api/resources/:id	PUT	Admin	Update a resource
/api/resources/:id	DELETE	Admin	Delete a resource