const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Mock User Data
const users = [
  {
    id: 1,
    name: "Ashwin",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Priya",
    role: "Full Stack Developer"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Express Server",
    status: "Server Running"
  });
});

// Users Route
app.get("/api/users", (req, res) => {
  res.json({
    totalUsers: users.length,
    users: users
  });
});

// Status Route
app.get("/api/status", (req, res) => {
  res.json({
    server: "Active",
    port: PORT
  });
});

// Start Server
app.listen(PORT, () => {
  console.log("================================");
  console.log(`Server running on Port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log("================================");
});