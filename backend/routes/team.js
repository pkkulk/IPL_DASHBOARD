const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const teamId = req.params.id;
  const apiKey = process.env.CRICKET_API_KEY;

  try {
    const response = await axios.get(`https://api.cricketdata.org/team?id=${teamId}&apikey=${apiKey}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch team data" });
  }
});

module.exports = router;
