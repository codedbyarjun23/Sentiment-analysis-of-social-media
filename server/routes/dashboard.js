const express = require('express');
const router = express.Router();

// GET /api/dashboard/summary
router.get('/summary', (req, res) => {
    // Mock Data
    res.json({
        totalPosts: 1245,
        overallSentiment: { positive: 45, neutral: 30, negative: 25 },
        engagement: '4.2%',
        trend: 'up',
    });
});

// GET /api/dashboard/posts
router.get('/posts', (req, res) => {
    // Mock Data
    res.json([
        { id: 1, text: "Loving the new features! #awesome", platform: "Twitter", sentiment: "Positive", date: "2 mins ago" },
        { id: 2, text: "Not sure about this update...", platform: "Facebook", sentiment: "Neutral", date: "15 mins ago" },
        { id: 3, text: "The service is down again. Frustrating.", platform: "Twitter", sentiment: "Negative", date: "1 hour ago" },
        { id: 4, text: "Great customer support today.", platform: "Instagram", sentiment: "Positive", date: "2 hours ago" },
        { id: 5, text: "Does anyone know how to use this?", platform: "Reddit", sentiment: "Neutral", date: "3 hours ago" },
    ]);
});

// GET /api/dashboard/keywords
router.get('/keywords', (req, res) => {
    res.json({
        positive: ['awesome', 'love', 'great', 'thanks', 'easy'],
        neutral: ['update', 'features', 'released', 'new', 'version'],
        negative: ['down', 'slow', 'error', 'bug', 'fail']
    });
});

module.exports = router;
