const express = require('express');
const router = express.Router();

// POST /api/analyze
router.post('/', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ msg: 'Please provide text to analyze' });
    }

    // Mock Sentiment Logic
    // In a real app, you would call a Python script or an AI API here.
    const lowerText = text.toLowerCase();
    let sentiment = 'Neutral';
    let confidence = 0.5;
    let keywords = [];

    const positiveWords = ['good', 'great', 'love', 'awesome', 'excellent', 'happy'];
    const negativeWords = ['bad', 'hate', 'terrible', 'awful', 'sad', 'angry', 'error'];

    let score = 0;

    positiveWords.forEach(word => {
        if (lowerText.includes(word)) {
            score++;
            keywords.push(word);
        }
    });

    negativeWords.forEach(word => {
        if (lowerText.includes(word)) {
            score--;
            keywords.push(word);
        }
    });

    if (score > 0) sentiment = 'Positive';
    if (score < 0) sentiment = 'Negative';

    // Randomize confidence slightly for effect
    confidence = 0.6 + (Math.abs(score) * 0.1);
    if (confidence > 0.99) confidence = 0.99;

    res.json({
        sentiment,
        confidence: confidence.toFixed(2),
        keywords,
    });
});

module.exports = router;
