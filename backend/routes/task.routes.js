const express = require('express');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

// Protected task retrieval endpoint
router.get('/', protect, (req, res) => {
  res.json([
    { id: 1, title: 'Learn React Native', completed: false, user: req.user._id },
    { id: 2, title: 'Deploy Authentication Backend to Render', completed: true, user: req.user._id },
    { id: 3, title: 'Finish internship assignment', completed: false, user: req.user._id },
  ]);
});

module.exports = router;
