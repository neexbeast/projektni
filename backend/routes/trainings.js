const express = require("express");
const router = express.Router();
const db = require("../db"); // Importuj db konekciju

// Get all trainings
router.get("/", (req, res) => {
  db.query("SELECT * FROM trainings", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new training
router.post("/", (req, res) => {
  const { date, trainer_id, attendance } = req.body;
  db.query(
    "INSERT INTO trainings (date, trainer_id, attendance) VALUES (?, ?, ?)",
    [date, trainer_id, JSON.stringify(attendance)],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res
        .status(201)
        .json({ id: results.insertId, date, trainer_id, attendance });
    }
  );
});

module.exports = router;
