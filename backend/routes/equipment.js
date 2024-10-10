const express = require("express");
const router = express.Router();
const db = require("../db"); // Importuj db konekciju

// Get all equipment
router.get("/", (req, res) => {
  db.query("SELECT * FROM equipment", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new equipment
router.post("/", (req, res) => {
  const { name, status } = req.body;
  db.query(
    "INSERT INTO equipment (name, status) VALUES (?, ?)",
    [name, status],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: results.insertId, name, status });
    }
  );
});

module.exports = router;
