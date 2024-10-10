const express = require("express");
const router = express.Router();
const db = require("../db"); // Importuj db konekciju

// Get all members
router.get("/", (req, res) => {
  db.query("SELECT * FROM members", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new member
router.post("/", (req, res) => {
  const { first_name, last_name, dob, discipline, contact_info } = req.body;
  db.query(
    "INSERT INTO members (first_name, last_name, dob, discipline, contact_info) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, dob, discipline, contact_info],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: results.insertId, first_name, last_name });
    }
  );
});

// Export router
module.exports = router;
