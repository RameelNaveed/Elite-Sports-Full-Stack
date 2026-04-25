# 🏋️ Elite Sports Management System

![Banner](https://img.shields.io/badge/FullStack-Web%20App-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)

Elite Sports is a comprehensive Gym and Sports Management System designed to streamline facility operations. From membership tracking to trainer bookings and automated payment status, this platform provides a seamless experience for both administrators and members.

---

## 🌟 Key Features

- **👤 User Management**: Full CRUD operations for members with secure JWT authentication.
- **📅 Trainer Bookings**: Schedule sessions with professional trainers and manage timeslots.
- **🏟️ Facility Management**: Book sports facilities (courts, gym floors, etc.) and track availability.
- **💳 Payment Integration**: Track membership payments, history, and status updates.
- **🏆 Membership Plans**: Multiple tiers (Basic, Premium, Elite) with different membership types.
- **💬 Feedback System**: Users can submit reviews and feedback for trainers and facilities.
- **📊 Admin Dashboard**: Centralized control for managing the entire ecosystem.

---

## 🛠️ Tech Stack

- **Frontend**: React (v19), React Router, Axios, Bootstrap, React-Toastify.
- **Backend**: Node.js, Express.js.
- **Database**: Microsoft SQL Server (MSSQL).
- **Authentication**: JWT (JSON Web Tokens).

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **SQL Server** (Express or standard edition)
- **npm** or **yarn**

### 2. Database Setup
1. Open your SQL Server tool (SSMS or VS Code SQL Extension).
2. Run the provided script: `Project_FInal_DB.sql`.
3. This will create the `MyProjectDB` and all necessary tables/stored procedures.

### 3. Backend Configuration
1. Navigate to the `node-server` folder.
2. Create a `.env` file and add your credentials:
   ```env
   DB_SERVER=localhost
   DB_DATABASE=MyProjectDB
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_PORT=1433
   JWT_SECRET=your_secret_key
   PORT=3000
   ```
3. Install dependencies and start the server:
   ```bash
   npm install
   node server.js
   ```

### 4. Frontend Setup
1. Navigate to the `gym-crud-ui` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```text
├── gym-crud-ui/         # React Frontend
│   ├── public/          # Static assets
│   └── src/             # React components and logic
├── node-server/         # Express Backend
│   ├── routes/          # API Endpoints
│   ├── controllers/     # Business logic
│   └── server.js        # Entry point
└── Project_FInal_DB.sql # Database schema and seed data
```

