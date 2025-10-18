// Already existing code at top...
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running 🚀");
});

// 🔸 Book a Ride API
app.post("/api/book-ride", (req, res) => {
  const { name, pickup, drop } = req.body;
  console.log("📦 Booked Ride:", { name, pickup, drop });
  res.status(200).json({ message: "Ride booked successfully!" });
});

// 🔸 Become a Driver API
app.post("/api/become-driver", (req, res) => {
  const { name, license } = req.body;
  console.log("🧑‍✈️ New Driver:", { name, license });
  res.status(200).json({ message: "Driver registered successfully!" });
});

// 🔸 Contact Us API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Contact Form:", { name, email, message });
  res.status(200).json({ message: "Message sent successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
