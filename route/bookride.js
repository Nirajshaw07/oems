const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log("🚗 Booked Ride:", data);
  res.json({ message: "Ride booked successfully!" });
});

module.exports = router;
