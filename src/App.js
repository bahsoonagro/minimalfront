// app.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running ✅ at https://minimalback-production.up.railway.app");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Railway backend 🚂",
    url: "https://minimalback-production.up.railway.app/api/hello",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
