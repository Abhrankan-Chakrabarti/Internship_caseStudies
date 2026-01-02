// routes/classes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    'Art Class - Tuesday 4pm',
    'Music Class - Thursday 3pm'
  ]);
});

module.exports = router;
