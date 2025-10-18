const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log("📩 Contact Message:", data);
  res.json({ message: "Contact message received!" });
});

module.exports = router;
