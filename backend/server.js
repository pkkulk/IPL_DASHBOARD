const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Environment Variable Check ---
const apiKey = process.env.CRIC_API_KEY;

if (!apiKey) {
  console.error("❌ CRIC_API_KEY is missing in the .env file.");
}

// --- Route: Get All Current Matches ---
app.get('/api/featured-matches', async (req, res) => {
  if (!apiKey) {
    return res.status(500).json({ message: "Server configuration error: API Key missing." });
  }

  const currentMatchesUrl = `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`;

  try {
    const response = await axios.get(currentMatchesUrl);

    let currentMatches = [];
    if (response.data && Array.isArray(response.data.data)) {
      currentMatches = response.data.data;
    } else {
      return res.status(500).json({ message: "Unexpected API response structure." });
    }

    // Sort matches by dateTimeGMT
    currentMatches.sort((a, b) => {
      const dateA = new Date(a.dateTimeGMT);
      const dateB = new Date(b.dateTimeGMT);
      return dateA - dateB;
    });

    res.status(200).json({ matches: currentMatches });
  } catch (error) {
    console.error("❌ Error fetching matches:", error.message);
    res.status(500).json({
      message: "Failed to fetch match data.",
      error: error.message,
    });
  }
});

// --- Default Route ---
app.get('/', (req, res) => {
  res.send('✅ Cricket API Backend is running. Use /api/featured-matches to get data.');
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
