const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("TaskHive Backend is Running 🚀");
});

// AI Recommendation Route
app.post("/api/recommend", async (req, res) => {
    try {
        const response = await axios.post(process.env.AI_API_URL, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "AI API request failed" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
