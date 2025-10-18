const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log("🧑‍✈️ New Driver:", data);
  res.json({ message: "Driver registered successfully!" });
});

module.exports = router;
