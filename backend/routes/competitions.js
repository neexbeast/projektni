const express = require("express");
const router = express.Router();
const db = require("../db"); // Importuj db konekciju

// Get all competitions
router.get("/", (req, res) => {
  db.query("SELECT * FROM competitions", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new competition
router.post("/", (req, res) => {
  const { name, date, discipline, results } = req.body;
  db.query(
    "INSERT INTO competitions (name, date, discipline, results) VALUES (?, ?, ?, ?)",
    [name, date, discipline, JSON.stringify(results)],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res
        .status(201)
        .json({ id: results.insertId, name, date, discipline, results });
    }
  );
});

module.exports = router;
