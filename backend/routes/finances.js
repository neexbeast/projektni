const express = require("express");
const router = express.Router();
const db = require("../db"); // Importuj db konekciju

// Get all finances
router.get("/", (req, res) => {
  db.query("SELECT * FROM finances", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new finance entry
router.post("/", (req, res) => {
  const { member_id, amount, date, description } = req.body;
  db.query(
    "INSERT INTO finances (member_id, amount, date, description) VALUES (?, ?, ?, ?)",
    [member_id, amount, date, description],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res
        .status(201)
        .json({ id: results.insertId, member_id, amount, date, description });
    }
  );
});

module.exports = router;
